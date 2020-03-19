import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
const sagaMiddleware = createSagaMiddleware();

export default [sagaMiddleware];

export function loadMiddlewares(dispatch){
    for (let saga of sagas){
        sagaMiddleware.run(saga, dispatch);
    }
}
