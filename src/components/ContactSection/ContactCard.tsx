import React from "react";

interface ContactCardProps {
  icon: string;
  title: string;
  value: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={icon} alt={title} className="w-[60px] h-auto mb-4" />
      <h3 className="text-2xl font-bold leading-none text-center bg-gradient-to-b from-[#F6F4F4] to-[#585858] bg-clip-text text-transparent mb-2">
        {title}
      </h3>
      <p className="text-sm">{value}</p>
    </div>
  );
};

export default ContactCard;
