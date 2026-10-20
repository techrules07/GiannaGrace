export interface AppEntry {
  /** URL-safe identifier, also used for per-app routes (/apps/[slug]/...). */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Path under /public to the app icon. */
  icon: string;
  /** Android package id. Omit while the app is unpublished. */
  packageId?: string;
  /** Google Play listing URL. Omit while the app is unpublished. */
  playStoreUrl?: string;
  /** Path to this app's privacy policy (a route on this site). */
  privacyPolicyHref?: string;
}

/**
 * Published applications, in the order they are displayed.
 * Add a new entry here and the Apps page, home page, and structured
 * data pick it up automatically.
 */
export const apps: AppEntry[] = [
  {
    slug: "dualcamerarecorder",
    name: "DuoVibe: Dual Camera Recorder",
    tagline: "Front and back cameras, recorded together.",
    description:
      "Capture photos and videos from your front and back cameras at once in split-screen, picture-in-picture, or circle layouts, then merge and stitch clips with background music. No ads, no sign-in — your recordings stay on your phone.",
    icon: "/apps/dual-camera-recorder.webp",
    packageId: "com.aj.dualcamerarecorder",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.aj.dualcamerarecorder",
    privacyPolicyHref: "/apps/dualcamerarecorder/privacy-policy",
  },
  {
    slug: "aispeeddetector",
    name: "Speed Gun : AI Speed Detector",
    tagline: "Measure the speed of moving objects in real time.",
    description:
      "An on-device AI speed gun that uses your camera to detect moving objects and estimate their speed. Track peak and average speeds with speed history — camera processing stays on your device.",
    icon: "/apps/ai-speed-detector.webp",
    packageId: "com.aj.aispeeddetector",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.aj.aispeeddetector",
    privacyPolicyHref: "/apps/aispeeddetector/privacy-policy",
  },
  {
    slug: "hindu-calendar-offline",
    name: "Hindu Calendar - Offline",
    tagline: "Panchang, festivals, and tithi — fully offline.",
    description:
      "A lightweight Hindu calendar app that works completely offline. Browse tithis, festivals, and important dates without an internet connection.",
    icon: "/apps/hindu-calendar.webp",
    packageId: "com.aj.hinducalendar",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.aj.hinducalendar",
    privacyPolicyHref: "/privacy-policy",
  },
];
