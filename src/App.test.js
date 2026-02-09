// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PackageJson title', () => {
    render(<App />);
    const titleElement = screen.getByText(/PackageJson/i);
    expect(titleElement).toBeInTheDocument();
});
