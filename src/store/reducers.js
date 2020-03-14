import {combineReducers} from 'redux';
import { reducer } from '../views/login/redux';

const reducers = combineReducers({
    login: reducer
});

export default reducers;