import React, {useEffect, useState} from 'react'
import {Link,useLocation} from "react-router-dom"
function Header() {
  const [activeTab, setActiveTab] = useState("Registro");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/registro/add") {
      setActiveTab("AddContact");
    } else {
      setActiveTab("Registro"); // Establece el estado activo predeterminado para otras páginas
    }
  }, [location]);

  return (
    <div className='flex justify-between'>
      <p className='text-[#87318f] text-[25px]'>App Registro</p>
      <div className='flex'>
        <Link to="/registro/add">
          <p
            className={`border-2 border-[#87318f] pl-2 pr-2 text-[#87318f] font-bold rounded-[8px] hover:bg-[#87318f] hover:text-white ${
              activeTab === "AddContact" ? "bg-[#87318f] text-white" : ""
            }`}
            onClick={() => setActiveTab("AddContact")}
          >
            Añadir
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Header;