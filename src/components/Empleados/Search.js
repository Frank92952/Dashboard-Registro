import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext';
import Header from './Header';
import { fireDb } from '../../firebase'; // Asegúrate de importar 'fireDb' correctamente desde tu configuración de Firebase
import { useLocation, Link } from 'react-router-dom';
import { onValue, ref, query, orderByChild, equalTo, remove } from 'firebase/database';
import { MdDelete, MdEdit } from "react-icons/md";
import { toast } from 'react-toastify';

function Search() {
  const { sidebarVisible, toggleSidebar } = useSidebar();
  const [data, setData] = useState({});
  const location = useLocation();
  const search = new URLSearchParams(location.search).get("name");

  useEffect(() => {
    if (search) {
      searchData();
    }
  }, [search]);

  const searchData = () => {
    if (!search) {
      // Evita la búsqueda si 'search' está vacío
      setData({});
      return;
    }

    const dbRef = ref(fireDb, 'contacts');
    const contactQuery = query(dbRef, orderByChild('name'), equalTo(search));

    onValue(contactQuery, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setData(data);
      } else {
        setData({});
      }
    });
  };

  const onDelete = (id) => {
    if (window.confirm("¿Estás seguro que quieres eliminar?")) {
      const contactRef = ref(fireDb, `contacts/${id}`);

      remove(contactRef)
        .then(() => {
          toast.success("Eliminado correctamente");
          // Después de eliminar, puedes actualizar la vista o recargar los datos
          // Por ejemplo, puedes volver a cargar los datos llamando a searchData() aquí
          searchData();
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  };

  return (
    <div className='flex'>
      {sidebarVisible ? (
        <Sidebar toggleSidebar={toggleSidebar} sidebarVisible={sidebarVisible} />
      ) : (
        <SidebarIcons />
      )}

      <div>
        <Navar toggleSidebar={toggleSidebar} isSidebarIcons={!sidebarVisible} />

        <div className='bg-[#EEEDEC] h-full rounded-tl-3xl'>
          <div className='pt-10 pl-8 pr-4'>
            <Header />
            <div className='flex justify-center mt-4'>
              {Object.keys(data).length > 0 ? (
                <table className='border-t-4 w-full border-[#87318f] border-b-4'>
                  <thead>
                    <tr className='bg-[#87318f]'>
                      <th>No.</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className='pt-2'>
                    {Object.keys(data).map((id, index) => (
                      <tr key={id} className='text-center'>
                        <th className='pb-3' scope='row'>{index + 1}</th>
                        <td className='pb-3'>{data[id].name}</td>
                        <td className='pb-3'>{data[id].email}</td>
                        <td className='pb-3'>{data[id].contact}</td>
                        <td className='flex justify-between pb-3 pl-2 pr-2'>
                          <Link to={`/registro/update/${id}`}>
                            <button className=''><MdEdit className='text-green-700 h-6 w-6' /></button>
                          </Link>
                          <button onClick={() => onDelete(id)}><MdDelete className='h-6 w-6 text-red-500' /></button>
                          <Link to={`/registro/view/${id}`}>
                            <button className='bg-blue-500 pl-2 pr-2 border-2 rounded-sm hover:bg-[#EEEDEC] hover:border-blue-500 '>View</button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No se encontraron resultados para la búsqueda.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
