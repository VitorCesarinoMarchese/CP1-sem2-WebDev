import './Text.css'
function Text(prop) {
  return (
    <>
      <div className='Text-Div'>
        <h1>{prop.title}</h1>
        <p>{prop.desc}</p>
        <button>
          {prop.btnName}
        </button>
      </div>
    </>
  );
}

export default Text;
