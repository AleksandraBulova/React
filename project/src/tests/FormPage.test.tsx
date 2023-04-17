import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { FormPage } from 'pages';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

describe('FormPage', () => {
  it('render AboutPage component', async () => {
    const { getByText, getByPlaceholderText } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    const name = getByText(/Name:/i);
    expect(name).toBeInTheDocument();
    const brand = getByText(/Brand:/i);
    expect(brand).toBeInTheDocument();
    const decription = getByText(/Description:/i);
    expect(decription).toBeInTheDocument();
    const price = getByText(/Price:/i);
    expect(price).toBeInTheDocument();
    const date = getByText(/Date release:/i);
    expect(date).toBeInTheDocument();
    const category = getByText(/Category:/i);
    expect(category).toBeInTheDocument();
    const photo = getByText(/Photo:/i);
    expect(photo).toBeInTheDocument();
    const strength = getByText(/Alcohol strength:/i);
    expect(strength).toBeInTheDocument();
    const agreement = getByText(/Agreement:/i);
    expect(agreement).toBeInTheDocument();
    const submit = getByText(/Submit/i);
    expect(submit).toBeInTheDocument();

    const namePlaceholder = getByPlaceholderText(/name alcohol/i) as HTMLInputElement;
    expect(namePlaceholder).toBeInTheDocument();
    fireEvent.change(namePlaceholder, { target: { value: 'Rosado' } });
    expect(namePlaceholder.value).toBe('Rosado');
    fireEvent.change(namePlaceholder, { target: { value: 'rosado' } });

    const brandPlaceholder = getByPlaceholderText(/brand alcohol/i) as HTMLInputElement;
    expect(brandPlaceholder).toBeInTheDocument();
    fireEvent.change(brandPlaceholder, { target: { value: 'Finca Nueva' } });
    expect(brandPlaceholder.value).toBe('Finca Nueva');

    const descriptionPlaceholder = getByPlaceholderText(/description alcohol/i) as HTMLInputElement;
    expect(descriptionPlaceholder).toBeInTheDocument();
    fireEvent.change(descriptionPlaceholder, { target: { value: 'Rose, dry, 0.75l.' } });
    expect(descriptionPlaceholder.value).toBe('Rose, dry, 0.75l.');
    fireEvent.change(descriptionPlaceholder, { target: { value: 'Rose' } });

    const pricePlaceholder = getByPlaceholderText(/price alcohol/i) as HTMLInputElement;
    expect(pricePlaceholder).toBeInTheDocument();
    fireEvent.change(pricePlaceholder, { target: { value: 25 } });
    expect(pricePlaceholder.value).toBe('25');
    fireEvent.change(pricePlaceholder, { target: { value: -25 } });

    const datePlaceholder = getByPlaceholderText(/date alcohol/i) as HTMLInputElement;
    expect(datePlaceholder).toBeInTheDocument();
    fireEvent.change(datePlaceholder, { target: { value: '2023-03-24' } });
    expect(datePlaceholder.value).toBe('2023-03-24');

    await act(async () => fireEvent.click(submit));
    const nameErr = screen.getByText(/1st capital letter/i);
    expect(nameErr).toBeInTheDocument();

    const descriptionErr = screen.getByText(/min 2 words/i);
    expect(descriptionErr).toBeInTheDocument();

    const priceErr = screen.getByText(/positive numbers/i);
    expect(priceErr).toBeInTheDocument();
  });
});
