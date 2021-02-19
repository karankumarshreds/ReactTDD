import { combineReducers } from 'redux';
import { successReducer } from './successReducer';

export default combineReducer({
  successState: successReducer,
});
