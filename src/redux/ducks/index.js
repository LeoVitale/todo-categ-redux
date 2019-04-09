import { combineReducers } from 'redux';
import categories from './categories';
import todos from './todos';

const rootReducer = combineReducers({
  categories,
  todos
});

export default rootReducer;
