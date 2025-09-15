import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

const ButtonLink1: React.FC<ButtonLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="border-2 border-[#00FFFF] cyan-text px-12 md:px-18 py-2 md:py-2.5 rounded-full text-base md:text-lg lg:text-xl font-medium text-center"
    >
      {children}
    </Link>
  );
};

export default ButtonLink1;
