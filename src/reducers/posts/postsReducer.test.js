import { shallow } from 'enzyme';
import { GET_POSTS } from '../../actions/types';
import { postsReducer } from './postsReducer';

describe('Posts Reducer', () => {
    // assertions
    it('Should return default state', () => {
        // should return default state if type is not matched
        const newState = postsReducer(undefined, { type: 'RANDOM_TYPE' });
        expect(newState.posts.length).toEqual(0);
    });

    it('Should return updated state', () => {
        // mocking the action with payload
        const action = { type: 'GET_POSTS', payload: ['a', 'b', 'c'] };
        const updatedState = postsReducer(undefined, action);
        expect(updatedState.posts.length).toEqual(3);
    });
});
