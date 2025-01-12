import {combineReducers} from 'redux';
import authSlice from './features/authSlice.ts';


const rootReducer = combineReducers({
    auth: authSlice,
});

export default rootReducer;