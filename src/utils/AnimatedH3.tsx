import { useState, useEffect } from "react";
const AnimatedH3 = () => {
  const services = [
    "Strategic Clarity",
    "Brand Identity",
    "UI/UX Design",
    "Functional Website",
    "Social Media Management",
    "Search Engine Optimization",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsAnimating(false);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-10 md:h-12">
      <h3
        className={`absolute w-full cyan-text md:text-4xl text-2xl font-medium capitalize transition-transform duration-800 ease-in-out ${
          isAnimating
            ? "transform translate-y-full opacity-0"
            : "transform translate-y-0 opacity-100"
        }`}
      >
        {services[currentIndex]}
      </h3>
    </div>
  );
};

export default AnimatedH3;
