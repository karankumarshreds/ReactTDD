import { shallow } from 'enzyme';
import { GET_POSTS } from '../../actions/types';
import { postsReducer } from './postsReducer';

describe('Posts Reducer', () => {
    it('Should return default state', () => {
        const newState = postsReducer(undefined, 'RANDOM_TYPE');
        expect(newState.posts.length).toEqual(0);
    });
});
