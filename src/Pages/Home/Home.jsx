import NavBar from "../../Components/NavBar/NavBar";
import Text from "../../Components/Text/Text";
import Card from "../../Components/Card/Card";
import HeroImg from "../../assets/HeroImg.png";
import youtube from "../../assets/youtube.jfif"
import tiktok from "../../assets/tiktok.jfif"
import insta from "../../assets/insta.jfif"
import face from "../../assets/face.jfif"
import "./Home.css";
function Home() {
  const cards = [
    {
      id: "01",
      color: "#F1C2B0",
      title: "Youtube",
      desc: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      img: youtube,
      alt: "youtube",
    },
    {
      id: "02",
      color: "#F9EB98",
      title: "Tiktok",
      desc: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      img: tiktok,
      alt: "TikTok",
    },
    {
      id: "03",
      color: "#C0D9DD",
      title: "Facebook",
      desc: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      img: face,
      alt: "Facebook",
    },
    {
      id: "04",
      color: "#6975E8",
      title: "Instagram",
      desc: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      img: insta,
      alt: "Instagram",
    },
  ];
  return (
    <>
      <NavBar status="Home"></NavBar>
      <div className="Hero">
        <Text
          title="Crie seus vídeos online"
          desc="Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade."
          btnName="Começar agora!"
        ></Text>
        <img src={HeroImg} alt="" />
      </div>
      <ul className="CardsList">
        { cards.map( (data) => (          
          <li key={data.id}>
            <Card
              id={data.id.toString()}
              color={data.color}
              title={data.title}
              desc={data.desc}
              img={data.img}
              alt={data.alt}
            ></Card>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
