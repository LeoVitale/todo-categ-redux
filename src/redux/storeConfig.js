import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './ducks/index';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

const configureStore = initialState => {
  const store = createStore(rootReducer, initialState, composeEnhancers());

  return store;
};

export default configureStore;
