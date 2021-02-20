import moxios from 'moxios';
import { testStore } from '../../utils';
import { fetchPostAction } from './postsAction';

describe('Fetch posts action', () => {
    // replaces axios
    beforeEach(() => {
        moxios.install();
    });
    // re-install axios
    afterEach(() => {
        moxios.uninstall();
    });

    test('Store is updated correctly', () => {
        const expectedState = [
            { title: 'title 1', description: 'description' },
            { title: 'title 2', description: 'description' },
            { title: 'title 3', description: 'description' },
        ];
        const store = testStore();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState,
            });
        });

        return store.dispatch(fetchPostAction()).then(() => {
            const newState = store.getState();
            expect(newState.postsState.posts).toBe(expectedState);
        });
    });
});
