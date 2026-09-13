import { type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../TechnologyType";
import Selecteditem from "./Selecteditem";

export interface selectedProps {
    selectedTechs: TechnologyType[]
    setSelectedTechs: Dispatch<SetStateAction<TechnologyType[]>>
}

const SelectedTechs = ({ selectedTechs, setSelectedTechs }: selectedProps) => {


  const handleRemoveAllButton = ()=>{
setSelectedTechs([]);
  }
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
                            selectedTechs.length === 0 ?
                                "Your stack is empty" : selectedTechs.map(selected => <div className="max-w-[100%]" key={selected.id}>
                                    <Selecteditem selecteditem={selected} selectedTechs={selectedTechs} setSelectedTechs={setSelectedTechs}/>
                                </div>)
                        }
                    </p>
                </div>


           {
        selectedTechs.length===0
           ?"":<div>
                    <button onClick={handleRemoveAllButton} className="font-semibold text-[14px] text-[#D82C20] text-center border-2 border-[#ED8C85] rounded-[8px] px-20 py-2 mt-8 hover:text-white hover:bg-[#D82C20]">Remove All</button>
                </div>
                }
            </div>
        </>
    )
}

export default SelectedTechs;