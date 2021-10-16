import Jauge from "./Jauge";

const JaugeBar = ({gaugesLvl}) => {
  return (
    <div>
      {Object.keys(gaugesLvl).map(type => {
        const { progress, color } = gaugesLvl[type]
        return <Jauge progress={progress} color={color}/>
      })}
    </div>
  );
};

export default JaugeBar;