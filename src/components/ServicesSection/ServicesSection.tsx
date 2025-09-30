import React from "react";
import { services } from "../../lib/ServiceLib";
import Stars from "../../assets/images/About/Stars.png";

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
    <div className="service-border mb-10 sm:mb-25">
      <div className="pb-6 sm:pb-8 mb-6 sm:mb-8">
        <div className="mx-0 sm:mx-10">
          {/* Intro */}
          <p className="cyan-text uppercase text-xs sm:text-sm font-semibold tracking-wider mb-3 sm:mb-5">
            {intro}
          </p>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl main-text font-medium mb-4 sm:mb-5 leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="sub-text text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-10">
            {description}
          </p>

          <div className="mx-10">
            {/* Deliverables Title */}
            <h2 className="main-text text-sm sm:text-lg md:text-xl font-semibold tracking-wider mb-4 sm:mb-6">
              What We Deliver:
            </h2>

            {/* Deliverables List */}
            <ul className="sub-text space-y-1 sm:space-y-2 list-disc list-outside">
              {deliverables.map((item, index) => (
                <li key={index} className="text-sm sm:text-base md:text-lg">
                  {item}
                </li>
              ))}
            </ul>
          </div>
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
          radial-gradient(circle at center, #032323 0%, #032323 10%, black 90%, black 100%),
          radial-gradient(50% 50% at 50% 120%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0) 100%)
        `,
      }}
    >
      {/* Stars Background */}
      <img
        src={Stars}
        alt="Stars Background"
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none scale-85"
      />

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
