import './index.css'

const CircularProgress = (props) => {
  const size = 20;
  const viewBox = `0 0 ${size} ${size}`;
  const strokeWidth = 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (75 * circumference) / 100;
  return (
    <div className='circular-progress'>
      <svg className='circular' viewBox={viewBox}>
        {/* <circle
          fill='none'
          stroke='#ccc'
          cx={25}
          cy={25}
          r={25}
          strokeWidth='5px'
          strokeLinecap='round'
          // strokeDasharray={[dash, circumference-dash]}
        /> */}
        <circle
          fill='none'
          stroke='#ccc'
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          strokeDasharray={[dash, circumference - dash]}
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
}

export default CircularProgress;