import "./Form.css"
function Form() {
    return ( <>
    <form action="">
        <div className="input">
        <label htmlFor="Nome">Nome:</label>
        <input type="text" id="Nome" name="Nome"/>
        </div>
        <div className="input">
        <label htmlFor="Email">E-mail:</label>
        <input type="email" id="Email" name="Email"/>
        </div>
        <label htmlFor="Mensagem">Mensagem:</label>
        <textarea name="Mensagem" id="Mensagem"></textarea>
        <button className="Enviar">Enviar</button>
    </form>
    </> );
}

export default Form;