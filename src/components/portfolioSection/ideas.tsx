import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";

const Ideas: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center items-center">
        {/* Label */}
        <SectionHeader title="OUR PORTFOLIO IN ACTION" />
        <Heading
          title={
            <>
              Ideas we’ve transformed into <br />
              digital success stories.{" "}
            </>
          }
        />
        <p className="sub-text md:text-xl sm:text-lg text-base mb-7">
          Every founder has a vision. At Tarmac, we take that vision and turn it
          into designs, products, and strategies that actually work in the real
          world.
          <br />
          Here’s a look at some of our favorite projects, across branding,
          design, development, and digital growth.
        </p>
      </div>
    </section>
  );
};

export default Ideas;