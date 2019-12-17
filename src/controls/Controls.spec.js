import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls';

test('Display renders properly', () => {
    render(<Controls />);
});

test('cannot be closed or opened if it is locked', () => {
    const toggle = jest.fn();
    const { getByText } = render(<Controls
        locked closed toggle={toggle}/>);
    const openGate = getByText(/open gate/i);
    fireEvent.click(openGate);
    expect(toggle).not.toHaveBeenCalled();
});