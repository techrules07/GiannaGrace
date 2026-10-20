import type { Metadata } from "next";
import Link from "next/link";
import {
  B,
  DataTable,
  ExtLink,
  PolicySection,
} from "@/components/prose";

// Typographic characters are written literally (’ “ ”), not as HTML
// entities — see the whitespace note in components/prose.tsx.

const APP_NAME = "DuoVibe: Dual Camera Recorder";
const PACKAGE_ID = "com.aj.dualcamerarecorder";
const LAST_UPDATED = "20 October 2026";
const DEVELOPER_NAME = "Gia Labs";
const CONTACT_EMAIL = "gialabs0007@gmail.com";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy policy for the ${APP_NAME} Android app: photos, videos and audio stay on your phone; Google Firebase is used for analytics, crash reports and optional notifications. No ads, no accounts.`,
  alternates: { canonical: "/apps/dualcamerarecorder/privacy-policy" },
};

const FIREBASE_SERVICES = [
  [
    "Google Analytics for Firebase",
    "App interactions such as screens opened, photo capture, recording start and stop, and merge export, with settings such as layout, video quality, recording length and whether text or music was added; whether your phone supports dual recording; an app-instance identifier; device model, Android version, app version, language; approximate (country/region-level) location derived from your IP address",
    "Analytics: to understand which features are used and improve the app",
  ],
  [
    "Firebase Crashlytics",
    "Crash reports and error logs (stack traces, app state at the time of the error, device model, Android version), a Crashlytics installation identifier, and short technical notes such as the camera or merge step that failed",
    "App functionality and analytics: to find and fix crashes and errors",
  ],
  [
    "Firebase Cloud Messaging",
    "A Firebase installation identifier and messaging token, app version",
    "To deliver optional notifications about app news and updates",
  ],
];

const PERMISSIONS = [
  [
    "Camera",
    "Showing the camera preview and taking photos and videos",
    "When you first open the camera",
  ],
  [
    "Microphone",
    "Recording sound with videos",
    "When you first open the camera (videos are recorded without sound if you decline)",
  ],
  [
    "Location (precise or approximate)",
    "Adding location to your photos and videos",
    "Only when you turn on Save Location",
  ],
  [
    "Notifications (Android 13 and later)",
    "Showing optional update notifications",
    "Once, on the home screen; you can decline",
  ],
];

export default function DuoVibePrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/apps" className="hover:text-foreground">
          Apps
        </Link>{" "}
        <span aria-hidden="true">/</span> {APP_NAME}
      </nav>

      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy — {APP_NAME}
      </h1>
      <p className="mt-3 text-sm text-muted">
        <B>Last updated:</B> {LAST_UPDATED}
      </p>

      <div className="mt-8 flex flex-col gap-8 leading-relaxed text-muted">
        <p>
          This privacy policy explains how the Android app <B>{APP_NAME}</B>{" "}
          (package{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-foreground ring-1 ring-line">
            {PACKAGE_ID}
          </code>
          , “the app”) handles information. The app is published on Google
          Play by <B>{DEVELOPER_NAME}</B> (“we”, “us”).
        </p>

        <PolicySection id="summary" title="Summary">
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>The app has no ads, no sign-in and no user accounts.</li>
            <li>
              Your photos, videos and audio are saved on your phone. The app
              never uploads them.
            </li>
            <li>
              The app uses Google Firebase to collect usage statistics and crash
              reports, and to send optional notifications.
            </li>
            <li>
              Location is used only if you turn on <B>Save Location</B>, and is
              only written into your own photo and video files on your phone.
            </li>
          </ul>
        </PolicySection>

        <PolicySection
          id="on-device"
          title="1. Information that stays on your device"
        >
          <p className="mt-3">
            <B>Camera and microphone.</B> The app uses the camera to show the
            front and back views and to capture photos and videos. It uses the
            microphone to record sound with your videos. Photos and videos are
            saved to your phone’s shared storage (Pictures/DualCamera and
            Movies/DualCamera). The app does not send camera images, videos or
            audio to us or to anyone else.
          </p>
          <p className="mt-3">
            <B>Location (optional, off by default).</B> If you turn on{" "}
            <B>{"Settings > Save Location"}</B> and grant location permission,
            the app reads your device’s location while the camera is open and
            writes it into the metadata of the photos and videos you capture.
            This location is stored only in those files on your phone. The app
            does not send it to us or to any third party. You can turn the
            setting off or revoke the permission at any time in Android
            settings.
          </p>
          <p className="mt-3">
            <B>{"Videos and audio files you choose for Merge & Stitch."}</B>{" "}
            When you merge videos, you pick the videos with the Android photo
            picker and, if you want background music, an audio file with the
            Android file picker. The app processes these files on your phone
            and saves the merged video to your phone. It does not upload them.
          </p>
          <p className="mt-3">
            <B>App settings.</B> Your preferences (for example layout, theme
            and camera options) are stored on your phone. If Android backup is
            turned on for your device, Android may include these settings in
            your device backup to your Google account, as it does for other
            apps. Your photos and videos are not part of the app’s backup.
          </p>
          <p className="mt-3">
            <B>Sharing.</B> When you use <B>Share</B> or <B>Open with</B>, the
            file is sent to the app you choose. That app’s own privacy policy
            then applies.
          </p>
        </PolicySection>

        <PolicySection
          id="firebase"
          title="2. Information collected through Google Firebase"
        >
          <p className="mt-3">
            To understand how the app is used, fix crashes and send optional
            notifications, the app uses these Google Firebase services. Data is
            sent over an encrypted (HTTPS) connection.
          </p>
          <DataTable
            caption="Google Firebase services used by the app"
            columns={["Service", "What it collects", "Why"]}
            columnWidths={["w-[22%]", undefined, "w-[30%]"]}
            rows={FIREBASE_SERVICES}
          />
          <p className="mt-4">
            These services do not receive your photos, videos, audio
            recordings, the location stored in your files, your name, email
            address or contacts.
          </p>
          <p className="mt-3">
            <B>Advertising ID.</B> The app does not show ads and does not
            collect your Android Advertising ID.
          </p>
          <p className="mt-3">
            Google processes this data as our service provider under the
            Firebase terms. You can read more at:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Firebase privacy and security:{" "}
              <ExtLink href="https://firebase.google.com/support/privacy">
                https://firebase.google.com/support/privacy
              </ExtLink>
            </li>
            <li>
              How Google uses data from apps that use its services:{" "}
              <ExtLink href="https://policies.google.com/technologies/partner-sites">
                https://policies.google.com/technologies/partner-sites
              </ExtLink>
            </li>
          </ul>
          <p className="mt-3">
            We do not sell your information and do not share it with third
            parties for advertising.
          </p>
        </PolicySection>

        <PolicySection id="permissions" title="3. Permissions the app asks for">
          <DataTable
            caption="Permissions the app asks for"
            columns={["Permission", "Used for", "When it is requested"]}
            columnWidths={["w-[24%]", "w-[34%]", undefined]}
            rows={PERMISSIONS}
          />
        </PolicySection>

        <PolicySection id="retention" title="4. Data retention">
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Photos, videos and app settings stay on your phone until you
              delete them or uninstall the app. Uninstalling removes the app’s
              settings; your photos and videos stay in your phone’s gallery
              until you delete them.
            </li>
            <li>
              Google Analytics event-level data is kept for the retention
              period set in our Google Analytics settings (2 or 14 months),
              after which it is deleted automatically.
            </li>
            <li>Crashlytics crash reports are kept for up to 90 days.</li>
            <li>
              Firebase Cloud Messaging tokens are kept until they expire or the
              app is uninstalled.
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="choices" title="5. Your choices">
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              Revoke camera, microphone, location or notification permission
              at any time in{" "}
              <B>{"Android Settings > Apps > DuoVibe > Permissions"}</B>.
            </li>
            <li>
              Turn off <B>Save Location</B> in the app’s settings.
            </li>
            <li>
              Turn off notifications in{" "}
              <B>{"Android Settings > Apps > DuoVibe > Notifications"}</B>.
            </li>
            <li>
              Ask us to delete the analytics and crash data linked to your app
              installation by emailing us (see{" "}
              <a
                href="#contact"
                className="text-accent underline underline-offset-4 hover:opacity-80"
              >
                Contact
              </a>
              ). Include the date you installed the app and your device model
              so we can identify it.
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="children" title="6. Children">
          <p className="mt-3">
            The app is not directed at children under 13, and we do not
            knowingly collect personal information from children. If you
            believe a child has provided information through the app, contact
            us and we will delete it.
          </p>
        </PolicySection>

        <PolicySection id="security" title="7. Security">
          <p className="mt-3">
            Data sent to Firebase is encrypted in transit. Files saved by the
            app are stored in your phone’s storage and are protected by your
            device’s own security settings.
          </p>
        </PolicySection>

        <PolicySection id="changes" title="8. Changes to this policy">
          <p className="mt-3">
            We may update this policy when the app changes. The new version
            will be posted at this address with an updated “Last updated”
            date. If a change significantly affects how your information is
            handled, we will also tell you in the app or in the Google Play
            listing.
          </p>
        </PolicySection>

        <PolicySection id="contact" title="9. Contact">
          <p className="mt-3">
            {DEVELOPER_NAME}
            <br />
            Email:{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-accent underline underline-offset-4 hover:opacity-80"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="mt-3">
            If you have any questions about this policy or your data, email us
            and we will reply within 30 days.
          </p>
        </PolicySection>
      </div>
    </div>
  );
}
