import AboutHome from "../components/AboutSection/AboutHome";
import TarmacJourney from "../components/AboutSection/TarmacJourney";
import Team from "../components/AboutSection/Team";
import Mission from "../components/AboutSection/Mission";
import Vision from "../components/AboutSection/Vision";
import TarmacIdea from "../components/AboutSection/TarmacIdea";
import Starss from "../assets/images/About/stars1.svg";

const About = () => {
  return (
    <>
      <AboutHome />
      <TarmacJourney />
      <Mission />
      <Vision />
      <Team />
      <TarmacIdea />
    </>
  );
};

export default About;
