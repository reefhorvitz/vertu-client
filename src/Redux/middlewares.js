import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import {usernameMiddleware} from "../helpers/usernameMiddleware";
const sagaMiddleware = createSagaMiddleware();

export default [sagaMiddleware, usernameMiddleware];

export function loadMiddlewares(dispatch){
    for (let saga of sagas){
        sagaMiddleware.run(saga, dispatch);
    }
}
