import React from "react";
import { steps } from "../../lib/HomeLib";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";
import ButtonLink2 from "../../ui/ButtonLink2";

const Process: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Label */}
        <SectionHeader title="How We Work With You" />
        <Heading title="Our Process" />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-left">
          {steps.map((step) => (
            <div key={step.id} className="box-back md:px-8 md:py-15 px-4 py-8">
              {/* Icon */}
              <img
                src={step.icon}
                alt="social-icon"
                className="md:w-18 h-auto w-12 object-cover"
              />

              {/* Title */}
              <h3 className="text-3xl font-medium mb-3 main-text">
                {step.title}
              </h3>

              {/* Description */}
              <p className="sub-text text-base ">{step.description}</p>
            </div>
          ))}
        </div>

        <ButtonLink2 to="/">Book a Free Strategy Call</ButtonLink2>
      </div>
    </section>
  );
};

export default Process;
