'use client';

/**
 * Dynamically resolves store URL for Alburaq:
 * - iOS: Apple App Store
 * - Android: Google Play Store
 * - Desktop / Browser: Apple App Store web link
 */
export function getAlburaqLink(): string {
  if (typeof window === 'undefined') {
    return 'https://apps.apple.com/us/app/al-buraq/';
  }
  const ua = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  if (/android/i.test(ua)) {
    return 'https://play.google.com/store/apps/details?id=io.alburaq.app';
  }
  // iOS (iPhone, iPad, iPod) or desktop / browser
  return 'https://play.google.com/store/apps/details?id=io.alburaq.app&hl';
}
