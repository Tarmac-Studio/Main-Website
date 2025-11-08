import AboutHome from "../components/AboutSection/AboutHome";
import TarmacJourney from "../components/AboutSection/TarmacJourney";
import Team from "../components/AboutSection/Team";
import Mission from "../components/AboutSection/Mission";
import Vision from "../components/AboutSection/Vision";
import TarmacIdea from "../components/AboutSection/TarmacIdea";
import { usePageMeta } from "../utils/Meta";

const About = () => {
  usePageMeta(
    "About Us | Tarmac Digital Studio",
    "At Tarmac, we don’t just design or develop products, we stay with you all steps of the way, you can say we’re your product partners. From idea to launch, we turn your vision into impactful digital solutions that scale."
  );
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
