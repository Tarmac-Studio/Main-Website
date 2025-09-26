import React from "react";

interface HeroSectionProps {
  backgroundImage: string;
  badgeText?: string;
  title: string;
  titleClassName?: string;
  subtitle?: React.ReactNode;
  primaryBtn?: React.ReactNode;
  secondaryBtn?: React.ReactNode;
  socials?: { icon: string; link: string; alt: string }[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  backgroundImage,
  badgeText,
  title,
  titleClassName,
  subtitle,
  primaryBtn,
  secondaryBtn,
  socials,
}) => {
  return (
    <section
      className="relative h-screen w-full flex flex-col items-center justify-between text-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content */}
      <div className="relative z-20 max-w-6xl px-4 sm:px-6 md:px-10 flex-grow flex flex-col justify-center">
        {badgeText && (
          <p className="cyan-text text-sm font-semibold tracking-wide mb-4">
            {badgeText}
          </p>
        )}

        {/* Title with optional className */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl main-text font-medium leading-tight ${titleClassName || ""}`}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="sub-text md:text-xl text-lg md:mb-8 sm:mb-6 mb-4 md:mt-6 sm:mt-2 mt-2">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        {(primaryBtn || secondaryBtn) && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryBtn}
            {secondaryBtn}
          </div>
        )}
      </div>

      {/* Socials */}
      {socials && socials.length > 0 && (
        <div className="relative z-20 flex justify-center pb-8 sm:pb-10 md:pb-14 flex-shrink-0">
          <div className="flex gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10">
            {socials.map(({ icon, link, alt }, idx) => (
              <a
                key={idx}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
              >
                <img
                  src={icon}
                  alt={alt}
                  className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
