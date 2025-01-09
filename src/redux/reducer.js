import {combineReducers} from 'redux';
import authSlice from './features/authSlice';


const rootReducer = combineReducers({
    auth: authSlice,
});

export default rootReducer;