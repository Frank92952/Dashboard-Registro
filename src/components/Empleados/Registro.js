import React from 'react';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext'; // Importa el contexto
import Header from './Header';

function Registro() {


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