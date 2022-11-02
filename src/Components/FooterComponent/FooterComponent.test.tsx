import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import FooterComponent from './FooterComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders colors list', () => {
    act(() => {
        render(<FooterComponent />);
    })
    var element: HTMLElement = screen.getByText(/Bienvenue*/i);
    expect(element).toBeInTheDocument();
});
