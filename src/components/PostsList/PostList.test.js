import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { testStore, findByTestAttr } from '../../../utils';
import PostsList from './PostsList';

const setup = (props = {}) => {
    const initialState = {
        postsState: {
            posts: [
                { title: 'title1', body: 'body' },
                { title: 'title2', body: 'body' },
                { title: 'title3', body: 'body' },
            ],
        },
    };
    const store = testStore(initialState);
    const wrapper = mount(
        <Provider store={store}>
            <PostsList {...props} />
        </Provider>
    );
    return wrapper;
};

describe('Post List', () => {
    let component;
    beforeEach(() => {
        component = setup();
    });

    it('Should render without failing', () => {
        const postsListComponent = findByTestAttr(component, 'PostList');
        expect(postsListComponent.length).toBe(1);
    });

    it('Should render posts from state', () => {
        const postsListComponent = findByTestAttr(component, 'PostList');
        const posts = postsListComponent.find('ListItem');
        expect(posts).toHaveLength(3);
    });
});
