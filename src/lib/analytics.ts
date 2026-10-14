const SESSION_KEY = 'aylabags_sid';

type EventType = 'page_view' | 'product_view' | 'checkout_start' | 'whatsapp_lead';

type TrackPayload = {
  page_path?: string;
  product_id?: string;
  product_name?: string;
};

function getApiUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_URL ||
    'https://veloradz-database-aylabackend.ikpdwj.easypanel.host'
  );
}

export function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';

  let sessionId = window.localStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `sid_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
    window.localStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

function getUtmParams() {
  if (typeof window === 'undefined') {
    return { utm_source: undefined, utm_medium: undefined, utm_campaign: undefined, referrer: undefined };
  }

  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    referrer: document.referrer || undefined,
  };
}

export async function trackEvent(eventType: EventType, payload: TrackPayload = {}) {
  if (typeof window === 'undefined') return;

  const send = async () => {
    try {
      const controller = new AbortController();
      const timer = window.setTimeout(() => controller.abort(), 4000);
      try {
        await fetch(`${getApiUrl()}/api/analytics/event`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          keepalive: true,
          signal: controller.signal,
          body: JSON.stringify({
            event_type: eventType,
            session_id: getSessionId(),
            page_path: payload.page_path || window.location.pathname,
            product_id: payload.product_id,
            product_name: payload.product_name,
            ...getUtmParams(),
          }),
        });
      } finally {
        window.clearTimeout(timer);
      }
    } catch {
      // Analytics should never block the store UX.
    }
  };

  const schedule =
    typeof window.requestIdleCallback === 'function'
      ? (cb: () => void) => window.requestIdleCallback(cb, { timeout: 3000 })
      : (cb: () => void) => window.setTimeout(cb, 1500);

  schedule(() => void send());
}

export function getTrackingContext() {
  return {
    session_id: getSessionId(),
    ...getUtmParams(),
  };
}
