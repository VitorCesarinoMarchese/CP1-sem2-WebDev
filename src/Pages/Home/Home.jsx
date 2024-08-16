import NavBar from "../../Components/NavBar/NavBar";
import Text from "../../Components/Text/Text";
import Card from "../../Components/Card/Card";
import HeroImg from "../../assets/HeroImg.png";
import "./Home.css";
function Home() {
  const cards = [
    {
      id: "01",
      color: "#F1C2B0",
      title: "Youtube",
      desc: "Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.",
      img: "https://s3-alpha-sig.figma.com/img/8865/99f1/a0c00f09b7ad994ad8109964dace67d4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V4VkRyPTqSK4jHlG-MWSY003E8vwwAVUm8Ck0-ak4jT6B6FWtKh5oYmm66aLoMIqeof1rMpB~glFqFFfRaCActcpJbCTUY65JSAaAkZAnUQLVfQOQigzoekHA556zSt6Uu6ajGmVClETkOOZ5Zt8wZvAH2TQz1HClANiuzyBtXVKMaOLyvPsj48sWUWoxOKN4hrMbOzIg506u5DorQ3L8N19mwSPZMJw27o3cnCZLOtS3XkZoEm4VFuf2imuIX9FxoeT7Gu2UlC6DE6J6ocyyAUemR8Hz~J2kkrbr4sdDfzOyIq3Ddg6aQ77qWRvlxrWreEGHneFXxV1BQ8v-aB82A__",
      alt: "youtube",
    },
    {
      id: "02",
      color: "#F9EB98",
      title: "Tiktok",
      desc: "Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.",
      img: "https://s3-alpha-sig.figma.com/img/d8f9/fe3d/db0b734c83c00f3f58adc25ffbaff04b?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NfQn1R3t-ePq1409eRMYAY3YewmBtuG2IM~jj3OsHPTcY2svKUIFWrRDLIdyamCLLERcEpWQrahc1DPrpojvaVqLhxFzYkcHy1doAradCpJwtrC-PqlFaapmOZGEMhGqZO0PTejZrDtWRtPQJWlapgwwaXa0xoRnyoyz~HrzenGWyqHAG90F-OL4y6mOdgXEPxnRd2KQQtJUF4x1emWhQfWrXBuEtq14X45XR3IeBrQ~TnS1k8TbMvZTu4WBTOWFoCHRY7wXG5xSYxtpu9F7FRmjU-TaIWNS7sh5klWgeicJOUSC~r86Klu96rH~WAvyTIEpRDLM8q1xIptZDpq9zw__",
      alt: "TikTok",
    },
    {
      id: "03",
      color: "#C0D9DD",
      title: "Facebook",
      desc: "Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.",
      img: "https://s3-alpha-sig.figma.com/img/253e/8875/d8b84b68d1060d59dd74cdd5acf8ace4?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8h0hZMMWJnOLolK~M6u-PUmqbgJaVDtNfuOq1XtHcWNl25uq4qtOE8s4GaeRqy0fxkPF-1JzmCknPD2oI0Pl76wnCkTPXmbo0Z20X22sWBV5D-oSPr5vHZdLX2yj1me6XBfXjpai9nY8Xy9EKlE9bISXCc0idQO1Jpii8ilGyAyh0lkRVVWI2uMYJf0wEGBnAlEpO~ywVgEKRLMDW6XwZYjvmElYj6HXy8nowB5ENgFoEej~PyZfmjoMIKsDTHu8lO-SynoPPKgtrwKk-W0iVhIMyCnarlECj6EnP4vJwcdYk-NS~fc9wR1NqRwP~B1Xj1VROmn7OG9GjAAeG9spQ__",
      alt: "Facebook",
    },
    {
      id: "04",
      color: "#6975E8",
      title: "Instagram",
      desc: "Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.",
      img: "https://s3-alpha-sig.figma.com/img/6ad6/6df7/c9848dab58dd684d10aa668575a15f55?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oTVtx0YvG--bvz-gzOWhw7pN13jIch7wsZZk6OOJsxABNgXBdsaAlh9DdNZuWYOev2Lk51UsiE6KBgm~cYzz9f1ni9pdaFmYsWUO6OauUgc8kIWBBqBUDpx14wkK1UfVtAofq4KmrX1jH3Qgel-~yF1REkU9ze4lRgER~9lj2sYVFYOIayma~3WsasLtpUtyeCXp-FPwDIGSAoaLyCibFEocBx3Tt8aoIL0zVZKcxAOo~vzqE70XfHszU6ii~cn7faMWxvhx3TnTcSVrXoGYk~fUDbiv0h0L1QFDXgg5-o-dYHCvQC3GcxYv0LUCfWctBM3q0bOOwZ2d1AzEX4fA~Q__",
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
