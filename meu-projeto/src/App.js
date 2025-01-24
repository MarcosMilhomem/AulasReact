import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';

function App() {
  const nome = "Marcos"
  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Marcos"
      idade="20"
      profissão="Dev"
      foto="https://placehold.co/150"/>
    <Frase/>
    <Lista/>
    </div>

  );
}

export default App;
