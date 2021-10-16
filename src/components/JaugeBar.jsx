import Jauge from "./Jauge";
import './jauges.css'

const JaugeBar = ({gaugesLvl}) => {
  return (
    <div className="gaugeBar">
      {Object.keys(gaugesLvl).map(type => {
        const { progress, color, img } = gaugesLvl[type]
        return <Jauge progress={progress} color={color} image={img}/>
      })}
    </div>
  );
};

export default JaugeBar;