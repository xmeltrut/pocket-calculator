import './Button.css';

function Button({ value, callback }) {
    return (
        <button onClick={() => callback(value)}>{value}</button>
    );
}

export default Button;
