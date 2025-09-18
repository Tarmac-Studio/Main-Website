import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";
import AnimatedH3 from "../../utils/AnimatedH3";

const Solve: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center items-center">
        {/* Label */}
        <SectionHeader title="What we solve" />
        <Heading
          title={
            <>
              Built for Founders,
              <br /> and Backed by a Process.
            </>
          }
        />
        <p className="sub-text md:text-xl text-base mb-7">
          We know early stage founders need speed, clarity, and smart execution;
          all without going through the stress of managing 3 separate Teams.
          Tarmac bridges the gap, we become your launchpad and launch partner,
          delivering:
        </p>
        <AnimatedH3 />
        <p className="sub-text md:text-xl text-base mt-4">
          Whether you’re at idea stage or ready to launch — we’re your studio on
          demand.
        </p>
      </div>
    </section>
  );
};
export default Solve;
