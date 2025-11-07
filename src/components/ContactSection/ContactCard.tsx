import React from "react";

interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
  link: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  icon,
  title,
  value,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center py-10 pb-0 cursor-pointer transition-transform duration-300 hover:scale-105"
    >
      <img src={icon} alt={title} className="md:w-15 w-12 h-auto mb-4" />
      <h3 className="text-[20px] md:text-2xl font-semibold leading-none text-center main-text mb-2">
        {title}
      </h3>
      <p className="text-md md:text-xl text-center">{value}</p>
    </a>
  );
};

export default ContactCard;
