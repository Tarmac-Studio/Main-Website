import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  target: string;
  children: React.ReactNode;
}

const ButtonLink1: React.FC<ButtonLinkProps> = ({ to, target, children }) => {
  return (
    <Link
      to={to}
      target={target}
      className="relative border-2 border-[#00FFFF] text-[#00FFFF] px-12 md:px-18 py-3 md:py-3 
                 rounded-full text-base md:text-lg lg:text-xl font-medium text-center
                 transition-all duration-700 ease-in-out
                 hover:text-black hover:bg-[#00FFFF]
                 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-[#00FFFF] before:scale-100 before:opacity-0
                 hover:before:scale-90 hover:before:opacity-80 before:transition-all before:duration-700 before:ease-in-out
                 after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-[#00FFFF] after:scale-100 after:opacity-0
                 hover:after:scale-75 hover:after:opacity-60 after:transition-all after:duration-1000 after:ease-in-out
                 group overflow-hidden"
    >
      {/* Text with its own hover circle */}
      <span className="relative z-10 flex items-center justify-center">
        <span
          className="relative transition-all duration-700 ease-in-out 
                     group-hover:text-black group-hover:scale-105"
        >
          {children}
        </span>

        {/* Unique styled circle around text */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-[52%] -translate-y-1/2 
                     w-[115%] h-[135%] rounded-full border-2 border-black 
                     shadow-[0_0_12px_rgba(0,255,255,0.6)] 
                     opacity-0 scale-0 
                     group-hover:opacity-100 group-hover:scale-100 
                     transition-all duration-700 ease-in-out"
        ></span>
      </span>

      {/* Expanding background circle */}
      <span
        className="absolute inset-0 z-0 rounded-full bg-[#00FFFF] scale-0 
                   group-hover:scale-100 transition-transform duration-700 ease-in-out"
      ></span>
    </Link>
  );
};

export default ButtonLink1;
