import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import React from 'react';
import SectionHeader from 'components/Section/SectionHeader';

Enzyme.configure({ adapter: new Adapter() });

describe('SectionHeader', () => {
  it('call setSearch when value is changed', () => {
    const setSearch = jest.fn();
    const component = shallow(<SectionHeader search="" setSearch={setSearch} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'value' } });
    expect(setSearch).toHaveBeenCalledWith('value');
  });

  it('render header with search', () => {
    const setSearch = jest.fn();
    const component = shallow(<SectionHeader search="" setSearch={setSearch} />);
    expect(component.find('header').length).toBe(1);
    expect(component.find('h3').text()).toBe('Search: ');
    expect(component.find('input').props().value).toBe('');
    expect(component.find('input').props().placeholder).toBe('  search product');
  });
});
