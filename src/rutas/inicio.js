
import { auth, signOut } from "../firebase/firebaseConfig";
const Inicio = () => {
    
    return ( 
        <>
            <h1>Inicio</h1>
            <button onClick={() => signOut(auth)}>Cerrar sesion</button>
        </>
    );
}
 
export default Inicio;