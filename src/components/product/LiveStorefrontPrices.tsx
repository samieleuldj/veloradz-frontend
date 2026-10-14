'use client';

import { useEffect } from 'react';

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  'https://veloradz-database-aylabackend.ikpdwj.easypanel.host'
).replace(/\/$/, '');

export const LIVE_PRICE_EVENT = 'autoplus-live-price';

export default function LiveStorefrontPrices() {
  useEffect(() => {
    let cancelled = false;

    async function syncPrices() {
      try {
        const controller = new AbortController();
        const abortTimer = window.setTimeout(() => controller.abort(), 4000);
        const res = await fetch(`${API_URL}/api/storefront/prices`, {
          signal: controller.signal,
        });
        window.clearTimeout(abortTimer);
        if (!res.ok || cancelled) return;
        const data = await res.json();
        window.dispatchEvent(
          new CustomEvent(LIVE_PRICE_EVENT, { detail: data })
        );
      } catch {
        // ignore — static catalog fallback stays visible
      }
    }

    const timeoutId = window.setTimeout(() => {
      void syncPrices();
    }, 5000);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
