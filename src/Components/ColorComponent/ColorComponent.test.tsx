import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import ColorComponent from './ColorComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders color li', () => {
    act(() => {
        render(<ColorComponent id={1} color="blue" image_path='./images/blue_pin.svg' />);
    })
});
