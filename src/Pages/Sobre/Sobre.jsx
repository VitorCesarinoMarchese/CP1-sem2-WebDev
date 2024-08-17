import NavBar from "../../Components/NavBar/NavBar"
import "./Sobre.css";
import Text from "../../Components/Text/Text";
import Celphone from "../../assets/Celphone.png"
import Plans from "../../components/Plans/Plans";

function Sobre(){
    const plans = [
        {
            id: "Individual",
            color: "#6975E8",
            items: {
                section: "1 Usuário",
                listText: "10 Vídeos R$15"
            },
            btnText: "Cadastrar",
            btnColor: "#6975E8"
        },
        {
            id: "Profissional - Times",
            color: "#fff",
            items: [ 
                {
                    section: "1-10 Usuários",
                    listText: "Vídeos Ilimitados R$40"
                },
                {
                    section: "+10 Usuários",
                    listText: "Vídeos Ilimitados R$20"
                }
            ],
            btnText: "Cadastrar",
            btnColor: "#fff"
        },
        {
            id: "Corporativo",
            color: "#fff",
            btnText: "Entre em Contato",
            btnColor: "#fff"
        }
    ];

    return(
        <>  
            <NavBar status="Sobre"></NavBar>
            <div className="cel">
                <Text
                    title="Bem-vindo à revolução dos vídeos!"
                    desc="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
                    btnName="Baixe o app"
                ></Text>
                <img src={Celphone} alt="" />
            </div>
            <ul className="plans">
                { plans.map( (data) => (
                    <li key={data.id}>
                        <Plans
                            id={data.id.toString()}
                            color={data.color}
                            items={data.items}
                            btnText={data.btnText}
                        ></Plans>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Sobre; 