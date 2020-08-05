import React from 'react';
import { shallow } from 'enzyme';
import Paginator from './Paginator';

describe('<Paginator />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Paginator />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
