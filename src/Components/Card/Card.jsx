function Card(prop) {
  return (
    <>
      <div style={{background: `${prop.color}`}}>
        <div>
          <h2>{prop.id}</h2>
          <img src={prop.img} alt={prop.alt} />
        </div>
        <div>
          <h3>{prop.title}</h3>
          <p>{prop.desc}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
