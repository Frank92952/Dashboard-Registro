import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import { useUserAuth } from '../../context/UserAuthContext';
import Doctor from "../../img/Doctor.jpg"
import Logo from "../../img/logoHospital.png"

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signUp } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Limpia el estado de error antes de realizar la acción
    
        try {
          await signUp(email, password);
          navigate("/");
        } catch (err) {
          setError(err.message); // Actualiza el estado de error en caso de error
        }
      };
    
      return (
        <>
        <div >
            <img src={Doctor} className="w-full h-full object-cover absolute top-0 left-0"  />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col  justify-center items-center ">
                <div className='grid grid-cols-2 max-sm:grid-cols-1 '>
                    <div className='flex flex-col gap-5 bg-blue-100 bg-opacity-70  p-6 '>
                        <div className='text-[24px] text-center font-serif  text-[#87318f] '>
                        <h1>Bienvenido al Hospital</h1>
                        <h1 className='-mt-2 font-bold'> El Carmen</h1>
                        </div>
                        {error && <p className='text-red-500'>{error}</p>}
                        <form onSubmit={handleSubmit} className='flex flex-col gap-4 font-serif '>
                            <label htmlFor='email' className='font-bold text-[#87318f] '>Correo Electrónico</label>
                            <input type='email' placeholder='Ingresar Email' id="email" className=" border-b-2 bg-transparent outline-none text-black placeholder:text-slate-500  border-[#87318f] w-full" onChange={(e) => setEmail(e.target.value)}/>
                            <label htmlFor='password' className='font-bold text-[#87318f]'>Contraseña</label>
                            <input type='password' placeholder='Ingresar Password' id="password" className=" border-b-2 bg-transparent outline-none text-black placeholder:text-slate-500  border-[#87318f] w-full" onChange={(e) => setPassword(e.target.value)} />
                            <div className='grid grid-cols-2 gap-4 mt-4 ml-1'>  
                                <Link to="/"><button className='bg-white border-2 border-[#87318f] text-[#87318f] text-[20px] p-2' >Iniciar Sesión</button></Link> 
                                <button className='bg-[#87318f] text-white text-[20px] p-2' >Crear Cuenta</button>
                            </div>
                            
                        </form>
                    </div>
                    <div className='p-2 flex flex-col justify-center bg-blue-300 bg-opacity-70 max-sm:hidden '>
                        <img src={Logo}  />
                    </div>
                </div>

            </div> 
        </div>
    </>
      );
    }
    
    export default Signup;