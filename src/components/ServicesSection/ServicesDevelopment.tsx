import React from "react";
import Stars from "../../assets/images/About/Stars.png";

const ServicesDevelopment: React.FC = () => {
  return (
    <section
      className="relative w-full text-white overflow-hidden py-16 px-4 sm:px-6 md:px-10"
      style={{
        background:
          "black radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
      }}
    >
      {/* Stars Background */}
      <img
        src={Stars}
        alt="Stars Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-75"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center w-full space-y-32">
        {/* -------------------- FIRST BLOCK -------------------- */}
        <div className="relative w-full max-w-[980px] pb-8 flex justify-center">
          {/* White Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] bg-white/80 w-full max-w-[90%] md:max-w-[1020px]"></div>

          {/* Text Content */}
          <div className="relative w-full z-10">
            <p className="mt-20 text-cyan/100 text-xs uppercase tracking-wider text-teal-400 mb-4">
              Turning designs into powerful digital products.
            </p>
            <h2
              className="max-w-[480px] h-[54px] font-satoshi font-medium text-[45px] leading-[100%] tracking-normal mb-3 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
              }}
            >
              Development
            </h2>
            <p className="text-white/100 text-base md:text-lg leading-relaxed mb-15">
              Whether it’s a website, web app, or mobile app — we bring your product vision to life through clean, scalable, and efficient code. 
              Our devs and designers work hand-in-hand, ensuring every product not only looks great but works flawlessly.
            </p>
            <div className="pl-6">
              <h2
                className="max-w-[480px] h-[54px] font-satoshi font-medium text-[30px] leading-[100%] tracking-normal mb-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
                }}
              >
                What We Deliver:
              </h2>
            </div>
            <ul className="list-disc list-inside text-white/100 text-base md:text-lg pl-8 mb-6">
              <li>Website &amp; web app development</li>
              <li>Mobile app development</li>
              <li>Frontend &amp; backend engineering</li>
              <li>API integrations</li>
              <li>No-code/MVP development (coming soon)</li>
            </ul>
          </div>
        </div>

        {/* -------------------- SECOND BLOCK -------------------- */}
        <div className="relative w-full max-w-[980px] pb-8 flex justify-center">
          {/* White Line */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[4px] bg-white/80 w-full max-w-[90%] md:max-w-[1020px]"></div>

          {/* Text Content */}
          <div className="relative w-full z-10">
            <p className="text-cyan/100 text-xs uppercase tracking-wider text-teal-400 mb-4">
              Building your digital presence, one post at a time.
            </p>
            <h2
              className="max-w-[900px] h-[54px] font-satoshi font-medium text-[45px] leading-[100%] tracking-normal mb-3 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
             }}
             >
             Social Media Management
            </h2>
            <p className="text-white/100 text-base md:text-lg leading-relaxed mb-15">
              Social media is today’s marketplace. 
              We help you show up where your audience already hangs out — and convert likes into loyal customers.
            </p>
            <div className="pl-6">
              <h2
                className="max-w-[480px] h-[54px] font-satoshi font-medium text-[30px] leading-[100%] tracking-normal mb-1 bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
                }}
              >
                What We Deliver:
              </h2>
            </div>
            <ul className="list-disc list-inside text-white/100 text-base md:text-lg pl-8 mb-6">
              <li>Content strategy &amp; planning</li>
              <li>Social media design (graphics, reels, stories)</li>
              <li>Community management &amp; engagement</li>
              <li>Analytics &amp; reporting</li>
              <li>Paid ads campaign management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDevelopment;
