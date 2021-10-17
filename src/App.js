import { useState } from 'react';
import Card from './components/Card';
import JaugeBar from './components/JaugeBar';
import DialogBox from './components/DialogBox';
import Landing from './components/Landing'
import landing from './data/landing';
import './App.css';

import scenario from './data/scenario'

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

  const handleChapter = (id) => {
    const chapter = scenario.find(c => c.id === id)
    setCurrentChapter(chapter)
  }

  const handleEvent = (id) => {
    const event = currentChapter.events.find(e => e.id === id)
    setCurrentEvent(event)
  }


  return (
    <div>
      <div className="App landing-page">
        <h1>TITRE DU JEU</h1>
      <Landing landing={landing}/>
      </div>
    <div className="App chapter1"> 
      <JaugeBar gaugesLvl={gauges}/>
      <DialogBox content="In the year 20XX, jklsdlfj kljdsfklj ,mlsdkjfsklfjsdlkj"/>
      <Card event={tryEvent} />
    </div>
    <div className="App chapter2"> 
      <JaugeBar gaugesLvl={gauges}/>
      <Card event={tryEvent} />
    </div>
    <div className="App chapter3"> 
      <JaugeBar gaugesLvl={gauges}/>
      <Card event={tryEvent} />
    </div>
    </div>
  );
}

export default App;
