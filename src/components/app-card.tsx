import Image from "next/image";
import { GooglePlayBadge } from "@/components/google-play-badge";
import type { AppEntry } from "@/lib/apps";

export function AppCard({ app }: { app: AppEntry }) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:flex-row sm:items-start sm:p-8">
      <Image
        src={app.icon}
        alt={`${app.name} app icon`}
        width={96}
        height={96}
        className="h-20 w-20 shrink-0 rounded-2xl sm:h-24 sm:w-24"
      />
      <div className="flex flex-col gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{app.name}</h3>
          <p className="mt-1 text-sm font-medium text-accent">{app.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed text-muted">{app.description}</p>
        <div className="mt-1">
          <GooglePlayBadge href={app.playStoreUrl} appName={app.name} />
        </div>
      </div>
    </article>
  );
}
