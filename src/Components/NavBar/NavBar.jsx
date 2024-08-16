import './NavBar.css'
function NavBar(prop) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/" className={prop.status == "Home" ? "active": ""}>Home</a>
          </li>
          <li>
            <a href="/Sobre" className={prop.status == "Sobre"? "active": ""}>Sobre</a>
          </li>
          <li>
            <a href="/Contato" className={prop.status == "Contato"? "active": ""}>Contato</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
