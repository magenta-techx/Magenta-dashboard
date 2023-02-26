import React, { useRef, useState } from "react";
import { useIdleTimer } from "react-idle-timer";
const idleTimer = () => {
  const [remainingTime, setRemainingTime] = useState(0);
  const [count, setCount] = useState(0);

 
 

  return (
    <div>
       <IdleTimer ref={ref} timeout={5 * 4000} onIdle={handleIdle}></IdleTimer>
    </div>
  );
};

export default idleTimer;
