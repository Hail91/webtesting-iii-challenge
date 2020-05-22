import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';
import '@testing-library/jest-dom/extend-expect';

test('Display renders properly', () => {
    render(<Display />);
});

test('Display if gate is unlocked by default', () => {
    const { getByText } = render(<Display />);
    getByText(/unlocked/i);
});

test('Display if gate is opened by default', () => {
    const { getByText } = render(<Display />);
    getByText(/open/i);
});

test('Display if gate is locked', () => {
    const { getByText } = render(<Display />);
    getByText(/locked/i);
});

test('displays Closed if the closed prop is true and Open if otherwise', () => {
    const { getByText, rerender } = render(<Display closed />);
    getByText(/closed/i);

    rerender(<Display closed={false}/>)
    getByText(/open/i);
});

test('displays Locked if the locked prop is true and Unlocked if otherwise', () => {
    const { getByText, rerender } = render(<Display locked />);
    getByText(/locked/i);

    rerender(<Display locked={false}/>);
    getByText(/unlocked/i);
});

test('when locked or closed use the red-led class', () => {
    const { getByTestId } = render(<Display locked />);
    const lockedClosed = getByTestId('locked-closed')

    expect(lockedClosed).toHaveClass('led red-led')
});

test('when unlocked or open use the green-led class', () => {
    const { getByTestId } = render(<Display locked={false} />);
    const unlockedOpen = getByTestId('unlocked-open')

    expect(unlockedOpen).toHaveClass('led green-led')
});
















