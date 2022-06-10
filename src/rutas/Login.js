import {Formulario, Contenedor, Input, Button, Parrafo} from "../components/Formulario";
import {Link} from 'react-router-dom';
import { useState } from "react";
const Login = () => {
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");

    return (
        <Contenedor>
            <h1>Iniciar sesion</h1>
            <Formulario action="">
                <Input
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="email"
                    value={email}
                    onChange={(e) => cambiarEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    name="" 
                    id="" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => cambiarPassword(e.target.value)}
                />
                <Button type="submit">Iniciar sesion</Button>
                <Parrafo>¿No tienes una cuenta?<Link to="/register">Registrate</Link></Parrafo>
            </Formulario>
        </Contenedor>
     );
}
 
export default Login;