function Card(prop) {
  return (
    <>
      <div className={prop.color}>
        <div>
          <h2>{prop.id}</h2>
          <img src={prop.img} alt="" />
        </div>
        <div>
          <h3>prop.title</h3>
          <p>prop.desc</p>
        </div>
      </div>
    </>
  );
}

export default Card;
