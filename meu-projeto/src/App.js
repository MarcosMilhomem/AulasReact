import './App.css';
import { useState } from 'react';
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

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App"> 
      <h1>State Lift</h1>
      <SeuNome setNome = {setNome}/>
      <Saudacao nome= {nome} />
    </div>
  );
}

export default App;
