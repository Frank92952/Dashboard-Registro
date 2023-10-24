import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Home";
import AddEdit from "./components/Empleados/AddEdit";
import View from "./components/Empleados/View";
import About from "./components/Empleados/About";
import Registro from "./components/Empleados/Registro";
import { ActiveItemProvider } from './context/ActiveItemContext';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Login/Signup";
import { SidebarProvider } from './context/SidebarContext'; // Importa el SidebarProvider
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
      <UserAuthContextProvider>
        
       
        <BrowserRouter>
        <ActiveItemProvider>
        <SidebarProvider>
          <Routes>
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/registro' element={<ProtectedRoute><Registro /></ProtectedRoute>} />
          <Route path='/registro/add' element={<ProtectedRoute><AddEdit /></ProtectedRoute>}/>
          <Route path='/registro/update/:id' element={<ProtectedRoute><AddEdit /></ProtectedRoute>}/>  
          <Route path='/registro/view/:id' element={<ProtectedRoute><View /></ProtectedRoute>}/>
          <Route path='/registro/about' element={<ProtectedRoute><About /></ProtectedRoute>}/>   
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          </Routes>
          </SidebarProvider>
          </ActiveItemProvider>
        </BrowserRouter>
        
      </UserAuthContextProvider> 
     
    
  );
}

export default App;
