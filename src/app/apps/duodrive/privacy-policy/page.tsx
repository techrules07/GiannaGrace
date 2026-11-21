import type { Metadata } from "next";
import Link from "next/link";
import {
  B,
  DataTable,
  ExtLink,
  PolicySection,
} from "@/components/prose";

// Typographic characters are written literally (’ “ ” →), not as HTML
// entities — see the whitespace note in components/prose.tsx.

const APP_NAME = "DuoDrive: Front & Rear Dashcam";
const PACKAGE_ID = "com.aj.duodrive";
const EFFECTIVE_DATE = "21 November 2026";
const LAST_UPDATED = "21 November 2026";
const DEVELOPER_NAME = "Gia Labs";
const CONTACT_EMAIL = "gialabs0007@gmail.com";

export const metadata: Metadata = {
  title: `Privacy Policy — ${APP_NAME}`,
  description: `Privacy policy for the DuoDrive dashcam app for Android (${PACKAGE_ID}). DuoDrive does not collect or share personal data.`,
  alternates: { canonical: "/apps/duodrive/privacy-policy" },
};

const PERMISSIONS = [
  [
    "Camera",
    "To show the live dashcam picture and to record videos and take photos with the back (road) camera and, on phones that support it, the front (cabin) camera at the same time. Before recording, the App briefly opens both cameras once to check whether your phone supports dual recording; nothing is saved during this check.",
    "Yes, the App cannot record without it.",
  ],
  [
    "Microphone",
    "To record sound with your videos. You can mute or unmute at any time from the dashcam screen or Audio Settings.",
    "No. Without it, videos are recorded without sound.",
  ],
  [
    "Location (precise and approximate)",
    "To show your driving speed and to stamp speed, GPS coordinates and altitude (if you turn altitude on) onto your videos and photos, and to save each drive’s route and the place of any detected impact on your phone. Location is used only while the dashcam screen is open or recording, with the App on screen or in its picture-in-picture window. The App never accesses location in the background and never uploads it. The App explains this on screen before Android asks for the permission.",
    "No. Without it, recordings have no speed or coordinates.",
  ],
  [
    "Notifications",
    "To show recording status, for example that recording stopped because the App left the screen.",
    "No.",
  ],
  [
    "Vibration",
    "For optional vibration feedback, such as when an impact is detected.",
    "Granted automatically; no prompt.",
  ],
];

const CONTENTS = [
  ["permissions", "Permissions and why we use them"],
  ["on-device", "Information stored on your device"],
  ["not-collected", "What we do not collect"],
  ["third-party", "Other services on your phone"],
  ["sharing", "Sharing your recordings"],
  ["retention", "Keeping and deleting your data"],
  ["security", "Security"],
  ["children", "Children"],
  ["rights", "Your choices and rights"],
  ["changes", "Changes to this policy"],
  ["contact", "Contact us"],
];

const h3 = "mt-5 font-semibold text-foreground";

export default function DuoDrivePrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted">
        <Link href="/apps" className="hover:text-foreground">
          Apps
        </Link>{" "}
        <span aria-hidden="true">/</span> {APP_NAME}
      </nav>

      <p className="text-sm font-semibold tracking-wide text-accent">
        {APP_NAME}
      </p>
      <h1 className="mt-1 text-3xl font-bold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-muted">
        Effective date: {EFFECTIVE_DATE} · Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-8 flex flex-col gap-8 leading-relaxed text-muted">
        <p>
          This Privacy Policy explains how the DuoDrive Android app (package
          name{" "}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[0.85em] text-foreground ring-1 ring-line">
            {PACKAGE_ID}
          </code>
          , the “App”) handles information. The App is published on Google
          Play by {DEVELOPER_NAME} (“we”, “us”).
        </p>

        <div className="rounded-xl border border-line bg-accent-soft px-5 py-4">
          <p className="font-semibold text-foreground">In short</p>
          <ul className="mt-2 list-disc space-y-1.5 pl-6">
            <li>
              We do not collect, store, sell or share your personal data. We
              have no servers that receive data from the App.
            </li>
            <li>
              The App does not request internet access. It has no account, no
              ads, no analytics and no tracking.
            </li>
            <li>
              Your videos, photos, location and drive records stay on your
              phone, under your control.
            </li>
            <li>
              Camera, microphone and location are used only for dashcam
              recording, and only while the App is on screen or in its
              picture-in-picture window.
            </li>
          </ul>
        </div>

        <nav
          aria-label="Contents"
          className="rounded-xl bg-surface px-5 py-4 text-sm ring-1 ring-line"
        >
          <p className="font-semibold text-foreground">Contents</p>
          <ol className="mt-2 list-decimal gap-x-8 pl-5 sm:columns-2">
            {CONTENTS.map(([id, label]) => (
              <li key={id} className="mb-1 break-inside-avoid">
                <a
                  href={`#${id}`}
                  className="text-accent underline-offset-4 hover:underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <PolicySection id="permissions" title="1. Permissions and why we use them">
          <p className="mt-3">
            The App asks for the following Android permissions. You can allow
            or deny each one, and change your choice at any time in your
            phone’s Settings → Apps → DuoDrive → Permissions.
          </p>
          <DataTable
            caption="Android permissions the App asks for"
            columns={["Permission", "What it is used for", "Required?"]}
            columnWidths={["w-[22%]", undefined, "w-[26%]"]}
            rows={PERMISSIONS}
          />
          <p className="mt-4">
            The App also reads your phone’s motion sensor (accelerometer) for
            its optional impact detection feature, which marks and keeps the
            video recorded at the moment of a sudden jolt. Sensor readings are
            processed on your phone only and are not stored, except for the
            time, strength (G-force), location and speed of a detected impact,
            as described in Section 2.
          </p>
          <p className="mt-3">
            The App does not request access to your contacts, call logs, SMS,
            accounts, files, photo library or background location, and it does
            not request internet access.
          </p>
        </PolicySection>

        <PolicySection id="on-device" title="2. Information stored on your device">
          <p className="mt-3">
            Everything the App creates is stored on your phone or on an SD card
            you choose. None of it is sent to us.
          </p>
          <h3 className={h3}>Videos and photos</h3>
          <p className="mt-2">
            Videos are saved to the <B>Movies/DuoDrive</B> folder and photos to
            the <B>Pictures/DuoDrive</B> folder, on your phone storage or SD
            card. Depending on your settings, videos and photos can include
            burned-in text: date and time, GPS coordinates, speed, altitude and
            any custom text you enter (for example a vehicle number). Because
            these folders are part of your phone’s shared media storage, your
            gallery app and other apps you have given access to your photos and
            videos can see them.
          </p>
          <h3 className={h3}>Drive records</h3>
          <p className="mt-2">
            To organise your recordings, the App keeps a small database in its
            private storage on your phone. It contains, for each drive: start
            and end times, distance, top speed and the GPS points of the route;
            a list of the video and photo files it recorded; and any detected
            impacts with their time, G-force, location and speed. Other apps
            cannot read the App’s private storage.
          </p>
          <h3 className={h3}>Settings</h3>
          <p className="mt-2">
            Your choices in the App’s settings (for example video quality,
            language, units and subtitle options) are stored in the App’s
            private storage on your phone.
          </p>
        </PolicySection>

        <PolicySection id="not-collected" title="3. What we do not collect">
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              We do not collect any personal or sensitive information, and we
              do not transmit any data from your phone. The App has no internet
              permission, so it cannot send data over the network.
            </li>
            <li>
              The App contains no advertising, analytics, crash-reporting or
              tracking software, and does not use advertising IDs.
            </li>
            <li>There is no user account, login or sign-up.</li>
            <li>
              We do not sell, rent or trade any information, and we do not use
              your data for advertising or profiling.
            </li>
          </ul>
          <p className="mt-3">
            Because no data leaves your device, the App’s Google Play Data
            safety section states that no data is collected or shared.
          </p>
        </PolicySection>

        <PolicySection id="third-party" title="4. Other services on your phone">
          <p className="mt-3">
            A few features rely on services built into Android or Google Play
            services on your phone. The App passes no personal data to us
            through them; each service is governed by its own provider’s terms
            and privacy policy.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              <B>Location:</B> The App obtains location through Android and
              Google Play services on your device. If your phone’s Google
              Location Accuracy setting is on, your phone may use Wi-Fi, mobile
              networks and sensors to improve accuracy, as described in{" "}
              <ExtLink href="https://policies.google.com/privacy">
                Google’s Privacy Policy
              </ExtLink>
              . You can choose “Update location using GPS only” in the App’s
              Location settings to use the phone’s GPS directly. The “Fix”
              button on the dashcam screen may show Google’s standard dialog
              asking you to turn on location services.
            </li>
            <li>
              <B>Spoken messages:</B> If you turn on voice announcements, the
              App asks your phone’s text-to-speech engine to say short status
              messages such as “Recording started”. No personal data is
              included.
            </li>
            <li>
              <B>App to launch:</B> If you choose an app (for example a
              navigation app) to open when recording starts, the App shows a
              list of apps installed on your phone so you can pick one. Only
              your choice is saved, on your phone.
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="sharing" title="5. Sharing your recordings">
          <p className="mt-3">
            The App never shares your videos, photos or location on its own.
            When you choose to share a video or photo using the App’s Share
            option, Android’s share menu sends it to the app or person you
            pick; from then on it is handled by that app or recipient. If you
            back up your Movies and Pictures folders with a service such as
            Google Photos, that service’s privacy policy applies. Remember that
            shared recordings can include the date, time, speed, location and
            any text stamped on them, and may show other people, vehicles or
            number plates. Please follow the laws in your area on recording and
            sharing video.
          </p>
        </PolicySection>

        <PolicySection id="retention" title="6. Keeping and deleting your data">
          <p className="mt-3">
            Your data is kept on your phone until you delete it. We hold no
            copy, so there is nothing for us to delete on our side.
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-6">
            <li>
              <B>Delete a video or photo:</B>{" "}
              {"in the App, open Videos & photos, tap the ⋮ menu on the item and choose Delete. You can also delete files from your gallery or file manager."}
            </li>
            <li>
              <B>Automatic deletion:</B> if loop recording is on, the App
              deletes the oldest unsaved videos when your recordings reach the
              storage limit you set. Videos you saved and videos with a
              detected impact are kept.
            </li>
            <li>
              <B>Delete drive records and settings:</B> go to your phone’s
              Settings → Apps → DuoDrive → Storage → Clear storage, or
              uninstall the App. This removes the App’s private database and
              settings.
            </li>
            <li>
              <B>After uninstalling:</B> videos and photos in Movies/DuoDrive
              and Pictures/DuoDrive remain on your phone until you delete them.
            </li>
          </ul>
        </PolicySection>

        <PolicySection id="security" title="7. Security">
          <p className="mt-3">
            Drive records and settings are kept in the App’s private storage,
            which Android protects from other apps. The App turns off Android’s
            cloud backup for this private data, and it never transmits it.
            Videos and photos are stored in your phone’s shared media folders
            so you can view and manage them; keep your phone protected with a
            screen lock and only give media access to apps you trust.
          </p>
        </PolicySection>

        <PolicySection id="children" title="8. Children">
          <p className="mt-3">
            The App is a dashcam for drivers and is not directed at children.
            It is intended for users aged 18 and over. We do not knowingly
            collect information from anyone, including children under 13 (or
            the minimum age in your country), because the App does not collect
            personal information at all.
          </p>
        </PolicySection>

        <PolicySection id="rights" title="9. Your choices and rights">
          <p className="mt-3">
            You stay in control of your information at all times. You can deny
            or revoke any permission in your phone’s settings, mute sound, turn
            off location stamps in Subtitles Settings, delete recordings, or
            clear the App’s storage. Depending on where you live, data
            protection laws such as the EU and UK GDPR, India’s Digital
            Personal Data Protection Act, 2023, or US state privacy laws may
            give you rights to access, correct or delete personal data. Because
            we do not collect or hold any personal data about you, these rights
            are exercised directly on your device as described above. If you
            have any question, you can contact us at the address below.
          </p>
        </PolicySection>

        <PolicySection id="changes" title="10. Changes to this policy">
          <p className="mt-3">
            If we change how the App handles information, for example by adding
            a feature that needs internet access, we will update this policy
            and the App’s Google Play Data safety section before that change is
            released, and update the “Last updated” date above.
          </p>
        </PolicySection>

        <PolicySection id="contact" title="11. Contact us">
          <p className="mt-3">
            For questions about this Privacy Policy or the App, please contact:
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
        </PolicySection>

        <p className="border-t border-line pt-4 text-sm">
          {APP_NAME} · Android · Package{" "}
          <code className="font-mono text-[0.9em]">{PACKAGE_ID}</code>
        </p>
      </div>
    </div>
  );
}
