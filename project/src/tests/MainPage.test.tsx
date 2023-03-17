import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, ShallowWrapper } from 'enzyme';
import { render } from '@testing-library/react';
import React from 'react';
import MainPage from 'pages/MainPage';

Enzyme.configure({ adapter: new Adapter() });

test('renders MainPage', () => {
  render(<MainPage />);
});

describe('MainPage', () => {
  let component: ShallowWrapper;

  beforeAll(() => {
    localStorage.setItem('search', 'value');
    component = shallow(<MainPage />);
  });

  afterAll(() => {
    localStorage.clear();
  });

  it('load the search', () => {
    expect(component.state('search')).toEqual('value');
  });

  it('save the search', () => {
    expect(localStorage.getItem('search')).toEqual('value');
    component.unmount();
  });

  it('update the search', () => {
    const component = shallow<MainPage>(<MainPage />);
    const setSearch = component.instance().setSearch;
    setSearch('value');
    expect(component.state().search).toEqual('value');
  });
});
