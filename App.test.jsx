import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './components/App';

test('renders portfolio header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Obed Portfolio/i);
  expect(headerElement).toBeInTheDocument();
  // Log to confirm test runs
  // eslint-disable-next-line no-console
  console.log('Portfolio header test ran successfully');
});
