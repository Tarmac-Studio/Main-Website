import React from "react";
import { testimonials } from "../../lib/HomeLib";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";

const Portfolio: React.FC = () => {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-10 py-40">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader title="our portfolio" />
        <div className="max-w-4xl mx-auto">
          <Heading title="Projects we’ve launched with founders like you" />
        </div>

        {/* Grid */}
        <div className="md:mt-15 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-justify"></div>
      </div>
    </section>
  );
};

export default Portfolio;
