import { render } from '@testing-library/react';
import React from 'react';
import ProductCard from 'components/ProductCard';
import { products } from 'products';

test('renders ProductCard', () => {
  products.map((product) => render(<ProductCard product={product} />));
});
