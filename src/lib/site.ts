/**
 * Central site configuration.
 * Update values here — pages, metadata, and the footer all read from this file.
 */
export const siteConfig = {
  name: "Gianna Grace",
  domain: "giannagrace.org",
  url: "https://giannagrace.org",
  title: "Gianna Grace — Android App Developer",
  description:
    "Official website of Gianna Grace, an independent Android app developer. Home of Hindu Calendar - Offline and future apps published on Google Play.",
  contactEmail: "contact@giannagrace.org",
  playDeveloperName: "Gianna Grace",
  socials: [
    // Set `href` to a real URL when the profile exists; null renders as "coming soon".
    { label: "GitHub", href: null as string | null },
    { label: "X (Twitter)", href: null as string | null },
    { label: "LinkedIn", href: null as string | null },
  ],
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Apps", href: "/apps" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Contact", href: "/contact" },
] as const;
