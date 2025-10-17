import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";
import PortfolioCard from "../portfolioSection/scrollCard";
import { PROJECTS } from "../../lib/portfolioLib";
import ButtonLink2 from "../../ui/ButtonLink2";

const Portfolio: React.FC = () => {
  const topProjects = PROJECTS.slice(0, 4);
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-10 py-15">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader title="our portfolio" />
        <div className="max-w-4xl mx-auto">
          <Heading title="Projects we’ve launched with founders like you" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex items-center justify-center md:mt-15 mt-8">
        <ButtonLink2 target="_self" to="/portfolio">
          View all Portfolio
        </ButtonLink2>
      </div>
    </section>
  );
};

export default Portfolio;
