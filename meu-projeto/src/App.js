import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

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
    </div>

  );
}

export default App;
