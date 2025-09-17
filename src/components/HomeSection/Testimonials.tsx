import React from "react";
import { testimonials } from "../../lib/HomeLib";
import SectionHeader from "../../ui/SectionHeader";
import Heading from "../../ui/Heading";

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-black text-white px-4 sm:px-6 md:px-10 py-40">
      <div className="max-w-7xl mx-auto text-center">
        <SectionHeader title="Testimonials/founders quotes" />

        <Heading title="What Founders are saying" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-justify">
          {testimonials.map((t) => (
            <div key={t.id} className="box-back  p-6 ">
              {/* Profile */}
              <div className="flex gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover "
                />
                <div>
                  <h4 className="font-bold sub-text md:text-base text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-[#979797] italic ">{t.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="sub-text md:text-sm text-xs leading-relaxed">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
