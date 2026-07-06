export interface AppEntry {
  /** URL-safe identifier, reserved for future per-app pages (/apps/[slug]). */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  /** Path under /public to the app icon. */
  icon: string;
  packageId: string;
  playStoreUrl: string;
}

/**
 * Published applications. Add a new entry here and the Apps page,
 * home page, and structured data pick it up automatically.
 */
export const apps: AppEntry[] = [
  {
    slug: "hindu-calendar-offline",
    name: "Hindu Calendar - Offline",
    tagline: "Panchang, festivals, and tithi — fully offline.",
    description:
      "A lightweight Hindu calendar app that works completely offline. Browse tithis, festivals, and important dates without an internet connection.",
    icon: "/apps/hindu-calendar.svg",
    packageId: "com.aj.hinducalendar",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.aj.hinducalendar",
  },
];
