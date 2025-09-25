import AboutHome from "../components/AboutSection/AboutHome";
import TarmacJourney from "../components/AboutSection/TarmacJourney";
import Team from "../components/AboutSection/Team";
import { aboutAssets } from "../assets/aboutAssets";
import Mission from "../components/AboutSection/Mission";
import Vision from "../components/AboutSection/Vision";
import TarmacIdea from "../components/AboutSection/TarmacIdea";

const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutAssets.stars1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AboutHome />
      <TarmacJourney />
      <Mission />
      <Vision />
      <Team />
      <TarmacIdea />
    </div>
  );
};

export default About;
