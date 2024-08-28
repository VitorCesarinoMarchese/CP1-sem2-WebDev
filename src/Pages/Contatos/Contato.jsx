import NavBar from "../../Components/NavBar/NavBar"
import Duvidas from "../../Components/Duvidas/Duvidas";
import Form from "../../Components/Form/Form";
import "./Contato.css"
function Contatos() {
    return ( 
        <>
        <NavBar status="Contato"></NavBar>
        <div className="Contato">
            <Duvidas></Duvidas>
            <Form></Form>
        </div>
        </>
     );
}

export default Contatos;