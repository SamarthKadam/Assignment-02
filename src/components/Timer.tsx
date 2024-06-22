// components/Timer.tsx
import React, { useState, useEffect, useRef, MutableRefObject } from 'react';

const Timer: React.FC = () => {
  const initialTime = 25 * 60;
  const [time, setTime] = useState<number>(initialTime);
  const [isActive, setIsActive] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleResume = () => setIsActive(true);
  const handleReset = () => {
    setIsActive(false);
    setTime(initialTime);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col flex-grow items-center justify-center ">
      <div className="text-9xl max-[410px]:text-8xl tracking-tighter font-mono mb-8">{formatTime(time)}</div>
      <div className="space-x-4">
        {!isActive && time === initialTime && <button className="btn" onClick={handleStart}>Start</button>}
        {isActive && <button className="btn" onClick={handlePause}>Pause</button>}
        {!isActive && time !== initialTime && time > 0 && <button className="btn" onClick={handleResume}>Resume</button>}
        <button className="btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
