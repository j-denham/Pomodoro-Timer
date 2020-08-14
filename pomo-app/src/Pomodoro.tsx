import React, { useState } from 'react';
import './index.css' 
// import ReactDOM from 'react-dom';

/* TODO: This whole goddamn thing! */


type InputProps = {
  placeholder: string;
  setLength: (e: React.ChangeEvent<HTMLInputElement> ) => void;
}

type TimerProps = {
  legnth: number;
  countDown: boolean;
}

const PomoInput: React.FC<InputProps> = ({ placeholder, setLength }) => {
  return ( 
    <input 
      placeholder={ placeholder }
      onChange={ setLength }
    />
  );
}

const BreakInput: React.FC<InputProps> = ({ placeholder, setLength }) => {
  return (
    <input
      placeholder={ placeholder }
      onChange={setLength}
    />
  );
}


const StartButton = () => (
  <button>
    LESSSHHHHHGOOOOOO
  </button>
);

//const Timer: React.FC<TimerProps> = ({pomoLength, isCountingDown}) => {
//  
//  const calculateTimeLeft = () = {
//    let year = new Date().getFullYear();
//
//  }
  


//}; 

const Pomodoro = ({}) => {
  
  const [pomoLength, setPomoLength] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [blockLength, setBlockLength] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(true);

  return (
    <div>
      <PomoInput setLength={(e) => setPomoLength(parseInt(e.target.value))} placeholder='Pomodoro Length'/>
      <BreakInput setLength={(e) => setBreakLength(parseInt(e.target.value))} placeholder='Break Length'/>
      <StartButton/>
      <p className='yudodis'>Pomo Length: {pomoLength}</p>
      <p className='cooked'>Break Length: {breakLength}</p>
    {/* <Timer length={pomoLength} countDown={isCountingDown}/> */}
    </div>
  );
} 

export default Pomodoro
// Flexbox
// grid
// margin
// Padding
// font stuff
