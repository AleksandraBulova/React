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
    render(<CardForm data={data} />);
  });
});
