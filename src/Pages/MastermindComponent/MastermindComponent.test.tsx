import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import MastermindComponent from './MastermindComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders colors list', () => {
    act(() => {
        render(<MastermindComponent />);
    })
    var element: HTMLElement = screen.getByText(/Bienvenue*/i);
    expect(element).toBeInTheDocument();
});
