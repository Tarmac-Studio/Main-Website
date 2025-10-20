import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

export interface PortfolioProject {
  id: string | number;
  imageUrl: string;
}

export interface PortfolioCardProps {
  project: PortfolioProject;
  visibleHeight?: number;
  mobileHeight?: number;
  desktopScrollDistance?: number;
  mobileScrollDistance?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  project,
  visibleHeight = 550,
  mobileHeight = 350,
  desktopScrollDistance = 4000,
  mobileScrollDistance = 1700,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentHeight = isMobile ? mobileHeight : visibleHeight;
  type AnimationControls = ReturnType<typeof useAnimation>;

  const controls: AnimationControls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  const scrollDistance = isMobile
    ? mobileScrollDistance
    : desktopScrollDistance;

  const handleMouseEnter = () => {
    setIsHovered(true);
    controls.start({
      y: -scrollDistance,
      transition: {
        duration: 12,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    controls.stop();
    controls.start({
      y: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    });
  };

  return (
    <motion.div
      className="relative overflow-hidden group cursor-pointer border-2"
      style={{
        height: `${currentHeight}px`,
        borderImage: "linear-gradient(to bottom right, #F6F4F4, #585858) 1",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{
        scale: 1.0,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-black pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scrolling image */}
      <motion.img
        animate={controls}
        src={project.imageUrl}
        alt="Portfolio Project"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
          display: "block",
        }}
      />
    </motion.div>
  );
};

export default PortfolioCard;
