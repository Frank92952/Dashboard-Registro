import React from 'react';
import Perfil from '../img/Pefil.jpeg'
import {
    RiMenuFill,RiSearchEyeFill,RiNotification4Fill,
  } from 'react-icons/ri';

  function Navar({ toggleSidebar, isSidebarIcons }) {
    
    return (
      <div className={`flex  justify-between pt-6 pb-4 w-full ${isSidebarIcons ? 'gap-[490px] your-styles-for-SidebarIcons' : 'gap-[308px] your-styles-for-Sidebar'}`}>
        <div  className='pl-7 flex gap-10'>
          <div>
            <RiMenuFill className='h-7 w-7 '  onClick={toggleSidebar} />
          </div>  
          <div className='relative'>
            <RiSearchEyeFill className='absolute h-7 w-7 p-1 text-white bg-[#87318f] ml-[360px] rounded-br-lg  rounded-tr-lg'/>
            <input
              type='text'
              className='bg-[#EEEDEC] py-2 pl-2 h-7 w-96 rounded-lg text-black outline-none placeholder:text-black'
              placeholder='Buscador'
            />
          </div>
        </div>
        <div className='flex gap-4 '>
          <div>
            <RiNotification4Fill className='w-7 h-7' />
          </div>
          <div>
            <img src={Perfil} className='h-7 w-7 rounded-full ' />
          </div>
          <div>

          </div>
        </div>
        
      </div>
    )
  }
  
  export default Navar