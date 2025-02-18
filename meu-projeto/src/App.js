import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import Lista from './components/Lista';
import Form from './components/Form';
import Evento from './components/Evento';
import Condicional from './components/Condicional';
import OutraLista from './components/OutraLista';

function App() {
  const nome = "Marcos"
  
  const meusItens = ['React', 'Vue',  'Angular']

  return (
    <div className="App"> 
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={['']}/>
    </div>
  );
}

export default App;
