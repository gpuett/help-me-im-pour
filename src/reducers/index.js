import barListReducer from './bar-list-reducer';
import currentDealReducer from './current-deal-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterBarList: barListReducer,
  currentDeals: currentDealReducer
});

export default rootReducer;
