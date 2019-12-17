import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Display renders properly', () => {
    render(<Controls />);
});

test('cannot be closed or opened if it is locked', () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls
        locked closed toggle={toggle} />);
    const openGate = getByText(/open gate/i);
    fireEvent.click(openGate);
    expect(toggle).not.toHaveBeenCalled();
});

test('can be opened or closed if it is unlocked', () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls 
        locked={false} closed={false} toggle={toggle} />);
    const closeGate = getByText(/close gate/i);
    fireEvent.click(closeGate);
    expect(toggle).not.toHaveBeenCalled();
});

