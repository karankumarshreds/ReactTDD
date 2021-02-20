import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr, testStore } from '../../../utils';
import Button from './Button';
import { Provider } from 'react-redux';

// The difference between shallow() and mount() is
// that shallow() tests components in isolation from
//  the child components they render while mount() goes
//  deeper and tests a component's children.

const setup = (props = {}) => {
    const initialState = {
        postsState: {
            posts: [
                { title: 'title1', description: 'description' },
                { title: 'title2', description: 'description' },
                { title: 'title3', description: 'description' },
            ],
        },
    };
    const store = testStore(initialState);
    const wrapper = mount(
        <Provider store={store}>
            <Button {...props} />
        </Provider>
    );
    return wrapper;
};

describe('Button Component', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });

    it('Should render without failing', () => {
        // assertions
        const buttonComponent = findByTestAttr(component, 'Button');
        expect(buttonComponent.length).toEqual(1);
    });
});
