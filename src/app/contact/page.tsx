import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name} for questions, feedback, or support regarding published Android apps.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted">
        Questions, feedback, or support requests about any app published under{" "}
        {siteConfig.domain} are always welcome.
      </p>

      <section aria-labelledby="email-heading" className="mt-10">
        <h2 id="email-heading" className="text-lg font-semibold">
          Email
        </h2>
        <p className="mt-2">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
        <p className="mt-2 text-sm text-muted">
          I aim to respond to all inquiries within a few business days.
        </p>
      </section>

      <section aria-labelledby="social-heading" className="mt-10">
        <h2 id="social-heading" className="text-lg font-semibold">
          Elsewhere
        </h2>
        <ul className="mt-3 flex flex-col gap-2 text-sm">
          {siteConfig.socials.map(({ label, href }) => (
            <li key={label} className="flex items-center gap-2">
              <span className="font-medium">{label}</span>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:opacity-80"
                >
                  {href}
                </a>
              ) : (
                <span className="text-muted">— coming soon</span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
