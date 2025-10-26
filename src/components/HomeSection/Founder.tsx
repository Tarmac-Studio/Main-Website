import React, { useEffect, useState } from "react";
import { assets, contents } from "../../assets/homeAssets";

interface FounderSectionProps {
  imageSrc?: string;
}

const Founder: React.FC<FounderSectionProps> = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contents.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const content = contents[index];

  return (
    <section
      className={`w-full flex justify-center items-center py-20 px-4 sm:px-6 md:px-10 transition-all duration-1000 bg-black`}
    >
      <div className="max-w-6xl w-full relative">
        <div
          className={`absolute hidden md:block top-12 lg:top-12 w-62 md:w-72 h-px bg-[#00FFFF] transition-all duration-1000 ease-in-out ${
            content.dividerPosition === "right" ? "right-0" : "left-0"
          }`}
          style={
            content.dividerPosition === "right"
              ? { right: content.dividerOffset || "0%" }
              : { left: content.dividerOffset || "0%" }
          }
        />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 items-center gap-8 rounded-3xl p-8 md:p-20 transition-all duration-1000 ${content.bg}`}
        >
          {/* Left Section */}
          <div className="flex flex-col gap-3 justify-center transition-all duration-1000">
            <div className="flex items-center gap-2">
              <img src={assets.textLogo} alt="Logo" className="h-3 w-auto" />
              <h3 className="uppercase cyan-text text-sm md:text-base font-bold">
                WHY FOUNDERS CHOOSE US
              </h3>
            </div>

            <h2 className="text-[26px] sm:text-3xl md:text-4xl max-w-sm font-medium leading-tight main-text transition-all duration-1000">
              {content.title}
            </h2>

            <p className="text-base sm:text-md md:text-lg sub-text transition-all duration-1000">
              {content.text}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex justify-center  transition-all duration-1000">
            <div className="w-full overflow-hidden rounded-2xl flex justify-center">
              <img
                src={content.img}
                alt="Founder statue"
                className="w-full h-auto md:w-auto sm:max-h-100 md:max-h-150 object-cover mx-auto rounded-2xl transition-all duration-1000"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
