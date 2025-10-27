import React from "react";
import { team } from "../../lib/aboutLib";
import { aboutAssets } from "../../assets/aboutAssets";

const Team: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-14">
          <h2 className="main-text font-medium text-4xl md:text-5xl leading-tight mb-6">
            The People Who Power Tarmac
          </h2>
          <p className="sub-text font-normal leading-relaxed text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Every successful project starts with a team that cares. At Tarmac,
            our crew is a blend of designers, developers, strategists, and
            storytellers all united by one mission: to build products that
            matter.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {team.map((member, i) => (
            <div key={i} className="flex flex-col items-start">
              {/* Frame */}
              <div className="rounded-[20px] border-2 border-[#00ffff] w-full">
                <div className="rounded-[20px] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full p-2 object-cover rounded-[20px]"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center w-full mt-4">
                <div>
                  <h3 className="text-2xl font-medium main-text">
                    {member.name}
                  </h3>
                  <p className="text-base sub-text italic">{member.role}</p>
                </div>
                <a>
                  <img
                    src={aboutAssets.Arrow}
                    alt=""
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
