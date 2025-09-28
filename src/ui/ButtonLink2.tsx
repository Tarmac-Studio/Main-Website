import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  target: string;
  children: React.ReactNode;
}

const ButtonLink2: React.FC<ButtonLinkProps> = ({ to, target, children }) => {
  return (
    <Link
      to={to}
      target={target}
      className="relative border-2 border-[#00FFFF] bg-[#00FFFF] text-black px-12 md:px-18 py-3 md:py-3 
                 rounded-full text-base md:text-lg lg:text-xl font-medium text-center
                 transition-all duration-700 ease-in-out
                 hover:bg-transparent hover:text-[#00FFFF] group overflow-hidden"
    >
      {/* Text with its own circle animation */}
      <span className="relative z-10 flex items-center justify-center">
        <span
          className="relative transition-all duration-700 ease-in-out 
                     group-hover:scale-105"
        >
          {children}
        </span>

        {/* Mini cyan glowing circle around text */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-1/2 
                     w-[115%] h-[135%] rounded-full border-2 border-[#00FFFF] 
                     shadow-[0_0_12px_rgba(0,255,255,0.6)]
                     opacity-0 scale-0 
                     group-hover:opacity-100 group-hover:scale-100 
                     transition-all duration-700 ease-in-out"
        ></span>
      </span>
    </Link>
  );
};

export default ButtonLink2;
