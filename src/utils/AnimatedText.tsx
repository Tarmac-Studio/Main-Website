import { useState, useEffect } from "react";

const AnimatedText = () => {
  const words = ["Startup", "Business", "Brand"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`startup-text transition-opacity duration-300 inline-block text-center min-w-[10px] md:min-w-[80px] lg:min-w-[180px] xl:min-w-[280px] ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        color: "#00ffff",
      }}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;
