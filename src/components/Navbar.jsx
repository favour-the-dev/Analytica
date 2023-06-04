import {FiMenu} from 'react-icons/fi';
import { useState } from 'react';
import {IoCloseOutline} from 'react-icons/io5';
import {SiGoogleanalytics} from 'react-icons/si';
import { NavLink } from "react-router-dom";
import {BsChat, BsCreditCard2Back} from 'react-icons/bs';
import {RiHome2Fill, RiHomeLine} from 'react-icons/ri';
import {MdOutlinePerson} from 'react-icons/md';
import {VscNewFolder} from 'react-icons/vsc';
import {GiSettingsKnobs} from 'react-icons/gi';
function Navabr() {
    const [open, setOpen] = useState(false);
    return (  
        <>
            <div className={`bg-main w-full h-full text-gray-300 lg:w-1/5 fixed top-0 lg:left-0 ${open? 'left-0 right-0' : 'left-[-80%] sm:left-[-90%]'} duration-500 ease-in-out lg:duration-0 flex flex-col p-6 justify-between`}>
               <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-white text-main w-fit rounded-lg p-1 text-2xl'> <RiHome2Fill /></div>
                        <div className='font-bold text-2xl'>Analytica</div>
                    </div>
                    <div className='lg:hidden text-gray-300 font-bold text-2xl' onClick={()=> setOpen(!open)}>
                        {!open? <FiMenu /> : <IoCloseOutline />}
                    </div>
               </div>
               <div className={`flex flex-col w-2/3 mx-auto lg:w-fit h-2/3 md:self-center gap-4 lg:gap-4 xl:gap-1`} onClick={()=> setOpen(!open)}>
                    <NavLink to='/Home' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><RiHomeLine /></div>  Home    
                    </NavLink>
                    <NavLink to='/Visitors' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><MdOutlinePerson /></div>  Visitors    
                    </NavLink>      
                    <NavLink to='/Analytics' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><SiGoogleanalytics /></div>  Analytics   
                    </NavLink>  
                    <NavLink to='/Customerservice' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-1 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><BsChat /></div>  Customer Service    
                    </NavLink>  
                    <NavLink to='/Reports' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><VscNewFolder /></div>  Reports    
                    </NavLink>  
                    <NavLink to='/Billing' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><BsCreditCard2Back/></div>  Billing    
                    </NavLink>  
                    <NavLink to='/Settings' className={`flex items-center gap-2 hover:bg-[#343A40] p-2 lg:p-2 xl:p-4 rounded-md`}>
                        <div className='hover:text-green-500'><GiSettingsKnobs /></div>  Settings    
                    </NavLink>  
               </div>
               <div className={`flex gap-2 items-center pt-4 border-t-2 border-gray-300 lg:border-opacity-25 ${open? 'border-opacity-25' : 'border-opacity-0'}`}>
                    <div className="bg-gray-200 w-10 rounded-full h-10">

                    </div>
                    <div>
                        <h2>user name</h2>
                        <h3>User email</h3>
                    </div>
               </div>
            </div>
        </>
    );
}

export default Navabr;