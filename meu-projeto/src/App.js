import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

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
    </div>
  );
}

export default App;
