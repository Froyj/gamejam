import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import Card from './components/Card';
import JaugeBar from './components/JaugeBar';
import DialogBox from './components/DialogBox';
import Landing from './components/Landing'
import landing from './data/landing';
import './App.css';

import { scenario } from './data/scenario'

function App() {
  const [gauges, setGauges] = useState({
    fuel: {
      progress: 100,
      color: "violet",
      visible: true,
      img: "/assets/fuel.png"
    },
    oxygen: {
      progress: 100,
      color: "blue",
      visible: true,
      img: "/assets/o2.png"
    },
    health: {
      progress: 100,
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

  const [currentChapter, setCurrentChapter] = useState(scenario[0])
  const [currentEvent, setCurrentEvent] = useState(scenario[0].events[0]);

  useEffect(() => {
    setCurrentChapter(scenario[0])
    setCurrentEvent(scenario[0].events[0])
  }, [])

  // remise a zero de l'event quand changement de chapitre
  useEffect(() => {
    if (currentChapter.id === 1) {
      if (gauges.health.progress < 60) {
        handleEvent(0)
      } else {
        handleEvent(1)
      }
    }
  }, [currentChapter])

  const handleGauges = (gaugeType, mod) => {
    setGauges({
      ...gauges,
      [gaugeType]: {
        ...gauges[gaugeType],
        progress: gauges[gaugeType].progress + mod
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

  const handleAnswer = (gaugeType, mod, endOfChapter, nextEvent) => {
    if(gaugeType) {
      handleGauges(gaugeType, mod);
    }
    if (endOfChapter) {
      handleChapter(currentChapter.id + 1)
    } else {
      handleEvent(nextEvent)
    }
  }

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <div className="App landing-page">
            <h1>TITRE DU JEU</h1>
            <Landing landing={landing} />
          </div>
        </Route>
        <Route path="/chapter1">
          <div className="App chapter1">
            <JaugeBar gaugesLvl={gauges} />
            <Card event={currentEvent} handleAnswer={handleAnswer} />
          </div>
        </Route>
        <Route path="/chapter2">
          <div className="App chapter2">
            <JaugeBar gaugesLvl={gauges} />
            <Card event={currentEvent} handleAnswer={handleAnswer}/>
          </div>
        </Route>
        <Route path="/chapter3">
          <div className="App chapter3">
            <JaugeBar gaugesLvl={gauges} />
            <Card event={currentEvent} handleAnswer={handleAnswer}/>
          </div>
        </Route>
      </Switch>
    </div >
  );
}

export default App;
