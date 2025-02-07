import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from './components/Evento';
import Condicional from './components/Condicional';

function App() {
  const nome = "Marcos"
  
  const teste = [1,2,3,4]

  return (
    <div className="App"> 
      <h1>Renderização condicional</h1>
      <Condicional/>
      <p>{teste}</p>
    </div>
  );
}

export default App;
