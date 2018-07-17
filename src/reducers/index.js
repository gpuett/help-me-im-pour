import barListReducer from './bar-list-reducer';
import addBarReducer from './add-bar-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterBarList: barListReducer
});

export default rootReducer;
