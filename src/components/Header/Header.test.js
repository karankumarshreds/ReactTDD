import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from '../../../utils';

// targetting the component to test
const setup = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    // instantiating new component for every test
    component = setup();
  });

  it('Should render without failing', () => {
    const headerComponent = findByTestAttr(component, 'Header');
    expect(headerComponent.length).toBe(1);
  });

  it('Should render the brandname', () => {
    const brandName = findByTestAttr(component, 'BrandName');
    expect(brandName.length).toEqual(1);
  });
});
