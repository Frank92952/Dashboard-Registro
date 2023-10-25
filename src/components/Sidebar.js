import React, { useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';
import { useActiveItem } from '../context/ActiveItemContext';
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

function Sidebar({ sidebarVisible }) {
  const location = useLocation();
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const { activeItem, setActiveItem } = useActiveItem();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <div
      className={`flex flex-col gap-28 pt-6 pl-6 text-[16px] max-sm:text-[13px] w-[260px] max-lg:w-[210px] max-sm:w-[137px] max-sm:pl-1 ${
        sidebarVisible ? 'block' : 'hidden'
      }`}
    >
      <div className="flex text-[#87318f] items-center pl-2 max-sm:flex-col max-sm:-ml-8">
        <RiEmotionHappyFill className="h-7 w-7" />
        <h1 className="ml-5 text-[20px] max-sm:text-[16px]">AdminCarmen</h1>
      </div>
      <div className="flex flex-col gap-4">
        <Link to="/home">
          <div className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/home' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
            <RiDashboardFill className="h-7 w-7" />
            <h1 className="ml-3">Dashboard</h1>
          </div>
        </Link>
        <Link to="/registro">
        <div className={`flex items-center pl-2 pt-1 pb-1 ${location.pathname.includes('/registro') ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
          <RiUserFill className="h-7 w-7" />
          <h1 className="ml-3">Empleados</h1>
        </div>
      </Link>
        <Link to="/mensaje">
          <div className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/mensaje' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
            <RiMessage3Fill className='h-7 w-7' />
            <h1 className='ml-3'>Mensaje</h1>
          </div>
        </Link>
        <Link to="/analizis">
          <div className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/analizis' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
            <RiPercentFill className='h-7 w-7' />
            <h1 className='ml-3'>Analizis</h1>
          </div>
        </Link>
        <Link to="/notificacion">
          <div className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/notificacion' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
            <RiNotification2Fill className='h-7 w-7' />
            <h1 className='ml-3'>Notificación</h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        <Link to="/configuracion">
          <div className={`flex pl-2 pt-2 pb-1 ${window.location.pathname === '/configuracion' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}>
            <RiSettings2Fill className="h-7 w-7" />
            <h1 className="ml-3">Configuración</h1>
          </div>
        </Link>
        <div className="flex hover:text-red-500 pl-2 " onClick={handleLogout}>
          <button><RiLogoutBoxRFill className="h-7 w-7" /></button>
          <button className="ml-3">Salir</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

