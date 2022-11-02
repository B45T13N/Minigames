import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import HeaderComponent from './HeaderComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders colors list', () => {
    act(() => {
        render(<HeaderComponent />);
    })
    var element: HTMLElement = screen.getByText(/Bienvenue*/i);
    expect(element).toBeInTheDocument();
});
