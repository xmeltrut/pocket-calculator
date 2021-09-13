import { render, screen } from '@testing-library/react';
import Display from './Display';

test('displays input', () => {
    render(<Display input="123" />);
    const display = screen.getByRole(/figure/i);
    expect(display.textContent).toEqual('123');
});

test('defaults to zero', () => {
    render(<Display input="0" />);
    const display = screen.getByRole(/figure/i);
    expect(display.textContent).toEqual('0');
});

test('hides unncessary decimal point', () => {
    render(<Display input="23." />);
    const display = screen.getByRole(/figure/i);
    expect(display.textContent).toEqual('23');
});
