import { useState } from "react";

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);

    const handleButtonClick = (value) => {
        setInput((prevInput) => prevInput + value);
    };

    const clearInput = () => {
        setInput('');
        setResult(0);
    };

    const calculateResult = () => {
        try {
            // eslint-disable-next-line no-eval
            const calculatedResult = eval(input);
            setResult(calculatedResult);
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className="calculator">
            <input
                type="text"
                value={input}
                readOnly
            />
            <div className="result">
                <span>Result: {result}</span>
            </div>
            <div className="buttons">
                <div className="row">
                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('+')}>+</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')}>-</button>
                </div>
                <div className="row">
                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('*')}>*</button>
                </div>
                <div className="row">
                    <button onClick={() => clearInput()}>C</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => calculateResult()}>=</button>
                    <button onClick={() => handleButtonClick('/')}>/</button>
                </div>
            </div>

        </div>
    );
}

export default Calculator;






