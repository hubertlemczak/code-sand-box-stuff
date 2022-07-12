import { useEffect } from 'react';
import { useState } from 'react';
import './Counter.styles.css';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [fontSize, setFontSize] = useState(5);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setFontSize(fontSize + 0.5);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setFontSize(fontSize - 0.5);
    }
  };

  const double = () => {
    if (count < 6) {
      setCount(count * 2);
      setFontSize(fontSize + count * 0.5);
    }
  };

  const halve = () => {
    if (count > 1) {
      setFontSize(fontSize - (count / 2) * 0.5);
      setCount(Math.round(count / 2));
    }
  };

  const reset = () => {
    setFontSize(5);
    setCount(0);
  };

  return (
    <div className="counter">
      <div className="counter__number" style={{ fontSize: `${fontSize}rem` }}>
        {count}
      </div>
      <div className="counter__buttons">
        <div className="counter__reset" onClick={reset}>
          R
        </div>
        <div className="counter__halve" onClick={halve}>
          /2
        </div>
        <div className="counter__decrementer" onClick={decrement}>
          -
        </div>
        <div className="counter__decrementer" onClick={increment}>
          +
        </div>
        <div className="counter__double" onClick={double}>
          *2
        </div>
      </div>
    </div>
  );
};
