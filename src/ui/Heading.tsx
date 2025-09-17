import React from "react";

interface HeadingProps {
  title: string | React.ReactNode;
}
const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="main-text font-medium text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
      {title}
    </h2>
  );
};

export default Heading;
