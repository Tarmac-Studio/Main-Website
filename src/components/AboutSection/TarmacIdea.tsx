import React from "react";
import { steps } from "../../lib/aboutLib";

const TarmacIdea: React.FC = () => {
  return (
    <section className="relative w-full bg-black font-medium sub-text py-20 px-3 sm:px-6 md:px-8">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 gap-10 items-center">
        <div>
          <p className="cyan-text uppercase text-sm font-semibold tracking-wider">
            Tarmac Digital Studio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl main-text font-medium mt-3 leading-snug md:max-w-150 w-full text-left">
            From Idea to Impact: How We Work With You
          </h2>

          <p className="mt-6 leading-relaxed text-base sm:text-lg md:text-[19px]">
            We believe that the journey to a successful product should feel
            simple, collaborative, and exciting. That’s why we follow a proven
            process that balances creativity, speed, and precision, so your idea
            moves from concept to launch without the stress.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 text-left">
          {steps.slice(0, 4).map((step) => (
            <div key={step.id} className="box-back md:px-8 md:py-15 px-4 py-5">
              <img
                src={step.icon}
                alt="social-icon"
                className="md:w-18 h-auto w-15 object-cover"
              />

              <h3
                className="md:text-[40px] text-3xl font-medium mb-3 main-text md:leading-12 leading-10"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />

              <p className="sub-text text-base">{step.description}</p>
            </div>
          ))}
        </div>

        {steps.length > 4 && (
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/2 box-back md:px-8 md:py-15 px-4 py-8">
              <img
                src={steps[steps.length - 1].icon}
                alt="social-icon"
                className="md:w-18 h-auto w-12 object-cover"
              />

              <h3
                className="md:text-[40px] text-3xl font-medium mb-3 main-text md:leading-12 leading-10"
                dangerouslySetInnerHTML={{
                  __html: steps[steps.length - 1].title,
                }}
              />

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
