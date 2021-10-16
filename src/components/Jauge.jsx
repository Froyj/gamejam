
function Jauge({ progress, visible = true, color = 'red', image }) {
  if (visible) {
    return (
      <div className="gauge">
        <img src={image} alt="" />
        <svg
          className='jauge'
          height={110}
          width={60}
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            stroke='black'
            stroke-width='3'
            x='0'
            y='0'
            width={26}
            height={106}
            fill='none'
          />
          <rect
            x='3'
            y={100 - progress}
            width={20}
            height={progress}
            fill={color}
          />
        </svg>
      </div>
    );
  }
}

export default Jauge;
