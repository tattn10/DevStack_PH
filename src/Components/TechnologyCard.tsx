import type { TechnologyType } from "../TechnologyType";

export interface TechnologyCardProps{
    technology: TechnologyType
}

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
    
    return (

        <>
        
          <div className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-4 shadow-sm  transition duration-300 ease-in-out hover:-translate-y-4">
      {/* Top section */}
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-10 w-10 object-contain"
          />
        </div>

        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-500">
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-4 text-lg font-bold text-gray-900">
        {technology.name}
      </h2>

      {/* Description */}
      <p className="mt-2 min-h-[60px] text-sm leading-5 text-gray-500">
        {technology.description}
      </p>

      {/* Divider */}
      <div className="my-3 border-t border-gray-100" />

      {/* Information */}
      <div className="flex items-center justify-between text-xs">
        <span className="rounded-md bg-gray-50 px-2 py-1 text-gray-500">
          {technology.category}
        </span>

        <span className="text-gray-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-medium text-gray-600">
          <span className="text-yellow-400">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        className="mt-4 w-full rounded-lg bg-[#080d1b] py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        Add to Stack
      </button>
    </div>
        
        
        </>
    )
}

export default TechnologyCard;