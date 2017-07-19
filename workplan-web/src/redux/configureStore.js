import {createStore, applyMiddleware, combineReducers} from 'redux';
import createLogger from 'redux-logger';
import authentication from "./modules/authentication";

const loggerMiddleware = createLogger;

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);
const reducer = combineReducers({
    authentication
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;