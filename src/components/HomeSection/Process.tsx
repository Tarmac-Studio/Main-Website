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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mb-15 mb-10 text-left md:mt-20 mt-10">
          {steps.map((step) => (
            <div key={step.id} className="box-back md:px-6 md:py-18 px-4 py-8">
              {/* Icon */}
              <img
                src={step.icon}
                alt="social-icon"
                className="md:w-15 h-auto w-12 object-cover cursor-pointer mb-4"
              />

              {/* Title */}
              <h3 className="text-3xl md:text-[40px] font-medium mb-3 main-text">
                {step.title}
              </h3>

              {/* Description */}
              <p className="sub-text text-base md:text-xl ">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <ButtonLink2
          target="blank"
          to="https://calendly.com/tarmacdigitalstudio"
        >
          Book a Free Strategy Call
        </ButtonLink2>
      </div>
    </section>
  );
};

export default Process;
