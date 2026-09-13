import type { TechnologyType } from "../TechnologyType";
import { use, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import SelectedTechs from "./SelectedTechs";

export interface TechnologiesProps {
  TechnologiesProp: Promise<TechnologyType[]>;
}

const TechnologiesSection = ({ TechnologiesProp }: TechnologiesProps) => {
  const technologies = use(TechnologiesProp);
  const [selectedTechs, setSelectedTechs] = useState<TechnologyType[]>([]);

  return (
    <>
      <main className="py-12 md:container md:mx-auto md:max-w-[90%]">
        <div className="pb-10">
          <h1 className="text-[2.25em] font-extrabold font-[Inter] text-center md:text-start" >Explore the <span className="bg-gradient-to-r from-[#EC4899]  to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h1>
          <p className="text-[#64748B] text-[14px] text-center md:text-start">Pick one technology per category to build your ideal stack.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:col-span-3">
            {technologies.map((technology) => (
              <TechnologyCard key={technology.id} technology={technology} setSelectedTechs={setSelectedTechs} />
            ))}
          </div>
          <div className="md:col-span-1 flex justify-center">
            <SelectedTechs selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs} />
          </div>
        </div>
      </main>
    </>
  );
};

export default TechnologiesSection;