import { useState } from 'react'
import Jauge from './components/Jauge';
import './App.css';
import JaugeBar from './components/JaugeBar';

function App() {
  const [gauges, setGauges] = useState({
    fuel: {
      progress: 35,
      color: "violet",
      visible: true,
    },
    oxygen: {
      progress: 20,
      color: "blue",
      visible: true
    },
    health: {
      progress: 50,
      color: "green",
      visible: true
    },
    contamination: {
      progress: 0,
      color: "red",
      visible: false,
      img: "/assets/bacteria.png"
    }
  })

  const handleGauges = (name, mod) => {
    setGauges({
      ...gauges,
      [name]: {
        ...gauges[name],
        progress: gauges[name].progress + mod
      }
    })
  }

  return (
    <div className="App">
      <JaugeBar gaugesLvl={gauges}/>
      <button onClick={() => handleGauges("fuel", 10)}>fill the tank</button>
    </div>
  );
}

export default App;
