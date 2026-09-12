import logo from '../assets/images/logo-text.png'
import HamBurger from '../assets/images/hamburger.png'
const Header = () => {
    
    return (
        <>
        <div className="border-b-2 border-gray-300 px-4 md:px-0">
    <div className="grid grid-cols-3 justify-between items-center px-6 py-4 gap-8 md:container md:mx-auto md:max-w-[90%] max-h-[80px] ">
        <div className="md:hidden">
     <img src={HamBurger} alt="Hamburger Logo" className="w-5 h-4 "/>
        </div>
        <div>
            <img src={logo} alt="DevStack Logo" className="w-18 h-8 "/>
        </div>

        <ul className="hidden md:flex gap-6 items-center text-[14px] font-medium ">
            <li><a href="/">Home</a></li>
            <li><a href="#">Technologies</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        
     <div className="flex gap-4 items-center text-[14px] font-medium justify-self-end">
        <button className="px-4 py-2">Sign In</button>
        <button className="w-23 h-10 bg-[#D91B7E] text-white px-5 py-2 rounded-[9999px]">Sign Up</button>
     </div>
     </div>
     </div>
        </>
    )
}

export default Header;