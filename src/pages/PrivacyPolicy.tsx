import React from "react";
import Stars from "../assets/images/About/Stars.png";

const PrivacyPolicy: React.FC = () => {
  return (
    <section
      className="relative pt-15 pb-8 sm:px-8"
      style={{
        background:
          "radial-gradient(30% 10% at 50% 10%, rgba(0, 255, 255, 0.12) 10%, rgba(0, 255, 255, 0) 100%), black",
      }}
    >

      <div className="privacy-container">

      <div className="relative max-w-[900px] mx-auto px-6 py-16 space-y-6">
        {/* Effective Date */}
        <p className="text-[#00FFFF] text-sm font-medium mb-2">
          EFFECTIVE DATE: 01/08/2025
        </p>

        {/* Title */}
        <h1
          className="text-[40px] font-[500] leading-[100%] tracking-[0] bg-gradient-to-r from-[#F6F4F4]/20 via-[#F6F4F4]/50 to-[#585858]/80 bg-clip-text text-transparent font-satoshi w-[480px] h-[54px]"
        >
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed">
          At Tarmac Digital Studio (“Tarmac,” “we,” “our,” or “us”), we respect your
          privacy and are committed to protecting the personal information you
          share with us. This Privacy Policy explains how we collect, use,
          disclose, and protect your data when you interact with our website,
          services, or digital platforms. <br />
          By accessing or using our services, you agree to the practices described
          in this Privacy Policy.
        </p>

        {/* Sections */}
        <div className="space-y-15 ml-6">
          {/* 1. Who We Are */}
          <div>
            <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
              1. Who We Are
            </h2>
            <p className="text-gray-300">
              Tarmac Digital Studio is a creative agency specializing in branding,
              UI/UX design, web development, SEO, and digital solutions. We serve
              startups, entrepreneurs, and businesses, helping them launch and grow
              in the digital space.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
              2. Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We may collect different categories of information depending on your interaction with us:
            </p>

            {/* Subsections */}
            <div className="space-y-6 ml-4">
              <div>
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
                  a) Personal Information
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-[2px] ml-2">
                  <li>Name, email address, phone number, job title, company name.</li>
                  <li>Billing and payment details when purchasing our services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
                  b) Business & Project Data
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-[2px] ml-2">
                  <li>Files, brand assets, creative briefs, and other content shared for project purposes.</li>
                  <li>Feedback, revisions, and communications related to project execution.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
                  c) Technical Data
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-[2px] ml-2">
                  <li>IP address, browser type, operating system, device identifiers.</li>
                  <li>Usage data (e.g., pages viewed, time spent, links clicked).</li>
                  <li>Cookies and similar technologies (for analytics and personalization).</li>
                </ul>
              </div>
            
              <div>
                <h3 className="text-lg font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
                  d) Transactional Data
                </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-[2px] ml-2">
                  <li>Service history, invoices, receipts, and customer support requests.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

   


      {/* === Section 2: How We Collect Information === */}
<section
  className="relative min-h-screen pt-1"
  style={{
    background:
      "radial-gradient(50% 50% at 50% 45%, rgba(0, 255, 255, 0.12) 0%, rgba(0, 255, 255, 0) 100%), black",
  }}
>
  {/* Stars Background */}
  <img
    src={Stars}
    alt="Stars Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-75"
  />



  {/* Content */}
        <div className="space-y-15 ml-6">
  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      3. How We Collect Information
    </h2>

    <p className="text-gray-300 mb-4">
      We collect information through:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        Direct Interactions: When you contact us, request a quote, sign a
        contract, or submit files.
      </li>
      <li>
        Website & Digital Tools: Through forms, cookies, and analytics tools
        (e.g., Google Analytics).
      </li>
      <li>
        Third-Party Platforms: If you engage us through social media,
        referrals, or partner platforms.
      </li>
    </ul>
  </div>


<div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      4. How We Use Your Information
    </h2>

    <p className="text-gray-300 mb-4">
      We use collected data for the following purposes:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        To deliver our services and fulfill contracts.
      </li>
      <li>
        To communicate with you regarding projects, updates, invoices, and support.
      </li>
      <li>
        To process payments and maintain business records.
      </li>
      <li>
        To improve our services, user experience, and website performance.
      </li>
      <li>
        To send newsletters, offers, or promotional content (only with your consent).
      </li>
      <li>
        To comply with legal, regulatory, or tax obligations.
      </li>
    </ul>
  </div>


  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      5. Data Sharing & Disclosure
    </h2>

    <p className="text-gray-300 mb-4">
      We do not sell or rent your personal information. However, we may share your data in these circumstances:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        With Service Providers: Hosting providers, payment gateways, analytics tools, and cloud storage platforms, solely for service delivery.
      </li>
      <li>
        For Legal Compliance: If required by law, regulation, or legal proceedings.
      </li>
      <li>
        Business Transfers: In the event of a merger, acquisition, or reorganization, your data may be transferred.
      </li>
    </ul>
  </div>

  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      6. Data Security
    </h2>

    <p className="text-gray-300 mb-4">
      We take reasonable measures to secure your personal data against unauthorized access, alteration, or disclosure. Security practices may include:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        Encrypted storage of sensitive information.
      </li>
      <li>
        Secure payment gateways for financial transactions.
      </li>
      <li>
        Access restrictions limited to authorized personnel.
      </li>
      <li>
        Regular monitoring of systems for vulnerabilities.
      </li>
      Note: While we strive to protect your data, no method of transmission or storage is 100% secure.
      
    </ul>
  </div>

</div>

</section>

{/* === Section 3: Cookies & Tracking Technologies === */}

<section
  className="relative min-h-screen pt-1"
  style={{
    background:
      "radial-gradient(50% 50% at 50% 45%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), black",
  }}
>
  {/* Stars Background */}
  <img
    src={Stars}
    alt="Stars Background"
    className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-75"
  />



  {/* Content */}
        <div className="space-y-15 ml-6">
  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="mt-15 text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      7. Cookies & Tracking Technologies
    </h2>

    <p className="text-gray-300 mb-4">
      Our website uses cookies and tracking tools to:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        Analyze traffic and user behavior
      </li>
      <li>
        Improve site performance and user experience
      </li>
      <li>
        Provide tailored content and recommendations
      </li>
      You can manage or disable cookies in your browser settings. However, some site features may not function properly without them.
    </ul>
  </div>


<div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      8. Your Privacy Rights
    </h2>

    <p className="text-gray-300 mb-4">
      Depending on your location, you may have the following rights:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        Access: Request a copy of the personal information we hold about you.
      </li>
      <li>
        Correction: Update or correct inaccurate details.
      </li>
      <li>
        Deletion: Request that we delete your personal information (subject to legal obligations).
      </li>
      <li>
        Restriction: Limit how we process your information.
      </li>
      <li>
        Opt-Out: Withdraw consent for receiving marketing communications.
      </li>
      <li>
        Data Portability: Request transfer of your data to another service provider.
      </li>
      To exercise these rights, contact us at tarmacdigitalstudio@gmail.com.
    </ul>
  </div>


  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      9. Data Retention
    </h2>

    <p className="text-gray-300 mb-4">
      We retain personal information only as long as necessary:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-2">
      <li>
        For project completion and after-service support.
      </li>
      <li>
        To comply with tax, legal, and accounting obligations.
      </li>
      <li>
        To resolve disputes and enforce agreements.
      </li>
      Once data is no longer needed, we securely delete or anonymize it.
    </ul>

  </div>

  <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      10. Third-Party Links & Services
    </h2>

    <p className="text-gray-300 mb-4">
      Our website and communications may include links to external websites. 
      Tarmac Digital Studio is not responsible for the privacy practices of these third-party sites. 
      We encourage users to review their privacy policies before sharing personal information.
    </p>
  </div>

    <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      11. International Data Transfers
    </h2>

    <p className="text-gray-300 mb-4">
      If you are accessing our services from outside Nigeria, please note that your data may be transferred to, 
      stored, and processed in countries where we or our service providers operate. 
      We ensure appropriate safeguards are in place for such transfers.
    </p>
    </div>

    <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      12. Children's Privacy
    </h2>

    <p className="text-gray-300 mb-4">
      Our services are intended for professionals and businesses. 
      We do not knowingly collect or process information from individuals under the age of 16. 
      If we learn we have collected such data, we will delete it immediately.
    </p>
    </div>

    <div className="relative max-w-[900px] mx-auto px-6 sm:px-8">
    <h2 className="text-xl font-medium mb-2 bg-gradient-to-r from-[#585858] to-[#F6F4F4] bg-clip-text text-transparent">
      13. Changes to This Privacy Policy
    </h2>

    <p className="text-gray-300 mb-4">
      We may update this Privacy Policy periodically to reflect changes in our practices, technology, or legal requirements. 
      Updates will be posted on this page with a revised”
    </p>
    </div>


</div>



</section>
</div>

    </section>
    
  );
};

export default PrivacyPolicy;
