import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import PinPlaceComponent from './PinPlaceComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders color li', () => {
    act(() => {
        render(<PinPlaceComponent id={"1"} />);
    })
});
