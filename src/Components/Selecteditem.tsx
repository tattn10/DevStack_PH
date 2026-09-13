import type { TechnologyType } from "../TechnologyType";
import close from '../assets/images/close.png'
export interface SelecteditemProps {
    selecteditem: TechnologyType
}

const Selecteditem = ({ selecteditem }: SelecteditemProps) => {

    return (
        <>
            <div className="flex justify-between items-center px-4 py-2 border-2 border-slate-200 rounded-xl mb-2">
                <div className="flex gap-2 justify-start">
                    <div>
                        <img src={selecteditem.icon} alt={selecteditem.description} className="h-8 w-8" />
                    </div>
                    <div>
                        <h3 className="font-bold text-black">{selecteditem.name}</h3>
                        <p className="text-[10px]">{selecteditem.category}</p>
                    </div>
                </div>


                <div>
                    <img src={close} alt="remove sign" className="w-3 h-3" />
                </div>
            </div>
        </>
    )
}

export default Selecteditem;