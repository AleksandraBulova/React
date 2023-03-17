import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import React from 'react';
import SectionProducts from 'components/Section/SectionProducts';
import { products } from 'products';
import ProductCard from 'components/ProductCard';
import { Product } from 'types';

Enzyme.configure({ adapter: new Adapter() });

test('renders SectionProducts', () => {
  render(<SectionProducts products={products} />);
});

describe('SectionProducts', () => {
  it('render "No products found!" for empty', () => {
    const productsTest: Product[] = [];
    const component = shallow(<SectionProducts products={productsTest} />);
    expect(component.find('.text_no_products')).toHaveLength(1);
    expect(component.find('.text_no_products').text()).toEqual('No products found!');
  });

  it('render ProductCard component for each product', () => {
    const productsTest = products;
    const component = shallow(<SectionProducts products={productsTest} />);
    expect(component.find(ProductCard)).toHaveLength(productsTest.length);
  });
});
