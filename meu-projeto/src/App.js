import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from './components/Evento';

function App() {
  const nome = "Marcos"

  return (
    <div className="App"> 
      <h1>Testando Eventos</h1>
      <Form/>
       <Evento numero='1'/>
    </div>
  );
}

export default App;
