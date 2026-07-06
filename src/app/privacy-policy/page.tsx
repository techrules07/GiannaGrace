import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for Android applications published by ${siteConfig.name}, including Hindu Calendar - Offline.`,
  alternates: { canonical: "/privacy-policy" },
};

const LAST_UPDATED = "July 7, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>

      <div className="prose-neutral mt-10 flex flex-col gap-8 leading-relaxed">
        <section aria-labelledby="overview">
          <h2 id="overview" className="text-xl font-semibold">
            Overview
          </h2>
          <p className="mt-3 text-muted">
            This Privacy Policy applies to all Android applications developed
            and published by {siteConfig.name}{" "}
            (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) under
            the domain{" "}
            {siteConfig.domain}, including{" "}
            {apps.map((app) => app.name).join(", ")}. We are committed to
            protecting your privacy and being transparent about how our apps
            work.
          </p>
        </section>

        <section aria-labelledby="data-collection">
          <h2 id="data-collection" className="text-xl font-semibold">
            Information We Collect
          </h2>
          <p className="mt-3 text-muted">
            Our apps are designed to work fully offline and do not collect,
            store, or transmit any personal information. Specifically, we do
            not collect:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-6 text-muted">
            <li>Names, email addresses, or other contact details</li>
            <li>Location data</li>
            <li>Device identifiers or advertising IDs</li>
            <li>Usage analytics or behavioral data</li>
          </ul>
        </section>

        <section aria-labelledby="internet">
          <h2 id="internet" className="text-xl font-semibold">
            Internet Access
          </h2>
          <p className="mt-3 text-muted">
            Hindu Calendar - Offline functions entirely without an internet
            connection. All calendar data is bundled with the app, so no data
            leaves your device.
          </p>
        </section>

        <section aria-labelledby="third-parties">
          <h2 id="third-parties" className="text-xl font-semibold">
            Third-Party Services
          </h2>
          <p className="mt-3 text-muted">
            Our apps are distributed through Google Play. Google Play itself
            may collect information as described in{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              Google&rsquo;s Privacy Policy
            </a>
            . We do not embed third-party analytics or advertising SDKs in our
            apps.
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-xl font-semibold">
            Children&rsquo;s Privacy
          </h2>
          <p className="mt-3 text-muted">
            Our apps do not collect personal information from anyone, including
            children under the age of 13.
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-xl font-semibold">
            Changes to This Policy
          </h2>
          <p className="mt-3 text-muted">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this page periodically.
          </p>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold">
            Contact Us
          </h2>
          <p className="mt-3 text-muted">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-accent underline underline-offset-4 hover:opacity-80"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
