import NavBar from "../../Components/NavBar/NavBar";
import Text from "../../Components/Text/Text";
import HeroImg from "../../assets/HeroImg.png"
import "./Home.css"
function Home() {
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
    </>
  );
}

export default Home;
