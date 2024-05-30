import { useState } from 'react';


export const Handle = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubsstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="handle-container">
        <h1>Contador</h1>

        <div className="buttons-container">
          <button onClick={() => handleAdd()}>+1</button>
          <button onClick={() => handleSubsstract()}>-1</button>
          <button onClick={() => handleReset()}>resetear</button>
        </div>

        <span>{counter}</span>
      </div>
    </>
  );
};


