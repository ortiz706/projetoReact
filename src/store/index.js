import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? 
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ : null) || compose;

const store = createStore(reducers,  composeEnhancers(
    applyMiddleware(thunk)
));
export default store;