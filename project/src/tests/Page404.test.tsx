import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Page404 } from 'pages';

describe('Page404', () => {
  it('render Page404 component', () => {
    const { getByText } = render(<Page404 />);
    const numberErr = getByText(/404/i);
    expect(numberErr).toBeInTheDocument();
    const descriptionErr = getByText(/Page not found!/i);
    expect(descriptionErr).toBeInTheDocument();
  });
});
