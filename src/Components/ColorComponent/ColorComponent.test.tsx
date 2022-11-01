import React from 'react';
import { render, screen } from '@testing-library/react';
import ColorComponent from './ColorComponent';

test('renders learn react link', () => {
    render(<ColorComponent />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
