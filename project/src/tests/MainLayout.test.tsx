import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import React from 'react';
import MainLayout from 'layouts/mainLayout';
import Header from 'components/Header';
import Footer from 'components/Footer';

Enzyme.configure({ adapter: new Adapter() });

describe('MainLayout', () => {
  it('renders', () => {
    const component = shallow(
      <MainLayout>
        <div>Child element</div>
      </MainLayout>
    );
    expect(component.find(Header)).toHaveLength(1);
    expect(component.find(Footer)).toHaveLength(1);
  });
});
