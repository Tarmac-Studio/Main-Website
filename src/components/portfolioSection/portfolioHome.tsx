import React from "react";
import HeroSection from "../../shared/HeroSection";
import { portfolioAssets } from "../../assets/portfolioAssets";
import { homeSocials } from "../../lib/HomeLib";

const portfolioHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={portfolioAssets.portfolioBackground}
      title="Portfolio"
      subtitle={
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl main-text font-medium leading-tight ">
          Our Work in Action{" "}
        </p>
      }
      socials={homeSocials}
    />
  );
};

export default portfolioHome;
