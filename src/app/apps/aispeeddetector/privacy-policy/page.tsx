import type { Metadata } from "next";
import Link from "next/link";

const APP_NAME = "AI Speed Detector";
const EFFECTIVE_DATE = "14 July 2026";
const LAST_UPDATED = "30 August 2026";
const DEVELOPER_NAME = "Antto Gnanasiromony";
const CONTACT_EMAIL = "antto0007@gmail.com";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy policy for the ${APP_NAME} Android application, covering on-device camera processing, local storage, Google AdMob, Google Firebase, and Google Play Billing.`,
  alternates: { canonical: "/apps/aispeeddetector/privacy-policy" },
};

/** External link that opens in a new tab with safe rel attributes. */
function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="break-words text-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  );
}

/** Inline emphasis for key terms, slightly brighter than body text. */
function B({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-foreground">{children}</strong>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-lg border border-line bg-accent-soft px-4 py-3 text-sm text-foreground">
      {children}
    </p>
  );
}

export default function AiSpeedDetectorPrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/apps" className="hover:text-foreground">
          Apps
        </Link>{" "}
        <span aria-hidden="true">/</span> {APP_NAME}
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy for {APP_NAME}
      </h1>
      <div className="mt-3 space-y-0.5 text-sm text-muted">
        <p>Effective date: {EFFECTIVE_DATE}</p>
        <p>Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="mt-8 flex flex-col gap-8 leading-relaxed text-muted">
        <p>
          This Privacy Policy explains how <B>{DEVELOPER_NAME}</B>{" "}
          (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles
          information in connection with the <B>{APP_NAME}</B>{" "}
          mobile application (the &ldquo;App&rdquo;). By downloading or using
          the App, you agree to the practices described in this policy.
        </p>
        <p>
          We have designed {APP_NAME} to work primarily on your device. We do{" "}
          <B>not</B> collect, sell, or share your personal information
          ourselves. However, the App uses a small number of third-party
          services (Google AdMob and Google Firebase) that collect limited data
          to show ads and keep the App stable. This policy explains exactly what
          that means.
        </p>

        <section aria-labelledby="short-version">
          <h2 id="short-version" className="text-xl font-semibold text-foreground">
            1. The short version
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              We do <B>not</B> create accounts, and you do <B>not</B> need to
              sign up to use the App.
            </li>
            <li>
              We do <B>not</B> collect your name, email, or contacts.
            </li>
            <li>
              Your <B>camera feed is processed on your device</B> to measure
              speed and is <B>not uploaded to us or stored on our servers.</B>
            </li>
            <li>
              Your <B>Speed History is stored only on your device.</B> If you
              uninstall the App, it is deleted.
            </li>
            <li>
              We use <B>Google AdMob</B> to show ads, <B>Google Firebase</B> for
              analytics and crash reporting, and <B>Google Play Billing</B> for
              optional in-app purchases. These services collect limited
              technical, advertising, and purchase data, including{" "}
              <B>device or other identifiers</B> (such as an advertising ID and
              app-instance ID), as described below.
            </li>
          </ul>
        </section>

        <section aria-labelledby="not-collected">
          <h2 id="not-collected" className="text-xl font-semibold text-foreground">
            2. Information we do NOT collect
          </h2>
          <p className="mt-3">We do not collect, store, or transmit:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Personal identifiers such as your name, email address, phone
              number, or postal address
            </li>
            <li>Your contacts, photos library, files, or messages</li>
            <li>Account credentials (there are no accounts in this App)</li>
            <li>The video or images from your camera (see Section 3)</li>
          </ul>
        </section>

        <section aria-labelledby="camera">
          <h2 id="camera" className="text-xl font-semibold text-foreground">
            3. Camera use
          </h2>
          <p className="mt-3">
            The App uses your device&rsquo;s <B>camera</B> so it can detect
            moving objects and estimate their speed in real time.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              The camera feed is <B>processed live on your device.</B>
            </li>
            <li>
              We do <B>not</B> record, upload, transmit, or store your camera
              video or images on our servers.
            </li>
            <li>
              If you choose to save or capture a frame using the in-app capture
              button, that image is stored <B>locally on your device</B> under
              your control, and you can delete it at any time.
            </li>
            <li>
              The App will request camera permission before first use. You can
              revoke this permission at any time in your device settings, though
              the App&rsquo;s core speed-detection features will not function
              without it.
            </li>
          </ul>
        </section>

        <section aria-labelledby="on-device">
          <h2 id="on-device" className="text-xl font-semibold text-foreground">
            4. Data stored on your device
          </h2>
          <p className="mt-3">
            Some information is saved <B>only on your device</B> to make the App
            work, including:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              <B>Speed History</B> — your past measurement sessions (peak,
              average, duration, and speed graphs)
            </li>
            <li>
              <B>App settings</B> — such as your chosen units (km/h, mph, m/s),
              theme, language, and calibration preferences
            </li>
          </ul>
          <p className="mt-3">
            This information stays on your device. We cannot access it. It is
            removed when you delete the App or clear its data.
          </p>
        </section>

        <section aria-labelledby="third-parties">
          <h2 id="third-parties" className="text-xl font-semibold text-foreground">
            5. Third-party services we use
          </h2>
          <p className="mt-3">
            To keep the App free and stable, we use the following third-party
            services. These services may collect data as described in their own
            privacy policies.
          </p>

          <h3 className="mt-5 font-semibold text-foreground">
            a) Google AdMob (advertising)
          </h3>
          <p className="mt-2">
            We use Google AdMob to display advertisements. AdMob may collect and
            process:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>Advertising identifiers (e.g., Google Advertising ID)</li>
            <li>
              Device information (device model, operating system, language,
              general/coarse location inferred from IP address)
            </li>
            <li>App interaction and ad-interaction data</li>
          </ul>
          <p className="mt-3">
            AdMob may use this data to show <B>personalized ads</B> unless
            personalized advertising is disabled. You can control ad
            personalization in your device settings (
            <B>Settings → Google → Ads</B>) and can reset or delete your
            advertising ID there.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Google&rsquo;s privacy policy:{" "}
              <ExtLink href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </ExtLink>
            </li>
            <li>
              How Google uses data from apps that use its services:{" "}
              <ExtLink href="https://policies.google.com/technologies/partner-sites">
                https://policies.google.com/technologies/partner-sites
              </ExtLink>
            </li>
          </ul>

          <h3 className="mt-5 font-semibold text-foreground">
            b) Google Firebase (analytics &amp; crash reporting)
          </h3>
          <p className="mt-2">
            We use Google Firebase (which may include Firebase Analytics and
            Firebase Crashlytics) to understand general, aggregated app usage
            and to detect and fix crashes. Firebase may collect:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              App-usage events (e.g., which screens are opened) in aggregate
              form
            </li>
            <li>
              Device and diagnostic information (device model, OS version, app
              version)
            </li>
            <li>Crash logs and performance data</li>
            <li>App-instance identifiers</li>
          </ul>
          <p className="mt-3">
            This helps us improve reliability and performance. Firebase privacy
            and security information:{" "}
            <ExtLink href="https://firebase.google.com/support/privacy">
              https://firebase.google.com/support/privacy
            </ExtLink>
          </p>

          <h3 className="mt-5 font-semibold text-foreground">
            c) Google Play Billing (in-app purchases)
          </h3>
          <p className="mt-2">
            The App offers optional in-app purchases (for example, to remove
            ads). Payments are processed by <B>Google Play Billing</B>. We do{" "}
            <B>not</B> receive or store your full payment details such as card
            numbers. Google Play processes the transaction and may share limited
            purchase information with us (such as whether a purchase or refund
            occurred) so we can deliver the content you bought and provide
            support.
          </p>
          <p className="mt-3">
            We use this purchase information only to provide app functionality
            (unlocking purchased features and validating purchases).
            Google&rsquo;s handling of payment data is governed by the Google
            Play Terms of Service and Google&rsquo;s Privacy Policy:{" "}
            <ExtLink href="https://policies.google.com/privacy">
              https://policies.google.com/privacy
            </ExtLink>
          </p>

          <div className="mt-4">
            <Callout>
              <strong className="font-semibold">Note:</strong>{" "}
              The specific data collected depends on how these SDKs are
              configured in the App. Please make sure this section matches your
              actual AdMob and Firebase configuration and your Google Play{" "}
              <strong className="font-semibold">Data Safety</strong> form.
            </Callout>
          </div>
        </section>

        <section aria-labelledby="permissions">
          <h2 id="permissions" className="text-xl font-semibold text-foreground">
            6. Permissions the App may request
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              <B>Camera</B> — required to detect objects and measure speed (see
              Section 3).
            </li>
            <li>
              <B>Internet / Network access</B> — used to load advertisements and
              send anonymous analytics/crash data via the services above.
            </li>
          </ul>
          <p className="mt-3">
            The App does not request access to your location services, contacts,
            microphone, or storage for the purpose of collecting personal data.
            (Ad networks may still infer coarse location from your IP address,
            as noted above.)
          </p>
        </section>

        <section aria-labelledby="children">
          <h2 id="children" className="text-xl font-semibold text-foreground">
            7. Children&rsquo;s privacy
          </h2>
          <p className="mt-3">
            The App is intended for a <B>general audience</B> and is not
            directed to children under the age of 13 (or the minimum age
            required in your country). We do not knowingly collect personal
            information from children.
          </p>
          <p className="mt-3">
            If you believe a child has provided information through the App, or
            if you are a parent or guardian with concerns, please contact us at
            the email in Section 11 and we will take appropriate steps.
          </p>
          <div className="mt-4">
            <Callout>
              <strong className="font-semibold">Important:</strong>{" "}
              If you later opt in to Google Play&rsquo;s &ldquo;Designed for
              Families&rdquo;
              program or target the App to children, you must disable
              personalized ads and update this policy and your Data Safety form
              accordingly.
            </Callout>
          </div>
        </section>

        <section aria-labelledby="sharing">
          <h2 id="sharing" className="text-xl font-semibold text-foreground">
            8. How your data is shared
          </h2>
          <p className="mt-3">
            We do <B>not</B> sell your personal information. We do not share
            data with third parties except:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              The third-party service providers listed in Section 5, who process
              data on their own terms
            </li>
            <li>Where required by law, regulation, or valid legal process</li>
          </ul>
        </section>

        <section aria-labelledby="retention">
          <h2 id="retention" className="text-xl font-semibold text-foreground">
            9. Data retention
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Data stored on your device (Speed History, settings) remains until
              you delete it or uninstall the App.
            </li>
            <li>
              Data processed by AdMob and Firebase is retained according to
              Google&rsquo;s retention policies.
            </li>
          </ul>
        </section>

        <section aria-labelledby="rights">
          <h2 id="rights" className="text-xl font-semibold text-foreground">
            10. Your choices and rights
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              <B>Ad personalization:</B> Adjust or opt out via{" "}
              <B>Settings → Google → Ads</B> on your device.
            </li>
            <li>
              <B>Reset advertising ID:</B>{" "}
              Available in your device&rsquo;s Google settings.
            </li>
            <li>
              <B>Delete local data:</B>{" "}
              Uninstall the App or clear its data in your device&rsquo;s app
              settings.
            </li>
            <li>
              <B>Regional rights (GDPR / CCPA):</B> Depending on where you live,
              you may have rights to access, correct, or delete personal data
              held about you. Because we do not hold personal data ourselves,
              most such requests should be directed to Google for data processed
              by AdMob and Firebase. You may also contact us and we will assist
              where we can.
            </li>
          </ul>
        </section>

        <section aria-labelledby="contact">
          <h2 id="contact" className="text-xl font-semibold text-foreground">
            11. Contact us
          </h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, contact:
          </p>
          <p className="mt-3">
            <B>{DEVELOPER_NAME}</B>
            <br />
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-accent underline underline-offset-4 hover:opacity-80"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>

        <section aria-labelledby="changes">
          <h2 id="changes" className="text-xl font-semibold text-foreground">
            12. Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. When we do, we
            will revise the &ldquo;Last updated&rdquo; date above. Significant
            changes may be communicated through the App or the Google Play
            listing. Continued use of the App after changes means you accept the
            updated policy.
          </p>
        </section>
      </div>
    </div>
  );
}
