import React from "react";
import PortfolioCard from "./scrollCard.tsx";
import { PROJECTS } from "../../lib/portfolioLib.ts";
import "../../index.css";

const PortfolioGrid: React.FC = () => {
  return (
    <div className="w-full bg-black">
      {/* Grid Container */}
      <div className="w-full px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
