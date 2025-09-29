import React from "react";
import Stars from "../../assets/images/About/Stars.png";

const ServicesBranding: React.FC = () => {
  return (
    <section
      className="relative w-full text-white overflow-hidden py-16 px-4 sm:px-6 md:px-10"
      style={{
        background:
          "radial-gradient(circle at center, #032323 0%, #032323 10%, black 90%, black 100%)",
      }}
    >
      {/* Stars Background */}
      <img
        src={Stars}
        alt="Stars Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-82"
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
              Crafting identities that stand out and stick.
            </p>
            <h2
              className="max-w-[480px] h-[54px] font-satoshi font-medium text-[45px] leading-[100%] tracking-normal mb-3 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
              }}
            >
              Branding
            </h2>
            <p className="text-white/100 text-base md:text-lg leading-relaxed mb-15">
              Your brand is more than just a logo — it’s the story, the feeling,
              and the promise you deliver to your customers. We help you build a
              brand that’s not only visually striking but also deeply aligned with
              your values and vision.
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
              <li>Logo &amp; identity design</li>
              <li>Brand strategy &amp; positioning</li>
              <li>Visual style guide</li>
              <li>Messaging &amp; tone of voice</li>
              <li>Brand assets (stationery, social templates, etc.)</li>
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
              Designing experiences your users will love.
            </p>
            <h2
              className="max-w-[480px] h-[54px] font-satoshi font-medium text-[45px] leading-[100%] tracking-normal mb-3 bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(260.45deg, #F6F4F4 -12.22%, #585858 103.25%)",
              }}
            >
              Product Design (UI/UX)
            </h2>
            <p className="text-white/100 leading-relaxed mb-15 max-w-[1000px] mx-auto">
            <span className="text-[0.95rem] md:text-[1rem] lg:text-[1.05rem] inline-block">
                Great products aren’t just functional — they’re intuitive, delightful, and solve real problems. Our product design team focuses
            </span>
            <br />
            <span className="text-base md:text-lg">
                on creating user experiences that make adoption effortless and engagement natural.
            </span>
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
              <li>UX research &amp; user personas</li>
              <li>Wireframes &amp; prototypes</li>
              <li>UI design for web &amp; mobile</li>
              <li>Usability testing</li>
              <li>Design systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBranding;
