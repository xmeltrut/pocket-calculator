import { render, fireEvent, screen } from '@testing-library/react';
import Button from './Button';

test('displays value', () => {
    render(<Button value="5" />);
    const button = screen.getByText(/5/i);
    expect(button).toBeInTheDocument();
});

test('fires callback', () => {
  const callback = jest.fn();
  render(<Button value="1" callback={callback} />);
  fireEvent.click(screen.getByText(/1/i));
  expect(callback).toHaveBeenCalledTimes(1);
});
