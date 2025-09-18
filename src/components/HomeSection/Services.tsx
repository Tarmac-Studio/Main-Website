import React from "react";
import { homeServices } from "../../lib/HomeLib";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";
import ButtonLink1 from "../../ui/ButtonLink1";
import ButtonLink2 from "../../ui/ButtonLink2";

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="border border-[#585858] md:px-8 md:py-20 px-8 py-10 rounded-2xl">
      <h3 className="md:text-[36px] text-[26px] md:px-10 px-4 font-medium main-text mb-4 text-center">
        {title}
      </h3>
      <p className="sub-text text-base text-center">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-black">
      <div className="max-w-6xl mx-auto  text-center items-center">
        {/* Header */}
        <SectionHeader title="our services" />
        <Heading title="What we do" />
        <p className="sub-text md:text-xl text-base mb-7">
          At Tarmac Digital Studio, we don’t just provide services—we deliver
          transformative digital solutions. Whether you're a startup building
          from scratch or a growing business looking to scale, our expert team
          helps you launch, grow, and thrive in today’s fast-paced digital
          world.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 ">
          {/* First 4 services in 2x2 grid */}
          {homeServices.slice(0, 4).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Last service centered */}
        <div className="flex justify-center mb-16">
          <div className="w-full md:w-1/2 lg:w-1/2">
            <ServiceCard
              title={homeServices[4].title}
              description={homeServices[4].description}
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto">
          <Heading title=" Let's Build Something Incredible" />

          <p className="sub-text md:text-xl text-base mb-5">
            Whether you need a full-stack team or a specialist to fill the gap,
            we’re ready to collaborate and bring your ideas to life.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink1 to="/contact-us#contact">
            Book a strategy call
          </ButtonLink1>

          <ButtonLink2 to="/contact-us#contact">See our works</ButtonLink2>
        </div>
      </div>
    </section>
  );
};

export default Services;
