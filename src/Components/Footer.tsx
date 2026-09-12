import logo from '../assets/images/logo-text.png'


export const Footer = () => {
    
    return (
    <>
   <footer className="border-t-2 border-[#F1F5F9] grid grid-cols-1">
     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-8 pt-16 pb-14 max-w-[90%] mx-auto container border-b-2 border-[#F1F5F9]">
<div className='flex flex-col gap-4 justify-center items-center md:justify-start md:items-start'>
    <div>
        <img src={logo} alt="DevStack Logo" className="w-18 h-8 "/>
    </div>
    
    <p className="text-[12px] font-normal text-[#64748B] text-center md:text-start">Curated tools, technologies, and resources for developers building
modern software.</p>
<ul className="flex gap-6 items-center text-[14px] font-medium text-[#475569]">
    <li><a href="#" target="_blank" >Github</a></li>
    <li><a href="#" target="_blank" >Twitter</a></li>
    <li><a href="#" target="_blank" >LinkedIn</a></li>
</ul>
</div>


<div className="hidden md:grid md:grid-cols-3">
<div>
    <h4>Product</h4>
    <p><a href='#'>Home</a></p>
    <p><a href='#'>Technologies</a></p>
    <p><a href='#'>Projects</a></p>
</div>
<div>
    <h4>Company</h4>
    <p><a href='#'>About</a></p>
    <p><a href="#">Contact</a></p>
    <p><a href='#'>Careers</a></p>
</div>
<div>
    <h4>Legal</h4>
    <p><a href="#">Privacy Policy</a></p>
    <p><a href="#">Terms of Service</a></p>
</div>
</div>

    </div>
    
    <div className="flex justify-between items-center max-w-[90%] mx-auto container pt-10 pb-12">
     <p>© 2026 Dev Stack. All rights reserved.</p>
     <div className="flex justify-between items-center gap-2">
<p>Privacy</p>
<p>Terms</p>
     </div>
     
    </div>
    </footer> 
    </>
    )
}