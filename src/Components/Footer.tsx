import logo from '../assets/images/logo-text.png'


export const Footer = () => {
    
    return (
    <>
   <footer className="border-t-2 border-[#F1F5F9]">
     
    <div className="grid grid-cols-4 gap-6 px-8 pt-16 pb-14 max-w-[90%] mx-auto container border-b-2 border-[#F1F5F9]">
<div className='flex flex-col gap-4'>
    <div>
        <img src={logo} alt="DevStack Logo" className="w-18 h-8 "/>
    </div>
    
    <p className="text-[12px] font-normal text-[#64748B]">Curated tools, technologies, and resources for developers building
modern software.</p>
<ul className="flex gap-6 items-center text-[14px] font-medium text-[#475569]">
    <li><a href="#" target="_blank" >Github</a></li>
    <li><a href="#" target="_blank" >Twitter</a></li>
    <li><a href="#" target="_blank" >LinkedIn</a></li>
</ul>
</div>

<div>
    <h4>Product</h4>
    <p>Home</p>
    <p>Technologies</p>
    <p>Projects</p>
</div>
<div>
    <h4>Company</h4>
    <p>About</p>
    <p>Contact</p>
    <p>Careers</p>
</div>
<div>
    <h4>Legal</h4>
    <p>Privacy Policy</p>
    <p>Terms of Service</p>
</div>


    </div>
    
    <div>
   
    </div>
    </footer> 
    </>
    )
}