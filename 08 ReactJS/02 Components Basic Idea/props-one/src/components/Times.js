import React from 'react';

const Timer = (props) => {
    const [seconds, setSeconds] = React.useState(0);

    console.log(`Seconds - ${seconds}`);

    setTimeout(() => {
        setSeconds(6);
        console.log(seconds);
    }, 1000)

    return (
        <div>
            Time: {seconds}s
        </div>
    )
}

export default Timer;