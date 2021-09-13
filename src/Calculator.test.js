import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from './Calculator';

function pressButtons(listOfButtons) {
    listOfButtons.forEach(function(buttonName) {
        fireEvent.click(screen.getByText(buttonName));
    });
}

test('entering an integer then clearing', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    fireEvent.click(screen.getByText('1'));
    expect(display.textContent).toEqual('1');

    fireEvent.click(screen.getByText(/2/i));
    expect(display.textContent).toEqual('12');

    fireEvent.click(screen.getByText(/3/i));
    expect(display.textContent).toEqual('123');

    fireEvent.click(screen.getByText(/AC/i));
    expect(display.textContent).toEqual('0');
});

test('entering a decimal', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['1', '.', '2']);
    expect(display.textContent).toEqual('1.2');
});

test('entering multiple decimal poiints', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['2', '.', '3', '.', '4']);
    expect(display.textContent).toEqual('2.34');
});

test('addition', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['5', '+']);
    expect(display.textContent).toEqual('5');

    pressButtons(['6']);
    expect(display.textContent).toEqual('6');
    
    pressButtons(['=']);
    expect(display.textContent).toEqual('11');
});

test('subtraction', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['9', '-', '1', '4', '=']);
    expect(display.textContent).toEqual('-5');
});

test('multiplication', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['5', '×', '6', '=']);
    expect(display.textContent).toEqual('30');
});

test('division', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['1', '8', '÷', '4', '=']);
    expect(display.textContent).toEqual('4.5');
});

test('square root', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['6', '4', '√']);
    expect(display.textContent).toEqual('8');
});

test('percentage', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['2', '5', '%']);
    expect(display.textContent).toEqual('0.25');
});

test('change sign', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['2', '5', '±']);
    expect(display.textContent).toEqual('-25');

    pressButtons(['±']);
    expect(display.textContent).toEqual('25');
});

test('randomly pressing equals', () => {
    render(<Calculator />);
    const display = screen.getByRole(/figure/i);

    pressButtons(['2', '+', '=']);
    expect(display.textContent).toEqual('2');
});
