import NavBar from "../../Components/NavBar/NavBar";
import "./Sobre.css";
import Text from "../../Components/Text/Text";
import Plans from "../../components/Plans/Plans";
import MocaApoiada from "../../assets/MocaApoiada.png";

function Sobre() {
  const phones = [
    "https://s3-alpha-sig.figma.com/img/bc29/5f3d/7a5c9308bdb1bbf1abc6cca471b6e6bb?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DjrLvf2U--pORb0Xy0u2uha4LHcdO0w-SIylyWoQiM3NRQuCro~vTCasL9QVNMcI8KzJh8sUVTfaYtM3XJnemBUDn8h8LfaIZBCLSQg1htggK4xtodurPppW3CtmSdRCvxmYGLJESlcECowJptQ-n3-HXmdWsSrvjp9S8rHDFbA0FZI9F8IzUck2-SdlsL-EWfpImnMg2-TBImiKbV8mBPO8-X20BD2Tuj6pSUBKysPzPVeP3zvvzCxWxSYRh8jMMik3aG01oJg8yS1YOVT~evKDEnFNJ5ZG61Fm6QpS85sBlA204RjL20EzPNCR3n0vfGLekmQSzStYHC95VmD4Ew__",
    "https://s3-alpha-sig.figma.com/img/b755/2471/42f19cf580913103daa93e9be17d90c4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E4oddmVBfSa7XeAP~RwauWM06ajsy~IIorgz944XPDvrJBjN8DJTFG93LoqacabxSOedgM6WvnBzhi9DDYfT9o3atOjVvSb79NUIsvSzrSyxKZhsjXwAuL1lJNFS2nzXBfb0auUQx9K9ADSJRqgsosgN-NnJzA93XPVdVut4vE14tdmE7BVHgkY7uTr7ux-ufmD871d2xr8t-ZlTl~vUfoRy3vqlUFM-ecgaEup~BIBNUBiRqJ4JqHayWSMGfB2Oad~n8Y6TfmntxQ9wvgaRG8c~bjVIBLCnljvSqslQWk5ccw9QdnJyqq4tw4~WX6502TILBQONuW684VjAIO6gPg__",
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
