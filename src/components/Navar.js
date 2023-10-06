import React from 'react';
import Perfil from '../img/Pefil.jpeg'
import {
    RiMenuFill,RiSearchEyeFill,RiNotification4Fill,
  } from 'react-icons/ri';

  function Navar({ toggleSidebar, isSidebarIcons }) {
    
    return (
      <div className={`flex  justify-between pt-6 pb-4 w-full ${isSidebarIcons ? 'gap-[490px] xl:gap-[887px] max-lg:gap-[320px] max-sm:gap-[80px] max-sm:pr-1  your-styles-for-SidebarIcons' : 'gap-[308px]  xl:gap-[707px] max-lg:gap-[190px] max-sm:gap-[0px] max-sm:pr-2 your-styles-for-Sidebar'}`}>
        <div  className='pl-7 flex gap-10 max-lg:gap-5 max-sm:flex-col max-sm:gap-4'>
          <div>
            <RiMenuFill className='h-7 w-7 '  onClick={toggleSidebar} />
          </div>  
          <div className='relative  '>
            <RiSearchEyeFill className='absolute h-7 w-7 p-1 text-white bg-[#87318f] ml-[360px] max-lg:ml-[228px] max-sm:ml-[142
                px] rounded-br-lg  rounded-tr-lg'/>
            <input
              type='text'
              className='bg-[#EEEDEC] py-2 pl-2 h-7  w-96 max-lg:w-64 max-sm:w-full rounded-lg text-black outline-none placeholder:text-black'
              placeholder='Buscador'
            />
          </div>
        </div>
        <div className='flex gap-4   max-sm:gap-1 '>
          <div>
            <RiNotification4Fill className='w-7 h-7' />
          </div>
          <div>
            <img src={Perfil} className='h-7 w-7 rounded-full ' />
          </div>
          <div className='max-sm:hidden'>

          </div>
        </div>
        
      </div>
    )
  }
  
  export default Navar