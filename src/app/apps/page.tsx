import type { Metadata } from "next";
import { AppCard } from "@/components/app-card";
import { apps } from "@/lib/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apps",
  description: `Android applications published by ${siteConfig.name} on Google Play.`,
  alternates: { canonical: "/apps" },
};

export default function AppsPage() {
  const jsonLd = apps.map((app) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    operatingSystem: "Android",
    applicationCategory: "LifestyleApplication",
    description: app.description,
    url: app.playStoreUrl,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  }));

  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Apps</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Applications published by {siteConfig.playDeveloperName} on Google
        Play. More apps are on the way.
      </p>
      <div className="mt-10 flex flex-col gap-6">
        {apps.map((app) => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
