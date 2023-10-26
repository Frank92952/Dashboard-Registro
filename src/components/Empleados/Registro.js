import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext'; // Importa el contexto
import Header from './Header';
import { fireDb } from '../../firebase'; // Asegúrate de importar 'fireDb' correctamente desde tu configuración de Firebase
import { ref, onValue, remove } from 'firebase/database';
import {Link} from 'react-router-dom';
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from 'react-toastify';

function Registro() {
  const [data, setData] = useState({});
  const { sidebarVisible, toggleSidebar } = useSidebar(); // Usa el estado del Sidebar desde el contexto

  useEffect(() => {
    const contactsRef = ref(fireDb, 'contacts'); // 'contacts' debe ser la ubicación de tus datos en Firebase
    const unsubscribe = onValue(contactsRef, (snapshot) => {
      if (snapshot.exists()) {
        setData(snapshot.val());
      } else {
        setData({});
      }
    });

    // Al limpiar el efecto, cancela la suscripción para evitar fugas de memoria
    return () => {
      unsubscribe();
    };
  }, []);
  const onDelete = (id) => {
    if (window.confirm("¿Estás seguro que quieres eliminar?")) {
      const contactRef = ref(fireDb, `contacts/${id}`);
      
      remove(contactRef)
        .then(() => {
          toast.success("Eliminado correctamente");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };
  return (
    <>
      <div className='flex'>
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
              <div className='flex justify-center mt-4 '>
                <table className=' border-t-4 w-full border-[#87318f] border-b-4  '>
                  <thead className='  '>
                    <tr className='bg-[#87318f] '>
                      <th   >No.</th>
                      <th >Name</th>
                      <th >Email</th>
                      <th >Contact</th>
                      <th>Action</th>
                      
                    </tr>
                    
                  </thead>
                  <tbody className='pt-2'>
                    {Object.keys(data).map((id, index) => {
                      return (
                        
                        <tr key={id} className='text-center  '>
                          <th className='pb-3 ' scope='row'>{index + 1}</th>
                          <td className='pb-3'>{data[id].name}</td>
                          <td className='pb-3'>{data[id].email}</td>
                          <td className='pb-3'>{data[id].contact}</td>
                          <td className='flex justify-between pb-3 pl-2 pr-2'>
                            <Link to={`/registro/update/${id}`}>
                              <button className=''><MdEdit className='text-green-700 h-6 w-6'/></button>
                            </Link>
                            <button onClick={() => onDelete(id)}><MdDelete className='h-6 w-6 text-red-600' /></button>
                            
                            <Link to={`/registro/view/${id}`}>
                              <button className='bg-blue-500 pl-2 pr-2 border-2 rounded-sm hover:bg-[#EEEDEC] hover:border-blue-500 '>View</button>
                            </Link>
                          </td>
                        </tr>
                        
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registro;
