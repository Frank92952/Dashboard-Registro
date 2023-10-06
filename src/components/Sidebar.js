import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import {
  RiEmotionHappyFill,
  RiDashboardFill,
  RiMessage3Fill,
  RiUserFill,
  RiPercentFill,
  RiNotification2Fill,
  RiSettings2Fill,
  RiLogoutBoxRFill,
} from 'react-icons/ri';

function Sidebar({  sidebarVisible }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  
  // Function to handle item click and update the activeItem state
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
       <div
      className={`flex flex-col gap-28 pt-6 pl-6  text-[16px] max-sm:text-[13px] w-[260px]  max-lg:w-[210px] max-sm:w-[137px] max-sm:pl-1  ${
        sidebarVisible ? 'block' : 'hidden'
      }`}
    >
        <div className='flex text-[#87318f] items-center pl-2 max-sm:flex-col max-sm:-ml-8 '>
          <RiEmotionHappyFill className='h-7 w-7' />
          <h1 className='ml-5 text-[20px] max-sm:text-[16px]  '>AdminCarmen</h1>
        </div>
        <div className='flex flex-col gap-4 '>
          <Link to="/home">
          <div
            className={`flex items-center pl-2 pt-1 pb-1 ${
              activeItem === 'Dashboard'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Dashboard')}
          >
            <RiDashboardFill className='h-7 w-7' />
            <h1 className='ml-3'>Dashboard</h1>
          </div>
          </Link>

          <Link to="/registro">
          <div
            className={`flex items-center pl-2 pt-1 pb-1 ${
              activeItem === 'Empleados'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Empleados')}
          >
            <RiUserFill className='h-7 w-7' />
            <h1 className='ml-3'>Empleados</h1>
          </div>
          </Link>

          <div
            className={`flex items-center pl-2 pt-1 pb-1  ${
              activeItem === 'Mensaje'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Mensaje')}
          >

            <RiMessage3Fill className='h-7 w-7' />
            <h1 className='ml-3'>Mensaje</h1>
          </div>
          <div
            className={`flex items-center pl-2 pt-1 pb-1 ${
              activeItem === 'Analizis'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Analizis')}
          >
            <RiPercentFill className='h-7 w-7' />
            <h1 className='ml-3'>Analizis</h1>
          </div>
          <div
            className={`flex items-center pl-2 pt-1 pb-1 ${
              activeItem === 'Notificación'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Notificación')}
          >
            <RiNotification2Fill className='h-7 w-7' />
            <h1 className='ml-3'>Notificación</h1>
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <div
            className={`flex pl-2 pt-2 pb-1  ${
              activeItem === 'Configuración'
                ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                : 'active:text-[#87318f]'
            }`}
            onClick={() => handleItemClick('Configuración')}
          >
            <RiSettings2Fill className='h-7 w-7' />
            <h1 className='ml-3'>Configuración</h1>
          </div>
          <div className='flex  hover:text-red-500 pl-2 ' onClick={handleLogout}>
            <button><RiLogoutBoxRFill className='h-7 w-7' /></button>
            <button className='ml-3'>Salir</button>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
