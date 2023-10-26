import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoCaretBackOutline } from "react-icons/io5";
import {RiSearchEyeFill} from 'react-icons/ri';
function Header() {
  const [activeTab, setActiveTab] = useState("Registro");
  const location = useLocation();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/registro/add") {
      setActiveTab("AddContact");
    } else if (location.pathname.includes("/registro/update/")) {
      setActiveTab("Editar");
    } else if (location.pathname.includes("/registro/view/")) {
      setActiveTab("View");
    } else if (location.pathname.includes("/registro/search")) {
      setActiveTab("Search");
    } else {
      setActiveTab("Registro");
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    navigate(`/registro/search?name=${search}`);
    setSearch("");
  }

  return (
    <div className='flex justify-between'>
      <p className='text-[#87318f] text-[25px]'>App Registro</p>
      
      <div className='flex gap-3'>

        <div>
          {activeTab === "AddContact" || activeTab === "Editar" || activeTab === "View" || activeTab === "Search" ? (
            <Link to="/registro">
              <p
                className={`text-[#87318f] text-center border-2 border-[#87318f]  hover:bg-[#87318f] hover:text-white`}
                onClick={() => setActiveTab("Registro")}
              >
                <IoCaretBackOutline className='h-9 w-9' />
              </p>
            </Link>
          ) : (
            <Link to="/registro/add">
              <p
                className={`border-2 border-[#87318f] pl-2 pr-2 text-[#87318f] font-bold rounded-[8px] hover:bg-[#87318f] hover:text-white`}
                onClick={() => setActiveTab("AddContact")}
              >
                añadir
              </p>
            </Link>
          )}
        </div>
        <div className='relative'>
        <RiSearchEyeFill className='absolute h-7 w-7 p-1 text-white bg-[#87318f] ml-[211px] max-lg:ml-[228px] max-sm:ml-[142
                px] rounded-br-lg  rounded-tr-lg'/>
        {activeTab === "Registro" && (
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              className=' py-2 pl-2 h-7  w-60 max-lg:w-64 max-sm:w-full rounded-lg text-black outline-none placeholder:text-black'
              placeholder='Search Name ...'
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </form>
        )}
        </div>

        
      </div>
    </div>
  );
}

export default Header;

