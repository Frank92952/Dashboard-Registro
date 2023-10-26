import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext'; // Importa el contexto
import Header from './Header';
import { fireDb } from '../../firebase'; // Asegúrate de importar 'fireDb' correctamente desde tu configuración de Firebase
import { ref, onValue, off } from 'firebase/database';
import {Link,  useParams} from 'react-router-dom';


function View() {
  const { sidebarVisible, toggleSidebar } = useSidebar(); // Usa el estado del Sidebar desde el contexto

  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const contactRef = ref(fireDb, `contacts/${id}`);
  
    onValue(contactRef, (snapshot) => {
      if (snapshot.exists()) {
        setUser(snapshot.val());
      } else {
        setUser({});
      }
    });
  
    return () => {
      // Detener la escucha de cambios cuando se desmonte el componente
      off(contactRef);
    };
  }, [id]);
  console.log("user",user);
  return (
    <>
      <div className='flex  '>
        {sidebarVisible ? (
          <Sidebar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
        ) : (
          <SidebarIcons />
        )}

        <div className=''>
          <Navar toggleSidebar={toggleSidebar} isSidebarIcons={!sidebarVisible} />

          <div className='bg-[#EEEDEC] h-full rounded-tl-3xl  '>
            <div className='pt-10 pl-8 pr-4'>
              <Header />
             
              <div className='border-2 border-[#87318f] bg-[#87318f] mt-5 w-96 flex justify-center m-auto text-xl pt-2 pb-2'>
              <p className='text-2xl font-bold text-white' >Detalles Del Empleado</p>
                </div>
                <div className='border-2 border-[#87318f]   w-96 flex justify-center m-auto text-xl pt-2 pb-2 ' >
                    <div className='flex flex-col gap-2'>
                      <div>
                        <strong>ID: </strong>
                        <span>{id}</span>
                      </div>
                      <div >
                        <strong>Name: </strong>
                        <span>{user.name}</span>
                      </div>
                      <div>
                        <strong>Email: </strong>
                        <span>{user.email}</span>
                      </div>
                      <div>
                        <strong>Contact: </strong>
                        <span>{user.contact}</span>
                      </div>
                      <div className='text-center  w-32 m-auto rounded-sm bg-red-600 text-white font-bold'>
                        <Link   to="/registro">
                          <button  >Back</button>
                        </Link>
                      </div>

                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View