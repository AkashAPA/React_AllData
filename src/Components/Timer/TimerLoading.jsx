import React, { useState } from 'react';
import styles from './TimerLoading.module.css'
// import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Navbar from '../Pages/Navbar';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className={styles.timer}>Too late...</div>;
  }

  return (
    <div className={styles.timer}>
      <div className={styles.text}>Remaining</div>
      <div className={styles.value}>{remainingTime}</div>
      <div className={styles.text}>seconds</div>
    </div>
  );
};

const options = [10, 20, 30, 40, 50];
const TimerLoading = () => {
  const [selectedTime, setSelectedTime] = useState(10);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const handleSelectChange = (e) => {
    const newValue = parseInt(e.target.value);
    setSelectedTime(newValue);
    setIsTimerActive(false); // Stop the timer when a new value is selected
  };

  const handleResetClick = () => {
    setIsTimerActive(true); // Start the timer when the "Reset" button is clicked
  };

  return (
    <>
      <Navbar />
      <div className={styles.App}>

        <div className={styles.timer_wrapper}>
          <CountdownCircleTimer
            key={selectedTime} // Add a key to the timer to force a re-render when selectedTime changes
            isPlaying={isTimerActive}
            duration={selectedTime}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => setIsTimerActive(false)} // Stop the timer when it completes
          >
            {renderTime}
          </CountdownCircleTimer>
          <div style={{ display: "flex" }} className='m-2'>
            <select value={selectedTime} onChange={handleSelectChange} className='btn btn-outline-success'>
              {options.map((opt) => (
                <option value={opt} key={opt}>
                  {opt + " sec"}
                </option>
              ))}
            </select>
            <button onClick={handleResetClick} className='btn btn-danger mx-2'>Reset</button>
          </div>
         
        </div>
      </div>
    </>

  );
}

export default TimerLoading;
