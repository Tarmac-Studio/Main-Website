import AboutHome from "../components/AboutSection/AboutHome";
import TarmacJourney from "../components/AboutSection/TarmacJourney";
import Team from "../components/AboutSection/Team";
import Mission from "../components/AboutSection/Mission";
import Vision from "../components/AboutSection/Vision";
import TarmacIdea from "../components/AboutSection/TarmacIdea";
import Starss from "../assets/images/About/stars1.svg";

const About = () => {
  return (
    <div className="relative">
      {/* Top Section (No stars) */}
      <AboutHome />

      {/* Section with Stars Background */}
      <div className="relative overflow-hidden">
        {/* Stars Background */}
        <img
          src={Starss}
          alt="Stars Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
        />

        {/* All sections from here will share the stars bg */}
        <div className="relative z-10">
          <TarmacJourney />
          <Mission />
          <Vision />
          <Team />
          <TarmacIdea />
        </div>
      </div>
    </div>
  );
};

export default About;
