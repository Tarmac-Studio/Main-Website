import React from "react";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";
import EmailIcon from "../../assets/icons/Email.svg";
import PhoneIcon from "../../assets/icons/Phone.svg";
import WhatsappIcon from "../../assets/icons/Whatsapp.svg";
import ContactCard from "./ContactCard";

const ContactLaunch: React.FC = () => {
  return (
    <section className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto text-center items-center">
        {/* Label */}
        <SectionHeader title="CONTACT US" />
        <Heading
          title={
            <>
              Ready to Launch Your Next Big
              <br /> Idea?
            </>
          }
        />
        <p className="sub-text text-lg md:text-xl lg:text-[1.2rem] mb-7 max-w-9xl mx-auto">
          Let’s talk about your goals and how Tarmac can help bring them to life.
          Whether it’s branding, product design, development, SEO,
          or social media — we’re here to make it happen.
        </p>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 md:p-10">
          <ContactCard 
            icon={EmailIcon} 
            title="Email Address" 
            value="tarmacdigitalstudio@gmail.com" 
          />
          <ContactCard 
            icon={PhoneIcon} 
            title="Phone Number" 
            value="+234 708 951 3359" 
          />
          <ContactCard 
            icon={WhatsappIcon} 
            title="WhatsApp" 
            value="+234 708 951 3359" 
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLaunch;
