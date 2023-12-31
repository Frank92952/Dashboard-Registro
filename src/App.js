import Login from "./components/Login/Login";
import Home from "./components/Dashboard/Home";
import AddEdit from "./components/Empleados/AddEdit";
import View from "./components/Empleados/View";
import About from "./components/Empleados/About";
import Registro from "./components/Empleados/Registro";
import Search from "./components/Empleados/Search";
import { ActiveItemProvider } from './context/ActiveItemContext';
import {BrowserRouter, Routes,Switch, Route} from "react-router-dom"
import Signup from "./components/Login/Signup";
import { SidebarProvider } from './context/SidebarContext'; // Importa el SidebarProvider
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
      <UserAuthContextProvider>
        <BrowserRouter>
        <ActiveItemProvider>
        <SidebarProvider>
        <ToastContainer className="ml-32" position="top-center" />
          <Routes>
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/registro' element={<ProtectedRoute><Registro /></ProtectedRoute>} />
          <Route path='/registro/search' element={<ProtectedRoute><Search /></ProtectedRoute>} />
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
