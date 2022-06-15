// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./rutas/Login";
import Register from "./rutas/Registro";
import Inicio from "./rutas/inicio";
import {AuthProvider} from "./contextos/authContext";
import RutaProtegida from "./components/RutaProtegida";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>

          <Route element={<RutaProtegida />}>
            <Route path="/" element={<Inicio />}/>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
