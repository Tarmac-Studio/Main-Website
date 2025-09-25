import React from "react";
import { steps } from "../../lib/aboutLib";

const TarmacIdea: React.FC = () => {
  return (
    <section className="relative w-full bg-black font-medium sub-text py-30 px-4 sm:px-6 md:px-8">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 gap-10 items-center">
        <div>
          <p className="cyan-text uppercase text-sm font-semibold tracking-wider">
            Tarmac Digital Studio
          </p>
          <h2 className="text-4xl md:text-5xl main-text font-medium mt-3 leading-snug">
            From Idea to Impact: How <br /> We Work With You
          </h2>

          <p className="mt-6 leading-relaxed text-xl">
            Tarmac believes that the journey to a successful product should feel
            simple, collaborative, and exciting. That’s why we follow a proven
            process that balances creativity, speed, and precision — so your
            idea moves from concept to launch without the stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {steps.slice(0, 4).map((step) => (
            <div key={step.id} className="box-back md:px-8 md:py-15 px-4 py-8">
              <img
                src={step.icon}
                alt="social-icon"
                className="md:w-18 h-auto w-12 object-cover"
              />

              <h3 className="text-3xl font-medium mb-3 main-text">
                {step.title}
              </h3>

              <p className="sub-text text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {steps.length > 4 && (
          <div className="flex justify-center mb-16">
            <div className="w-full md:w-1/2 lg:w-1/2 box-back md:px-8 md:py-15 px-4 py-8">
              <img
                src={steps[steps.length - 1].icon}
                alt="social-icon"
                className="md:w-18 h-auto w-12 object-cover"
              />

              <h3 className="text-3xl font-medium mb-3 main-text">
                {steps[steps.length - 1].title}
              </h3>

              <p className="sub-text text-base">
                {steps[steps.length - 1].description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TarmacIdea;
