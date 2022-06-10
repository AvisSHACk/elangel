import {Formulario, Contenedor, Input, Button, Parrafo} from "../components/Formulario";
import {Link} from 'react-router-dom';
import { useState } from "react";
const Register = () => {
    const [name, cambiarName] = useState("");
    const [surname, cambiarSurname] = useState("");
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    return (
        <Contenedor>
            <h1>Registrate</h1>
            <Formulario action="">
                <Input 
                    type="text" 
                    name="" id="" 
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => cambiarName(e.target.value)}
                />
                <Input 
                    type="text" 
                    name="" id="" 
                    placeholder="Apellidos"
                    value={surname}
                    onChange={(e) => cambiarSurname(e.target.value)}
                />
                <Input 
                    type="text" 
                    name="" id="" 
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => cambiarEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    name="" id="" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => cambiarPassword(e.target.value)}
                />
                <Button type="submit">Iniciar sesion</Button>
                <Parrafo>¿Ya tienes una cuenta?<Link to="/login">Inicia sesion</Link></Parrafo>
            </Formulario>
        </Contenedor>
     );
}
 
export default Register;