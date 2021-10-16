import { useState } from 'react';
import Card from './components/Card';
import JaugeBar from './components/JaugeBar';
import DialogBox from './components/DialogBox';
import './App.css';

function App() {
  const [gauges, setGauges] = useState({
    fuel: {
      progress: 35,
      color: "violet",
      visible: true,
      img: "/assets/fuel.png"
    },
    oxygen: {
      progress: 20,
      color: "blue",
      visible: true,
      img: "/assets/o2.png"
    },
    health: {
      progress: 50,
      color: "green",
      visible: true,
      img: "/assets/health.png"
    },
    contamination: {
      progress: 0,
      color: "red",
      visible: false,
      img: "/assets/bacteria.png"
    }
  })

  const [currentChapter, setCurrentChapter] = useState(1)
  const [currentEvent, setCurrentEvent] = useState(1);

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
      img: "/assets/postapocalypse4.png",
      location: "A bord du vaisseau",
      firstChoise: "Oui",
      secondChoise: "Non",
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
    <div className="App chapter1">
      <JaugeBar gaugesLvl={gauges}/>
      <button onClick={() => handleGauges("fuel", 10)}>fill the tank</button>
      <DialogBox content="In the year 20XX, jklsdlfj kljdsfklj ,mlsdkjfsklfjsdlkj"/>
      <Card event={tryEvent} />
    </div>
  );
}

export default App;
