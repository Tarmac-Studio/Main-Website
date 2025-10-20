import React from "react";
import ButtonLink1 from "../../ui/ButtonLink1";
import ButtonLink2 from "../../ui/ButtonLink2";
import { homeSocials } from "../../lib/HomeLib";
import { aboutAssets } from "../../assets/aboutAssets";
import HeroSection from "../../shared/HeroSection";

const AboutHome: React.FC = () => {
  return (
    <HeroSection
      backgroundImage={aboutAssets.About}
      badgeText="TARMAC DIGITAL STUDIO"
      title="Building Digital Products That Drive Growth"
      subtitle="At Tarmac, we’re not just developers or designers — we’re your product partners. From idea to launch, we turn your vision into impactful digital solutions that scale."
      primaryBtn={<ButtonLink1 to="/contact">Work with Us</ButtonLink1>}
      secondaryBtn={
        <ButtonLink2 to="/portfolio">View our Portfolio</ButtonLink2>
      }
      socials={homeSocials}
    />
  );
};

export default AboutHome;
