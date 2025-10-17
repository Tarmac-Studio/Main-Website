import React from "react";
import HeroSection from "../../shared/HeroSection";
import { portfolioAssets } from "../../assets/portfolioAssets";

const portfolioHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={portfolioAssets.portfolioBackground}
      title="Portfolio"
      titleClassName="mt-40 mb-0"
      subtitle={
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl main-text font-medium leading-tight ">
          Our Work in Action{" "}
        </p>
      }
    />
  );
};

export default portfolioHome;
