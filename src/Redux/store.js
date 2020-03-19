import {applyMiddleware, createStore} from "redux";
import { routerMiddleware } from 'connected-react-router/immutable'
import createReducer from './reducers';
import middlewares, {loadMiddlewares} from "./middlewares";
import {composeWithDevTools} from "redux-devtools-extension";
import {createBrowserHistory} from "history";

export const history = createBrowserHistory();
const reducers = createReducer(history);

const store = createStore(reducers, composeWithDevTools(applyMiddleware(
    ...middlewares,
    routerMiddleware(history), // for dispatching history actions
)));
loadMiddlewares(store.dispatch);
export default store;