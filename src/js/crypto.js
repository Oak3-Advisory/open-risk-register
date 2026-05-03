import { ENCRYPTED_EXPORT_FORMAT, ENCRYPTED_EXPORT_VERSION, MAX_IMPORT_BYTES } from './schema.js';

const PBKDF2_ITERATIONS = 250000;
const AES_KEY_LENGTH = 256;
const IV_LENGTH = 12;
const SALT_LENGTH = 16;

function ensureCrypto() {
  if (!globalThis.crypto?.subtle || !globalThis.crypto?.getRandomValues) {
    throw new Error('Web Crypto is not available in this browser.');
  }
}

function ensurePassphrase(passphrase) {
  if (typeof passphrase !== 'string' || passphrase.length < 12) {
    throw new Error('Use a passphrase with at least 12 characters.');
  }
}

function bytesToBase64(bytes) {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(bytes).toString('base64');
  }
  let binary = '';
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(value) {
  if (typeof Buffer !== 'undefined') {
    return new Uint8Array(Buffer.from(value, 'base64'));
  }
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes;
}

async function deriveAesKey(passphrase, salt, usages) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(passphrase),
    'PBKDF2',
    false,
    ['deriveKey']
  );

  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: 'SHA-256',
    },
    keyMaterial,
    {
      name: 'AES-GCM',
      length: AES_KEY_LENGTH,
    },
    false,
    usages
  );
}

function parseEnvelope(jsonString) {
  if (new TextEncoder().encode(jsonString).length > MAX_IMPORT_BYTES) {
    throw new Error('Import files larger than 1 MB are not supported.');
  }

  let parsed;
  try {
    parsed = JSON.parse(jsonString);
  } catch {
    throw new Error('Invalid encrypted backup format.');
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('Invalid encrypted backup format.');
  }

  const allowedKeys = new Set(['format', 'version', 'cipher', 'kdf', 'digest', 'iterations', 'salt', 'iv', 'ciphertext']);
  for (const key of Object.keys(parsed)) {
    if (key === '__proto__' || key === 'prototype' || key === 'constructor' || !allowedKeys.has(key)) {
      throw new Error('Invalid encrypted backup format.');
    }
  }

  if (
    parsed.format !== ENCRYPTED_EXPORT_FORMAT
    || parsed.version !== ENCRYPTED_EXPORT_VERSION
    || parsed.cipher !== 'AES-GCM'
    || parsed.kdf !== 'PBKDF2'
    || parsed.digest !== 'SHA-256'
    || parsed.iterations !== PBKDF2_ITERATIONS
  ) {
    throw new Error('Unsupported encrypted backup format.');
  }

  if (typeof parsed.salt !== 'string' || typeof parsed.iv !== 'string' || typeof parsed.ciphertext !== 'string') {
    throw new Error('Invalid encrypted backup format.');
  }

  return parsed;
}

export async function encryptJsonPayload(jsonString, passphrase) {
  ensureCrypto();
  ensurePassphrase(passphrase);

  const encoder = new TextEncoder();
  const salt = crypto.getRandomValues(new Uint8Array(SALT_LENGTH));
  const iv = crypto.getRandomValues(new Uint8Array(IV_LENGTH));
  const key = await deriveAesKey(passphrase, salt, ['encrypt']);
  const ciphertext = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(jsonString)
  );

  return JSON.stringify({
    format: ENCRYPTED_EXPORT_FORMAT,
    version: ENCRYPTED_EXPORT_VERSION,
    cipher: 'AES-GCM',
    kdf: 'PBKDF2',
    digest: 'SHA-256',
    iterations: PBKDF2_ITERATIONS,
    salt: bytesToBase64(salt),
    iv: bytesToBase64(iv),
    ciphertext: bytesToBase64(new Uint8Array(ciphertext)),
  }, null, 2);
}

export async function decryptJsonPayload(jsonString, passphrase) {
  ensureCrypto();
  ensurePassphrase(passphrase);

  const envelope = parseEnvelope(jsonString);
  const key = await deriveAesKey(passphrase, base64ToBytes(envelope.salt), ['decrypt']);

  try {
    const plaintext = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: base64ToBytes(envelope.iv) },
      key,
      base64ToBytes(envelope.ciphertext)
    );
    return new TextDecoder().decode(plaintext);
  } catch {
    throw new Error('Could not decrypt the backup. Check the passphrase and try again.');
  }
}
