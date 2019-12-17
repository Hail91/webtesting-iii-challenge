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

test('the closed toggle button is disabled if the gate is locked', () => {
    const toggleClosed = jest.fn();
    const { getByTestId } = render(<Controls 
        locked closed toggleClosed={toggleClosed} />);
    const closedIsDisabled = getByTestId('toggle-closed');
    fireEvent.click(closedIsDisabled);
    expect(toggleClosed).not.toHaveBeenCalled();
});

test('the locked toggle button is disabled if the gate is open', () => {
    const toggleLocked = jest.fn();
    const { getByTestId } = render(<Controls 
        locked closed toggleLocked={toggleLocked}/>);
    const lockedIsDisabled = getByTestId('toggle-locked');
    fireEvent.click(lockedIsDisabled);
    expect(toggleLocked).toHaveBeenCalled();
});




