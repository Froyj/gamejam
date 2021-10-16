import './App.css';
import Jauge from './components/Jauge';

function App() {
  return (
    <div className="App">
      <Jauge progress={50} visible color="green"/>
      <Jauge progress={80} color="blue"/>
      <Jauge progress={50}/>
      <Jauge progress={24}/>
      <Jauge progress={30}/>
    </div>
  );
}

export default App;
