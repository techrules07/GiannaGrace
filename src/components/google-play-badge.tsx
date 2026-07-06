interface GooglePlayBadgeProps {
  href: string;
  appName: string;
}

/**
 * A self-hosted "Get it on Google Play" button.
 * Swap the inner markup for the official badge asset
 * (https://play.google.com/intl/en_us/badges/) if preferred.
 */
export function GooglePlayBadge({ href, appName }: GooglePlayBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Get ${appName} on Google Play (opens in a new tab)`}
      className="inline-flex items-center gap-3 rounded-lg bg-stone-950 px-5 py-2.5 text-white ring-1 ring-stone-700 transition-opacity hover:opacity-85 dark:bg-black"
    >
      <svg
        viewBox="0 0 100 100"
        className="h-7 w-7"
        aria-hidden="true"
        focusable="false"
      >
        <polygon points="15,5 15,95 55,50" fill="#00b0ff" />
        <polygon points="15,5 67.5,38.75 55,50" fill="#00e070" />
        <polygon points="67.5,38.75 85,50 67.5,61.25 55,50" fill="#ffce00" />
        <polygon points="15,95 67.5,61.25 55,50" fill="#f9414d" />
      </svg>
      <span className="flex flex-col text-left leading-tight">
        <span className="text-[0.65rem] uppercase tracking-wide text-stone-300">
          Get it on
        </span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}
