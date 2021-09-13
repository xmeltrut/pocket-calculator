import './Display.css';

function Display({ input }) {
    if (input === '' || input === '.') {
        input = '0';
    }

    if (input.slice(-1) === '.') {
        input = input.slice(0, -1);
    }

    return (
        <figure className="display">
            {input}
        </figure>
    );
}

export default Display;
