

const SelectedTechs = () => {
    
    return (
<>
 <div className="w-[284px] h-[172px] rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-[15px] font-semibold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[12px] text-[#9aa9c2]">
          No technologies selected yet.
        </p>
      </div>

      <div className="mt-4 flex h-[67px] items-center justify-center rounded-xl border border-dashed border-[#d9e2ef]">
        <p className="text-[12px] text-[#9aa9c2]">
          Your stack is empty.
        </p>
      </div>
    </div>
</>
    )
}

export default SelectedTechs;