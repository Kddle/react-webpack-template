import { combineReducers, createStore } from 'redux';
import { appReducer } from './app/reducers';

const mainReducer = combineReducers({
    app: appReducer
});

const store = createStore(mainReducer);
export default store;