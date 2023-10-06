import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Navar from './Navar';
import SidebarIcons from './SidebarIcons';

function Registro() {
    const [sidebarVisible, setSidebarVisible] = useState(true);

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible);
    };
  return (
    <>
      
    {/* <div className="p-4 box mt-3 text-center">
      Hello Welcome <br />
      {user && user.email}
    </div>
    <div className="d-grid gap-2">
      <button onClick={handleLogout}>
        Log out
      </button>
      
    </div> */}
    <div className='flex '>
      {sidebarVisible ? (
        <Sidebar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      ) : (
        <SidebarIcons />
      )}

      <div className=''>
        <Navar toggleSidebar={toggleSidebar} isSidebarIcons={!sidebarVisible} />

        <div className='bg-[#EEEDEC] h-full rounded-tl-3xl'>
          <div className='p-10'>
            Registro
            
           
          </div>
        </div>
      </div>
    </div>
      
  </>
  )
}

export default Registro