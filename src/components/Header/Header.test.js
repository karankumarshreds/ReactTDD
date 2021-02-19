import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {
  it('It should render without failing', () => {
    const component = shallow(<Header />);
    const headerComponent = component.find('.Header');
    expect(headerComponent.length).toBe(1);
  });
});
