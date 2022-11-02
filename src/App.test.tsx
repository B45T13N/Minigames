import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders HelloWorld', () => {
    render(<App />);
    const hello = screen.getByText(/Hello World/i);
    expect(hello).toBeInTheDocument();
});

test('render ColorsList', () => {
    render(<App />);
    var list: any = screen.getByTestId('colors-list');
    expect(list.textContent).toBe("Voici la liste :");
})