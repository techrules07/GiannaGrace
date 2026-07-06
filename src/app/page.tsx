import Link from "next/link";
import { AppCard } from "@/components/app-card";
import { apps } from "@/lib/apps";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="py-16 sm:py-24">
        <p className="mb-4 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
          Independent Android Developer
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Welcome to {siteConfig.domain} — the official home of Android
          applications developed and maintained by {siteConfig.name}. Every app
          published under this domain is built with a focus on simplicity,
          reliability, and respect for your privacy.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/apps"
            className="rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            View Apps
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured apps */}
      <section aria-labelledby="apps-heading" className="pb-16 sm:pb-24">
        <h2
          id="apps-heading"
          className="mb-6 text-2xl font-semibold tracking-tight"
        >
          Published Apps
        </h2>
        <div className="flex flex-col gap-6">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </section>
    </div>
  );
}
