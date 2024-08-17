import "./Plans.css";

function Plans(prop) {
  if (prop.img) {
    return (
      <>
        <div className="plan">
          <div className="plan-title" style={{ background: `${prop.color}` }}>
            <h2>{prop.id}</h2>
          </div>
          <div className="plan-sections">
            <img src={prop.img} alt="Moça apoiada em um celular" />
          </div>
          <div className="plan-button">
            <button
              style={{ background: `${prop.btnColor}` }}
              className={prop.btnColor == "#fff" ? "border" : ""}
            >
              {prop.btnText}
            </button>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="plan">
        <div className="plan-title" style={{ background: `${prop.color}` }}>
          <h2>{prop.id}</h2>
        </div>
          {prop.items.map((data, i) => (
            <div key={i} className="plan-sections">
              <h3>{data.section}</h3>
              <button>
                {data.listText}
                <b>{data.preco}</b>
              </button>
            </div>
          ))}
        <div className="plan-button">
          <button
            style={{ background: `${prop.btnColor}` }}
            className={prop.btnColor == "#fff" ? "border" : ""}
          >
            {prop.btnText}
          </button>
        </div>
      </div>
    </>
  );
}

export default Plans;
    