import Discord from "../../assets/Discord.svg"
import Insta from "../../assets/insta.svg"
import Twitter from "../../assets/Twitter.svg"
import "./Duvidas.css"
function Duvidas() {
    return ( <>
    <div className="Duvidas">
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <div className="imgsDuvidas">
        <img src={Discord} alt="Discord" />
        <img src={Insta} alt="Instagram" />
        <img src={Twitter} alt="Twitter" />
        </div>
    </div>
    </> );
}

export default Duvidas;