import React from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(props.start);

    console.log(`Seconds = ${seconds}`);

    setTimeout(() => {
        setSeconds(seconds + 1);
    }, 1000)

    return (
        <div>
            Time: {seconds}s
        </div>
    )
}

export default Timer;