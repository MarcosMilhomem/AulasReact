import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Marcos"
  return (
    <div className="App">
      <SayMyName nome={nome}/>
      <Pessoa />
    </div>
  );
}

export default App;
