import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { ref, push } from 'firebase/database';
import Sidebar from '../Sidebar';
import Navar from '../Navar';
import SidebarIcons from '../SidebarIcons';
import { useSidebar } from '../../context/SidebarContext'; // Importa el contexto
import Header from './Header';
import { fireDb }from '../../firebase';
import { toast } from 'react-toastify';

const initialState = {
  name: "",
  email: "",
  contact: "",
};

function AddEdit() {
  const { sidebarVisible, toggleSidebar } = useSidebar(); // Usa el estado del Sidebar desde el contexto
  const [state, setState] = useState(initialState);
  const [data,setData] = useState({});
  const {name, email, contact } = state;

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const {name,value} = e.target;
    setState({ ...state, [name]:value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Por favor proporcione valor en cada campo de entrada");
    } else {
      const contactsRef = ref(fireDb, "contacts");
      push(contactsRef, state, (err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Empleado Añadido Correctamente");
          setTimeout(() => {
            
          }, 1000); // 1000 ms (1 segundo) de retraso
        }
      });navigate("/registro"); // Redirección después de un breve retraso
    }
  };
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
              <div className='mt-3'>
                <form onSubmit={handleSubmit}  className='flex flex-col gap-2 m-auto p-[15px] max-w-[500px]  text-center ' >  
                  <label className='text-xl' htmlFor='name'>Name</label>
                  <input
                  className='pt-1 pb-1 pl-4 outline-none border-2 rounded-md border-[#87318f] bg-[#EEEDEC]' 
                  type='text'
                  id='name'
                  name='name'
                  placeholder='Your Name...'
                  value={name}
                  onChange={handleInputChange} 
                   />
                  <label className='text-xl' htmlFor='email'>Email</label>
                  <input 
                  className='pt-1 pb-1 pl-4 outline-none border-2 rounded-md border-[#87318f] bg-[#EEEDEC] ' 
                  type='email'
                  id='email'
                  name='email'
                  placeholder='Your Email...'
                  value={email}
                  onChange={handleInputChange} 
                   />
                  <label className='text-xl' htmlFor='contact'>Contact</label>
                  <input 
                  className='pt-1 pb-1 pl-4 outline-none border-2 rounded-md border-[#87318f] bg-[#EEEDEC] ' 
                  type='number'
                  id='contact'
                  name='contact'
                  placeholder='Your Contact No. ...'
                  value={contact}
                  onChange={handleInputChange} 
                   /> 
                   <input className='bg-[#87318f] mt-4 pt-1 pb-1 rounded-md text-xl border-2 text-white hover:bg-white hover:text-[#87318f] hover:border-[#87318f]' type='submit' value="Save" />                                  
                </form>
            
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddEdit