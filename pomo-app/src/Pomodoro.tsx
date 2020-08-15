import React, { useState } from 'react';
import './index.css' 
// import ReactDOM from 'react-dom';

/* TODO: This whole goddamn thing! */


type InputProps = {
  placeholder: string;
  setLength: (e: React.ChangeEvent<HTMLInputElement> ) => void;
}

type TimerProps = {
  length: number;
  countDown: boolean;
}

const PomoInput: React.FC<InputProps> = ({ placeholder, setLength }) => {
  return ( 
    <input 
      placeholder={placeholder}
      onChange={setLength}
    />
  );
}

const BreakInput: React.FC<InputProps> = ({ placeholder, setLength }) => {
  return (
    <input
      placeholder={placeholder}
      onChange={setLength}
    />
  );
}


//const StartButton = ({setStarted: (e: React.MouseEvent<HTMLButtonElement>) => void}) => (
//  <button onClick={setStarted}>
//    LESSSHHHHHGOOOOOO
//  </button>
//);

const Timer: React.FC<TimerProps> = ({length, countDown}) => {  
  // pomoLength * 60 gives total seconds
  const [timerLength, setTimerLength] = useState(length*60);

  // setInterval(func, delay). 1000ms = 1 second
  let timer = setInterval(() => setTimerLength(timerLength - 1),  1000);
  
  return (
    <div>
      {Math.floor(timerLength / 60)}:{timerLength % 60}
    </div>
  );
}; 

const Pomodoro = () => {
  
  const [pomoLength, setPomoLength] = useState(0);
  const [breakLength, setBreakLength] = useState(0);
  const [blockLength, setBlockLength] = useState(0);
  const [isCountingDown, setIsCountingDown] = useState(true);
  const [started, setStarted] = useState(false);

  return (
    <div>
      <PomoInput setLength={(e) => setPomoLength(parseInt(e.target.value))} placeholder='Pomodoro Length'/>
      <BreakInput setLength={(e) => setBreakLength(parseInt(e.target.value))} placeholder='Break Length'/>
      <p className='yudodis'>Pomo Length: {pomoLength}</p>
      <button onClick={() => setStarted(true)}>
        LESSSHHHHHGOOOOOO
      </button>
      <p className='cooked'>Break Length: {breakLength}</p>
      {started ? (
        <Timer length={pomoLength} countDown={isCountingDown}/>
      ) : null}
    </div>
  );
} 

export default Pomodoro
