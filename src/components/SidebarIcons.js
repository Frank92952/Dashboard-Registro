import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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

function SidebarIcons() {
  const location = useLocation();
  const { pathname } = location;
  const { activeItem, setActiveItem } = useActiveItem(); // Usar el contexto

  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    setActiveItem(itemName); // Establecer el ítem activo en el contexto
  };

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
        className="flex flex-col gap-28 pt-6 pl-6 text-[16px] w-[80px] max-sm:pl-1 max-sm:w-[56px]"
      >
        <div className="flex text-[#87318f] items-center pl-2">
          <RiEmotionHappyFill className="h-7 w-7" />
        </div>
        <div className="flex flex-col gap-4">
          <Link to="/home">
            <div
              className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/home' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}
            >
              <RiDashboardFill className="h-7 w-7" />
            </div>
          </Link>
          <Link to="/registro">
            <div
              className={`flex items-center pl-2 pt-1 pb-1 ${window.location.pathname === '/registro' ? 'bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl text-[#87318f]' : ''}`}
            >
              <RiUserFill className="h-7 w-7" />
            </div>
          </Link>
          <Link to="/mensaje">
            <div
              className={`flex items-center pl-2 pt-1 pb-1 ${
                activeItem === 'Mensaje' && pathname === '/mensaje'
                  ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                  : ''
              }`}
              onClick={() => handleItemClick('Mensaje')}
            >
              <RiMessage3Fill className="h-7 w-7" />
            </div>
          </Link>
          <Link to="/analizis">
            <div
              className={`flex items-center pl-2 pt-1 pb-1 ${
                activeItem === 'Analizis' && pathname === '/analizis'
                  ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                  : ''
              }`}
              onClick={() => handleItemClick('Analizis')}
            >
              <RiPercentFill className="h-7 w-7" />
            </div>
          </Link>
          <Link to="/notificacion">
            <div
              className={`flex items-center pl-2 pt-1 pb-1 ${
                activeItem === 'Notificación' && pathname === '/notificacion'
                  ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                  : ''
              }`}
              onClick={() => handleItemClick('Notificación')}
            >
              <RiNotification2Fill className="h-7 w-7" />
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-6">
          <Link to="/configuracion">
            <div
              className={`flex pl-2 pt-2 pb-1 ${
                activeItem === 'Configuración' && pathname === '/configuracion'
                  ? 'text-[#87318f] bg-[#EEEDEC] border-t-4 border-b-4 border-l-4 rounded-bl-3xl rounded-tl-3xl'
                  : ''
              }`}
              onClick={() => handleItemClick('Configuración')}
            >
              <RiSettings2Fill className="h-7 w-7" />
            </div>
          </Link>
          <div className="flex hover:text-red-500 pl-2" onClick={handleLogout}>
            <button>
              <RiLogoutBoxRFill className="h-7 w-7" />
            </button>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default SidebarIcons;
