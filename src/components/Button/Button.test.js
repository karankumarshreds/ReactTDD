import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr, testStore } from '../../../utils';
import * as redux from 'react-redux';
// import { fetchPostAction } from '../../actions/postsAction';
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
    let spy;
    // let mockDispatch = jest.fn();

    beforeEach(() => {
        component = setup();
        // spy = jest.spyOn(redux, 'useDispatch');
        // spy.mockReturnValue({ dispatch: mockDispatch });
    });

    it('Should render without failing', () => {
        const buttonComponent = findByTestAttr(component, 'Button');
        expect(buttonComponent.length).toEqual(1);
    });

    it('Should dispatch action when clicked', () => {
        // let mockAction = jest.fn();
        // const buttonComponent = findByTestAttr(component, 'Button');
        // jest.doMock('../../actions/postsAction', () => ({
        //     fetchPostAction: mockAction,
        // }));
        // buttonComponent.simulate('click');
        // // expect(mockDispatch).toHaveBeenCalledTimes(1);
        // expect(mockAction).toHaveBeenCalledTimes(1);
        const dispatchSpy = jest.spyOn(redux, 'useDispatch');
        dispatchSpy.mockReturnValue('x');
        const buttonComponent = findByTestAttr(component, 'Button');
        buttonComponent.simulate('click');
        expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });
});
