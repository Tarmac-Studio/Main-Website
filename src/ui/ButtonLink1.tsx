import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  target?: string;
  children: React.ReactNode;
}

const ButtonLink1: React.FC<ButtonLinkProps> = ({ to, target, children }) => {
  return (
    <Link
      to={to}
      target={target}
      className="border-2 border-[#00FFFF] text-[#00FFFF] hover:text-black hover:bg-[#00FFFF] px-12 md:px-18 py-3 md:py-3 rounded-full text-base md:text-lg lg:text-xl font-medium text-center"
    >
      {children}
    </Link>
  );
};

export default ButtonLink1;
