import React from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  to: string;
  children: React.ReactNode;
}

const ButtonLink2: React.FC<ButtonLinkProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="border-2 cyan-back text-black px-12 md:px-18 py-3 md:py-3 rounded-full text-base md:text-lg lg:text-xl font-medium text-center"
    >
      {children}
    </Link>
  );
};

export default ButtonLink2;
