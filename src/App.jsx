import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import './App.css'
import Sobre from './Pages/Sobre/Sobre';
import Contatos from './Pages/Contatos/Contato';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sobre' element={<Sobre/>}></Route>
        <Route path='/Contato' element={<Contatos/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
