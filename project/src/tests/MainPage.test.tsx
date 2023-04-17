import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MainPage } from 'pages';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

describe('MainPage', () => {
  it('render MainPage component', () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
    const nameOfInput = getByText(/Search/i);
    expect(nameOfInput).toBeInTheDocument();

    const input = getByPlaceholderText(/search product/i) as HTMLInputElement;
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: 'Some value in the input' } });
    expect(input.value).toBe('Some value in the input');
  });
});
