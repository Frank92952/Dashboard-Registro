import React from 'react';
import { useNavigate } from 'react-router';
import { useUserAuth } from '../../context/UserAuthContext';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext'; // Importa el contexto
import Header from './Header';

function Registro() {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  const { sidebarVisible, toggleSidebar } = useSidebar(); // Usa el estado del Sidebar desde el contexto

  return (
    <>
      <div className='flex '>
      
        {sidebarVisible ? (
          <Sidebar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
        ) : (
          <SidebarIcons />
        )}

        <div className=''>
          <Navar toggleSidebar={toggleSidebar} isSidebarIcons={!sidebarVisible} />

          <div className='bg-[#EEEDEC] h-full rounded-tl-3xl'>
            <div className='pt-10 pl-8 pr-4'>
              <Header />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
export default Registro