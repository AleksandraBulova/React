import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from 'App';

describe('App', () => {
  it('render App component', () => {
    const { getByText } = render(<App />);
    const buttonAbout = getByText(/About us/i);
    expect(buttonAbout).toBeInTheDocument();

    fireEvent.click(buttonAbout);
    const buttonHome = getByText(/Home/i);
    expect(buttonHome).toBeInTheDocument();
  });
});
