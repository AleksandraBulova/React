import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { CardForm } from 'components';
import photo from '../assets/images/Photo.jpg';

describe('CardForm', () => {
  it('render CardForm component', () => {
    const data = {
      name: 'Rosado',
      brand: 'Finca Nueva',
      description: 'Rose, dry, 0.75l.',
      price: '25',
      date: '31.03.2023',
      category: 'Wine',
      strength: '0% - 10%',
      photo: photo,
    };

    const { getByText } = render(<CardForm data={data} />);

    const name = getByText(/Rosado/i);
    expect(name).toBeInTheDocument();
    const brand = getByText(/Finca Nueva/i);
    expect(brand).toBeInTheDocument();
    const description = getByText(/Rose, dry, 0.75l./i);
    expect(description).toBeInTheDocument();
    const price = getByText(/25/i);
    expect(price).toBeInTheDocument();
    const date = getByText(/31.03.2023/i);
    expect(date).toBeInTheDocument();
    const category = getByText(/Wine/i);
    expect(category).toBeInTheDocument();
    const strength = getByText(/0% - 10%/i);
    expect(strength).toBeInTheDocument();
  });
});
