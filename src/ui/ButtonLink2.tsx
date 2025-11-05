import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  target?: string;
  children: React.ReactNode;
}

const ButtonLink2: React.FC<ButtonLinkProps> = ({ to, target, children }) => {
  return (
    <Link
      to={to}
      target={target}
      className="border-[#00ffff] cyan-back text-black px-12 md:px-18 py-3 md:py-3 rounded-full text-base md:text-lg lg:text-xl font-medium text-center"
    >
      {children}
    </Link>
  );
};

export default ButtonLink2;
