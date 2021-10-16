import { useState } from 'react'
import Jauge from './components/Jauge';
import Card from './components/Card';
import JaugeBar from './components/JaugeBar';
import './App.css';

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

  const tryEvent = ({
      id: 1,
      text: "Vous vous approchez de la planète NH-781. Voulez-vous tenter de les contacter ?",
      img: "",
      location: "A bord du vaisseau",
      answers: [
          {
              id: 1.1,
              text: "Oui",
              type: "fioul",
                  value: -2
          },
          {
              id: 1.2,
              text: "Non",
              type: "virus",
              value: 0   
          }
      ]
  })


  return (
    <div className="App">
      <Jauge progress={50} visible color="green"/>
      <Jauge progress={80} color="blue"/>
      <Jauge progress={50}/>
      <Jauge progress={24}/>
      <Jauge progress={30}/>
      <Card event={tryEvent} />
      <JaugeBar gaugesLvl={gauges}/>
      <button onClick={() => handleGauges("fuel", 10)}>fill the tank</button>
    </div>
  );
}

export default App;
