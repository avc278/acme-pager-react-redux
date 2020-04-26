import { createStore, applyMiddleware } from 'redux';
import thunks from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reducer } from './reducers';


const store = createStore(reducer, applyMiddleware(
    thunks,
    createLogger({ collapsed: true }),
));

export default store;
