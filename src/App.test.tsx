import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ColorComponent', () => {
  render(<App />);
  const colorComponent = screen.getByText(/ColorComponent/i);
  expect(colorComponent).toBeInTheDocument();
});
