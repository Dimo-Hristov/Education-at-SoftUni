import { useState } from "react";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);

    const onIncrementCounter = (e) => {
        setCounter(oldCounter => oldCounter + 1)
    };
    const onDecrementtCounter = (e) => {
        setCounter(oldCounter => oldCounter - 1)
    };

    const clearCounterHandler = (e) => {
        setCounter(0)
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementtCounter}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
        </div>
    )
};


export default Counter;