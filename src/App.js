import Login from "./components/Login";
import Home from "./components/Home";
import Registro from "./components/Registro";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
  return (
      <UserAuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/registro' element={<ProtectedRoute><Registro /></ProtectedRoute>} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup/>} />
          
        </Routes>
     
      </BrowserRouter>
      </UserAuthContextProvider> 
     
    
  );
}

export default App;
