import { useState } from "react";

// const getTitle = (count) => {
//     switch (count) {
//         case 1: return 'First Blood';
//         case 2: return 'Double kill';
//         case 3: return 'Trimple kill';
//         case 4: return 'Quadra kill';
//         case 5: return 'Penta kill';

//         default: return 'Counter';
//     }
// };

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

    let title = 'Counter';
    if (counter === 1) {
        title = 'First Blood'
    } else if (counter === 2) {
        title = 'Double Kill'
    }

    return (
        <div>
            <h3>{title}: {counter}</h3>
            <button onClick={onIncrementCounter}>+</button>
            <button onClick={onDecrementtCounter}>-</button>
            <button onClick={clearCounterHandler}>Clear</button>
        </div>
    )
};


export default Counter;