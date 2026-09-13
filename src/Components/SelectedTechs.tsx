import type { TechnologyType } from "../TechnologyType";
import Selecteditem from "./Selecteditem";

export interface selectedProps{
    selectedTechs: TechnologyType[]
}

const SelectedTechs = ({selectedTechs}:selectedProps) => {
    
    return (
<>
 <div className="w-[284px] max-h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-[15px] font-semibold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[12px] text-[#9aa9c2]">
         {selectedTechs.length === 0
            ? "No technologies selected yet."
            : `${selectedTechs.length} technologis selected`}
        </p>
      </div>

      <div className="mt-4  rounded-xl ">
        <p className="text-[12px] text-[#9aa9c2]">
         {
            selectedTechs.length===0?
            "Your stack is empty" : selectedTechs.map(selected=><div className="max-w-[100%]"><Selecteditem selecteditem={selected}/></div>)

         }
        </p>
      </div>
    </div>
</>
    )
}

export default SelectedTechs;