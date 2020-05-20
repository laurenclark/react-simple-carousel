import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders app', () => {
    render(<App />);
    const appElement = document.querySelector('.app');
    expect(appElement).toBeInTheDocument();
});
