import React from "react";
import CotExperienceCard from "./CotExperienceCard";
import CgiExperienceCard from "./CgiExperienceCard";
import MemsetExperienceCard from "./MemsetExperienceCard";
import CollerCapitalExperienceCard from "./CollerCapitalExperienceCard";
import FederatedHermesExperienceCard from "./FederatedHermesExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className="flex flex-col relative max-w-3xl px-6 sm:px-10 mx-auto items-center py-20 sm:py-28">
      <h3 className="uppercase tracking-[20px] text-accent-400 text-2xl mb-10">
        Experience
      </h3>
      <div className="w-full flex flex-col space-y-6">
        <CollerCapitalExperienceCard />
        <FederatedHermesExperienceCard />
        <CotExperienceCard />
        <CgiExperienceCard />
        <MemsetExperienceCard />
      </div>
    </div>
  );
}

export default WorkExperience;
