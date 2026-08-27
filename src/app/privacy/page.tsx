import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection, { LegalList } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Power Your Potential",
  description:
    "How Power Your Potential collects, uses, stores and protects your personal data, in line with the UK GDPR and the Data Protection Act 2018.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="January 2025">
      <LegalSection heading="1. Introduction">
        <p>
          Welcome to Power Your Potential (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). We are committed to protecting your privacy and ensuring that your
          personal data is handled securely and in compliance with applicable data protection
          laws, including the UK General Data Protection Regulation (UK GDPR) and the Data
          Protection Act 2018.
        </p>
        <p>
          This Privacy Policy explains how we collect, use, store, and protect your personal
          information when you visit our website (https://www.poweryourpotential.co.uk/) or use
          our coaching and consultancy services.
        </p>
        <p>
          By using our website or services, you agree to the collection and use of information
          in accordance with this Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We may collect the following types of personal information:</p>

        <p className="font-medium text-[#2b1420]">A. Information You Provide to Us</p>
        <LegalList
          items={[
            "Name, email address, phone number, and other contact details.",
            "Information provided during coaching sessions, consultations, or when completing online forms.",
            "Payment details when purchasing services.",
          ]}
        />

        <p className="font-medium text-[#2b1420]">B. Automatically Collected Information</p>
        <LegalList
          items={[
            "IP address, browser type, and device information when you visit our website.",
            "Cookies and tracking technologies to enhance user experience.",
          ]}
        />

        <p className="font-medium text-[#2b1420]">C. Corporate Clients</p>
        <p>
          For corporate clients, we may collect business-related information, including employee
          details relevant to coaching and consultancy services.
        </p>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <p>We use your personal data for the following purposes:</p>
        <LegalList
          items={[
            "To provide and improve our coaching, consultancy, and workshop services.",
            "To process payments and manage bookings.",
            "To communicate with you regarding sessions, updates, and promotions (if opted in).",
            "To comply with legal and regulatory obligations.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. How We Share Your Information">
        <p>
          We do not sell, rent, or trade your personal data. However, we may share it in the
          following circumstances:
        </p>
        <LegalList
          items={[
            "With third-party service providers who assist in processing payments, hosting our website, or managing communications.",
            "If required by law, such as responding to legal requests or protecting rights and safety.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Data Security">
        <p>
          We implement appropriate security measures to protect your personal data from
          unauthorised access, alteration, or disclosure. However, no online transmission is 100%
          secure, and we encourage users to take precautions when sharing information.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your Rights Under GDPR">
        <p>You have the following rights regarding your personal data:</p>
        <LegalList
          items={[
            "Right to Access: Request a copy of the data we hold about you.",
            "Right to Rectification: Request corrections to inaccurate or incomplete data.",
            "Right to Erasure: Request deletion of your data (subject to legal obligations).",
            "Right to Restrict Processing: Request limitations on how we use your data.",
            "Right to Data Portability: Request transfer of your data to another service provider.",
            "Right to Object: Opt out of marketing communications at any time.",
          ]}
        />
        <p>
          To exercise any of these rights, please contact us at{" "}
          <a
            href="mailto:info@poweryourpotential.co.uk"
            className="font-medium text-[#8a6a2f] underline underline-offset-2 transition-colors hover:text-[#5e1034]"
          >
            info@poweryourpotential.co.uk
          </a>
        </p>
      </LegalSection>

      <LegalSection heading="7. Cookies and Tracking Technologies">
        <p>
          We use cookies to improve website functionality and user experience. By continuing to
          use our website, you agree to our use of cookies. You can manage cookie preferences in
          your browser settings.
        </p>
      </LegalSection>

      <LegalSection heading="8. Retention of Data">
        <p>
          We retain personal data only as long as necessary for the purposes outlined in this
          policy or as required by law.
        </p>
      </LegalSection>

      <LegalSection heading="9. Third-Party Links">
        <p>
          Our website may contain links to external websites. We are not responsible for their
          privacy practices and encourage users to review their policies.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this
          page, and continued use of our services signifies acceptance of the updated policy.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact Information">
        <p>For any privacy-related inquiries, please contact us at:</p>
        <p>
          Email:{" "}
          <a
            href="mailto:info@poweryourpotential.co.uk"
            className="font-medium text-[#8a6a2f] underline underline-offset-2 transition-colors hover:text-[#5e1034]"
          >
            info@poweryourpotential.co.uk
          </a>
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
