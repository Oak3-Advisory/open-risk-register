export function trackEvent(eventName, payload = undefined) {
  if (typeof window === 'undefined') return;
  const tracker = window.umami;
  if (!tracker || typeof tracker.track !== 'function') return;

  if (payload && typeof payload === 'object') {
    tracker.track(eventName, payload);
    return;
  }

  tracker.track(eventName);
}
