import bannerImage from '../assets/images/banner-stack.png'



const Banner = () => {
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center md:container md:mx-auto md:max-w-[90%] py-10 px-2 ">

         <div className="flex flex-col gap-6 justify-center items-center md:items-start">
         <h2 className="font-[Inter] text-6xl font-extrabold text-center md:text-left">Build Your Ideal <br/> <span className="font-[Inter] bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent ">Development Stack</span></h2>
         <p className='text-center md:text-left'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
    <div className="font-[Inter] text-[14px] flex gap-4 mt-6">
    <button className="bg-gradient-to-r from-[#FF5722]  to-[#EC4899] px-4 py-3 text-white rounded-[8px] ">Explore Technologies</button>
    <button className="border border-[#E5E7EB] rounded-[8px] px-4 py-3 ">Learn More</button>
     </div>
         </div>

         <div className="">
     <img src={bannerImage} alt="Banner" />
         </div>

        </div>
        
        
        </>
    )
}

export default Banner;