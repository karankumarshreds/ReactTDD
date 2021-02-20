import { applyMiddleware, createStore } from 'redux';
import reducer from '../src/reducers';
import thunk from 'redux-thunk';

// find the element by their data-test attribute
export const findByTestAttr = (component, attr) => {
    const element = component.find(`[data-test='${attr}']`);
    return element;
};

// create a function to create a fresh test store
export const testStore = (initialState = {}) => {
    const store = createStore(reducer, initialState, applyMiddleware(thunk));
    return store;
};
