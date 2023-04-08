// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  var count = screen.getByTestId('count');
  expect(count).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  var initial = parseInt(screen.getByTestId('count').textContent);
  fireEvent.click(screen.getByText('+'));
  expect(screen.getByTestId('count')).toHaveTextContent(String(initial + 1));
});

test('clicking - decrements the count', () => {
  var initial = parseInt(screen.getByTestId('count').textContent);
  fireEvent.click(screen.getByText('-'));
  expect(screen.getByTestId('count')).toHaveTextContent(String(initial - 1));
});
