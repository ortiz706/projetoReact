import {combineReducers} from 'redux';
import reducer from '../views/login/redux/loginReducer';

const reducers = combineReducers({
    login: reducer
});

export default reducers;