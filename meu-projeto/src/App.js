import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from './components/Evento';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';
import Home from './pages/Home';
import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Nav from './components/Nav';


function App() {

  const [nome, setNome] = useState()

  return (
    <Router>
      
      <Nav/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </Router>
  );
}

export default App;
