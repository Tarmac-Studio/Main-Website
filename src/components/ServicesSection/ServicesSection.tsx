import React from "react";
import { services } from "../../lib/ServiceLib";
// import Stars from "../../assets/images/About/Stars.png";

interface ServiceCardProps {
  intro: string;
  title: string;
  description: string;
  deliverables: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  intro,
  title,
  description,
  deliverables,
}) => {
  return (
    <div className="service-border mb-10 sm:mb-16 ">
      <div className="px-6 sm:px-10 lg:px-12 py-8 sm:py-10">
        {/* Intro */}
        <p className="cyan-text uppercase text-xs sm:text-sm font-semibold tracking-wider mb-4 sm:mb-6 md:text-justify text-center">
          {intro}
        </p>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl main-text font-medium mb-5 sm:mb-6 lg:mb-8 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="sub-text text-base sm:text-lg md:text-[19px] leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-6xl">
          {description}
        </p>

        {/* Deliverables Section */}
        <div className="pl-0 sm:pl-6 lg:pl-8">
          <h4 className="main-text text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-5 sm:mb-6">
            What We Deliver:
          </h4>

          <ul className="sub-text space-y-2 sm:space-y-3 list-disc list-outside pl-5 sm:pl-6">
            {deliverables.map((item, index) => (
              <li
                key={index}
                className="text-sm sm:text-base md:text-lg leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Services Section
const ServicesSection: React.FC = () => {
  return (
    <section
      className="relative w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 text-white overflow-hidden"
      style={{
        background: `
          radial-gradient(50% 20% at 50% 20%, rgba(0, 255, 255, 0.12) 0%, rgba(0, 255, 255, 0) 100%),
          radial-gradient(70% 30% at 50% 60%, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%),
          black
        `,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Stars Background */}
      {/* <img
        src={Stars}
        alt="Stars Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-84"
      /> */}

      <div className="relative z-10 max-w-5xl md:max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            intro={service.intro}
            title={service.title}
            description={service.description}
            deliverables={service.deliverables}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
