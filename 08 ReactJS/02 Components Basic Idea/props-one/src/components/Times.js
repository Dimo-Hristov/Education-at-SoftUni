import React from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(props.start);


    // not good practice, useEffect is better.
    setTimeout(() => {
        // Set value whateven was the previous
        // setSeconds(seconds + 1);
        // Set value based on previous value
        setSeconds(state => state + 1)
    }, 1000)

    return (
        <div>
            Time: {seconds}s
        </div>
    )
}

export default Timer;