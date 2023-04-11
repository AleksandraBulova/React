import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

describe('App', () => {
  it('render App component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const buttonAbout = getByText(/About us/i);
    expect(buttonAbout).toBeInTheDocument();

    fireEvent.click(buttonAbout);
    const buttonHome = getByText(/Home/i);
    expect(buttonHome).toBeInTheDocument();
  });
});
