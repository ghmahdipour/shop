import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../store/reducers';

const composeEnhancers =
  process.env.NODE_ENN === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;