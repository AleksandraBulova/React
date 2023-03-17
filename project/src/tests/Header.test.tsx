import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import Header from 'components/Header';

Enzyme.configure({ adapter: new Adapter() });

describe('Header', () => {
  let component: ShallowWrapper;

  beforeEach(() => {
    component = shallow(<Header />);
  });

  afterEach(() => {
    component.unmount();
  });

  it('renders a header element', () => {
    expect(component.find('header')).toHaveLength(1);
    expect(component.find('h1').text()).toEqual('Home');
  });

  it('updates the name Home', () => {
    component.find('#button-home').simulate('click');
    expect(component.state('name')).toEqual('Home');
    expect(component.find('h1').text()).toEqual('Home');
  });

  it('updates the name About', () => {
    component.find('#button-about-us').simulate('click');
    expect(component.state('name')).toEqual('About US');
    expect(component.find('h1').text()).toEqual('About US');
  });

  it('sets the name', () => {
    const name = 'About US';
    localStorage.setItem('namePage', name);
    expect(component.state('name')).toEqual(name);
  });

  it('saves the name', () => {
    const name = 'About US';
    component.setState({ name });
    expect(localStorage.getItem('namePage')).toEqual(name);
  });
});
