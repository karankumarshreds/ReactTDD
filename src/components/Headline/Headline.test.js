import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils';
import Headline from './Headline';

// targetting the component we need to test
const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe('Headline Component', () => {
  let component;
  beforeEach(() => {
    component = setup({ title: 'title', description: 'description' });
  });

  it('Renders properly without failing', () => {
    const headlineComponent = findByTestAttr(component, 'Headline');
    expect(headlineComponent.length).toBe(1);
  });
});
