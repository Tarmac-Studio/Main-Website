import React from "react";
import ButtonLink1 from "../../ui/ButtonLink1";
import ButtonLink2 from "../../ui/ButtonLink2";
import { homeSocials } from "../../lib/HomeLib";
import HeroSection from "../../shared/HeroSection";
import { assets } from "../../assets/homeAssets";

const ServicesHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={assets.Services}
      badgeText="TARMAC DIGITAL STUDIO"
      title="Helping Startups and Businesses launch, grow, and scale in the digital world."
      subtitle={
        <>
          We don’t just offer services, we create solutions. Every startup is
          different, and that’s why our approach is tailored at meeting your
          exact need, solving challenges, and achieving goals. <br /> From
          building strong brands to scaling products, we’ve got the tools, team,
          and talent to make it happen.
        </>
      }
      primaryBtn={
        <ButtonLink1 target="_self" to="/contact">
          Work with Us
        </ButtonLink1>
      }
      secondaryBtn={
        <ButtonLink2 target="_self" to="/portfolio">
          View our Portfolio
        </ButtonLink2>
      }
      socials={homeSocials}
    />
  );
};

export default ServicesHome;
