import NavBar from "../../Components/NavBar/NavBar";
import "./Sobre.css";
import Text from "../../Components/Text/Text";
import Plans from "../../components/Plans/Plans";
import MocaApoiada from "../../assets/MocaApoiada.png";
import cel1 from "../../assets/cel1.jfif";
import cel2 from "../../assets/cel2.jfif";

function Sobre() {
  const phones = [
    cel1,
    cel2,
  ];
  const plans = [
    {
      id: "Individual",
      color: "#6975E8",
      items: [
        {
          section: "1 Usuário",
          listText: "10 Vídeos",
          preco: "R$15",
        },
      ],
      btnText: "Cadastrar",
      btnColor: "#6975E8",
    },
    {
      id: "Profissional - Times",
      color: "#fff",
      items: [
        {
          section: "1-10 Usuários",
          listText: "Vídeos Ilimitados R$40",
          preco: "R$40",
        },
        {
          section: "+10 Usuários",
          listText: "Vídeos Ilimitados R$20",
          preco: "R$20",
        },
      ],
      btnText: "Cadastrar",
      btnColor: "#fff",
    },
    {
      id: "Corporativo",
      color: "#fff",
      btnText: "Entre em Contato",
      img: MocaApoiada,
      btnColor: "#fff",
    },
  ];

  return (
    <>
      <NavBar status="Sobre"></NavBar>
      <div className="cel">
        <Text
          title="Bem-vindo à revolução dos vídeos!"
          desc="Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores."
          btnName="Baixe o app"
        ></Text>
        <div className="CellPhones">
          <img src={phones[0]} alt="App funcionando" />
          <img src={phones[1]} alt="App funcionando" />
        </div>
      </div>
      <div className="PlanosSection">
        <h2>Planos</h2>
        <ul className="plans">
          {plans.map((data) => (
            <li key={data.id}>
              <Plans
                id={data.id.toString()}
                color={data.color}
                items={data.items}
                btnText={data.btnText}
                img={data.img}
              ></Plans>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Sobre;
