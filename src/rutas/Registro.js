import {Formulario, Contenedor, Input, Button, Parrafo} from "../components/Formulario";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "./../firebase/firebaseConfig";
const Register = () => {
    // const [name, cambiarName] = useState("");
    // const [surname, cambiarSurname] = useState("");
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            history("/");
        } catch (error){
            console.log(error.code);
        }
    }

    return (
        <Contenedor>
            <h1>Registrate</h1>
            <Formulario action="" onSubmit={handleSubmit}>
                {/* <Input 
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
                /> */}
                <Input 
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => cambiarEmail(e.target.value)}
                />
                <Input 
                    type="password" 
                    name="password" 
                    id="password" 
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