import type { Metadata } from "next";
import LegalLayout from "@/components/legal/LegalLayout";
import LegalSection, { LegalList } from "@/components/legal/LegalSection";

export const metadata: Metadata = {
  title: "Terms & Conditions | Power Your Potential",
  description:
    "The terms and conditions governing your use of the Power Your Potential website, coaching, consultancy and workshop services.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms & Condition" updated="January 2025">
      <LegalSection heading="1. Introduction">
        <p>
          Welcome to Power Your Potential (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or
          &ldquo;us&rdquo;). These Terms and Conditions govern your use of our website
          (https://www.poweryourpotential.co.uk/) and our services, including bespoke career
          and leadership coaching, corporate consultancy, employee workshops, and performance
          enhancement programs.
        </p>
        <p>
          By using our website or engaging with our services, you agree to these Terms and
          Conditions. If you do not agree, please refrain from using our website and services.
        </p>
      </LegalSection>

      <LegalSection heading="2. Services Offered">
        <p>We provide:</p>
        <LegalList
          items={[
            "For Individuals: Bespoke career and leadership coaching to empower professional growth.",
            "For Corporates: Team performance enhancement through coaching, workshops, and consultancy services.",
          ]}
        />
        <p>
          All services are subject to availability, and we reserve the right to modify or
          discontinue any offering without prior notice.
        </p>
      </LegalSection>

      <LegalSection heading="3. Eligibility">
        <LegalList
          items={[
            "Our services are available to individuals aged 18 and above.",
            "Corporate clients must have the authority to engage with us on behalf of their organisation.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="4. Booking and Payments">
        <LegalList
          items={[
            "Bookings for coaching sessions, workshops, or consultancy services must be made in advance.",
            "Payment terms vary based on the service package. Fees are stated at the time of booking and must be paid as per the agreed schedule.",
            "No service will be confirmed until full or partial payment (as agreed) has been received.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="5. Cancellations and Refunds">
        <LegalList
          items={[
            "Individuals: Cancellations must be made at least 48 hours before the scheduled session to qualify for a refund or reschedule.",
            "Corporates: Custom cancellation policies will be outlined in the service agreement.",
            "No-shows or late cancellations may not be eligible for refunds.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="6. Client Responsibilities">
        <LegalList
          items={[
            "Clients must provide accurate information and be actively engaged in the coaching and consultancy process.",
            "Results vary based on individual and organisational commitment; we do not guarantee specific outcomes.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="7. Intellectual Property">
        <LegalList
          items={[
            "All content, materials, and methodologies used in coaching sessions, workshops, and consultancy services remain the intellectual property of Power Your Potential.",
            "Clients may not reproduce, distribute, or use our materials without explicit permission.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="8. Confidentiality">
        <LegalList
          items={[
            "We uphold strict confidentiality in all coaching and consultancy engagements.",
            "However, legal and ethical obligations may require disclosure in situations involving harm to self or others.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <LegalList
          items={[
            "We strive to provide high-quality coaching and consultancy services; however, we are not liable for any direct or indirect damages resulting from service engagement.",
            "Clients remain responsible for their own actions, decisions, and implementation of strategies discussed.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="10. Third-Party Links and Resources">
        <LegalList
          items={[
            "Our website may contain links to external resources. We do not control or take responsibility for third-party websites.",
          ]}
        />
      </LegalSection>

      <LegalSection heading="11. Amendments">
        <p>
          We reserve the right to update these Terms and Conditions at any time. Continued use
          of our website or services after changes indicates acceptance of the revised terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact Information">
        <p>For inquiries regarding these Terms and Conditions, please contact us at:</p>
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
