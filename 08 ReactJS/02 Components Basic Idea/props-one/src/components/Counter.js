import { useState } from "react";

const Counter = (props) => {
    const [counter, setcounter] = useState(0);

    const onButtonClick = (e) => {
        console.log('Clicked');
    };

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={onButtonClick}>+</button>
        </div>
    )
};


export default Counter;