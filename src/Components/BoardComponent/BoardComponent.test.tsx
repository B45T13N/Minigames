import React, { DOMElement } from 'react';
import { render, screen } from '@testing-library/react';
import BoardComponent from './BoardComponent';
import { link } from 'fs';
import { act } from 'react-dom/test-utils';

test('renders color li', () => {
    act(() => {
        render(<BoardComponent />);
    })
});
