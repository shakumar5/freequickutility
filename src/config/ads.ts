/** Google AdSense publisher ID — must match public/ads.txt */
export const ADSENSE_CLIENT = 'ca-pub-9843041963430696';

/**
 * Display ad unit slot IDs from AdSense → Ads → By ad unit.
 * Leave empty to rely on Auto ads (enabled in the AdSense dashboard).
 * One responsive unit can be reused across all placements below.
 */
export const ADSENSE_SLOTS = {
  toolFooter: '',
  blogArticle: '',
  homeMid: '',
} as const;

export type AdSlotKey = keyof typeof ADSENSE_SLOTS;

export function getAdSlot(key: AdSlotKey): string {
  return ADSENSE_SLOTS[key]?.trim() ?? '';
}
