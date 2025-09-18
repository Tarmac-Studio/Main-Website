import { useState, useEffect, useRef } from "react";

const AnimatedText = () => {
  const words = ["Startup", "Business", "Brand"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [maxWidth, setMaxWidth] = useState<number>(0);
  const spanRef = useRef<HTMLSpanElement>(null);

  const measureWidth = () => {
    if (!spanRef.current) return;
    const temp = document.createElement("span");
    temp.style.visibility = "hidden";
    temp.style.position = "absolute";
    temp.style.whiteSpace = "nowrap";
    temp.style.font = getComputedStyle(spanRef.current).font;
    document.body.appendChild(temp);

    let max = 0;
    words.forEach((word) => {
      temp.textContent = word;
      max = Math.max(max, temp.getBoundingClientRect().width);
    });

    setMaxWidth(max);
    document.body.removeChild(temp);
  };

  useEffect(() => {
    measureWidth(); // measure once
    window.addEventListener("resize", measureWidth); // re-measure on resize
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={spanRef}
      className={`startup-text transition-opacity duration-300 inline-block text-center ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        color: "#00ffff",
        width: maxWidth ? `${maxWidth}px` : "auto", // responsive exact fit
      }}
    >
      {words[currentWordIndex]}
    </span>
  );
};

export default AnimatedText;
