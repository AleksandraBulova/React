import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { AboutPage } from 'pages';

describe('AboutPage', () => {
  it('render AboutPage component', () => {
    const { getByText } = render(<AboutPage />);
    const name = getByText(/Alekdandra Bulova/i);
    expect(name).toBeInTheDocument();
    const profession = getByText(/Front End Developer/i);
    expect(profession).toBeInTheDocument();
    const decription = getByText(
      /I'm a frontend developer. I'm young ambitious used to go to my goal. I like to work in a team. Now I want to spend all my strength and energy on training and developing my professional skills. I'm ready to work hard, study and improve myself. I'm sociable easy to train hardworking accurate diligent attentive to details./i
    );
    expect(decription).toBeInTheDocument();
  });
});
