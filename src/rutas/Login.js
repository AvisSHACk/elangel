import {Formulario, Contenedor, Input, Button, Parrafo} from "../components/Formulario";
import {Link, useNavigate} from 'react-router-dom';
import { useState } from "react";
import { auth, signInWithEmailAndPassword } from "./../firebase/firebaseConfig";

const Login = () => {
    const [email, cambiarEmail] = useState("");
    const [password, cambiarPassword] = useState("");
    const history = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            history("/");
        } catch (error){
            console.log(error.code);
        }
    }

    return (
        <Contenedor>
            <h1>Iniciar sesion</h1>
            <Formulario action="" onSubmit={handleSubmit}>
                <Input
                    type="text" 
                    name="email" 
                    id="email" 
                    placeholder="email"
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
                <Parrafo>¿No tienes una cuenta?<Link to="/register">Registrate</Link></Parrafo>
            </Formulario>
        </Contenedor>
     );
}
 
export default Login;