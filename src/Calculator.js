import { useState } from 'react';

import Button from './components/Button';
import Display from './components/Display';

import './Calculator.css';

function Calculator() {
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState(null);
    const [beginNewInput, setBeginNewInput] = useState(false);
    const [previousInput, setPreviousInput] = useState('');

    function pressNumber(value) {
        if (beginNewInput === true) {
            setPreviousInput(input);
            setBeginNewInput(false);
            setInput(value.toString());
            return;
        }

        const newValue = input.concat(value.toString());
        setInput(newValue);
    }

    function pressDecimalPoint() {
        if (input.includes('.') === true) {
            return false;
        }

        pressNumber('.');
    }

    function pressOperator(value) {
        setOperator(value);
        setBeginNewInput(true);
    }

    function pressEquals() {
        if (input === '' || input === '-' || previousInput === '' || operator === null) {
            return false;
        }

        let result = input;

        switch (operator) {
            case '+':
                result =  Number(previousInput) + Number(input);
                break;
            case '-':
                result = Number(previousInput) - Number(input);
                break;
            case '×':
                result = Number(previousInput) * Number(input);
                break;
            case '÷':
                result = Number(previousInput) / Number(input);
                break;
            default:
                break;
        }

        setPreviousInput(input);
        setInput(result.toString());
    }

    function pressPercent() {
        if (input === '' || input === '-') {
            return false;
        }

        const result = Number(input) / 100;
        setInput(result.toString());
    }

    function pressRadical() {
        if (input === '' || input === '-') {
            return false;
        }

        const result = Math.sqrt(input);
        setInput(result.toString());
    }

    function pressChangeSign() {
        if (input.slice(0, 1) === '-') {
            setInput(input.slice(1));
        } else {
            setInput('-'.concat(input));
        }
    }

    function pressAllClear() {
        setInput('');
        setPreviousInput('');
        setBeginNewInput(false);
        setOperator(null);
    }

    return (
        <div className="calculator">
            <header>
                <img src="logo.svg" alt="Equal Experts" />
            </header>
            <main>
                <Display input={input} />
                <div className="buttons">
                    <Button value={"±"} callback={pressChangeSign} />
                    <Button value={"%"} callback={pressPercent} />
                    <Button value={"√"} callback={pressRadical} />
                    <Button value={"÷"} callback={pressOperator} />
                    <Button value={7} callback={pressNumber} />
                    <Button value={8} callback={pressNumber} />
                    <Button value={9} callback={pressNumber} />
                    <Button value={"×"} callback={pressOperator} />
                    <Button value={4} callback={pressNumber} />
                    <Button value={5} callback={pressNumber} />
                    <Button value={6} callback={pressNumber} />
                    <Button value={"-"} callback={pressOperator} />
                    <Button value={1} callback={pressNumber} />
                    <Button value={2} callback={pressNumber} />
                    <Button value={3} callback={pressNumber} />
                    <Button value={"+"} callback={pressOperator} />
                    <Button value={0} callback={pressNumber} />
                    <Button value={"."} callback={pressDecimalPoint} />
                    <Button value={"AC"} callback={pressAllClear} />
                    <Button value={"="} callback={pressEquals} />
                </div>
            </main>
        </div>
    );
}

export default Calculator;
