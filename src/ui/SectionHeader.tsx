import React from "react";
import { assets } from "../assets/homeAssets"; // adjust path

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center justify-center gap-2 mb-5">
      <img src={assets.textLogo} alt="Logo" className="h-3 w-auto" />
      <h3 className="uppercase cyan-text md:text-base text-sm font-bold">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeader;
