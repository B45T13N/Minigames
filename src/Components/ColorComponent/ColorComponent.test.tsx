import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorComponent from './ColorComponent';

test('renders colors list', () => {
    render(<ColorComponent />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
