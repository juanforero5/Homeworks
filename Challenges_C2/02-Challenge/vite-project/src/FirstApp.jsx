import React, { useState } from 'react';

function FirstApp() {
    const [counter, setCounter] = useState(0);

    const handleSubstract = () => {
        setCounter(counter - 1);
    };

    const handleReset = () => {
        setCounter(0);
    };

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
            <button onClick={handleSubstract}>Substract</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default FirstApp;
