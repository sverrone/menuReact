import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import initSagaFunctions from './Saga/SagaInitializer';

const sessionReducer = (state = null, action) => {
    switch(action.type){
        case 'INIT_SESSION':
            return action.usuario;
        case 'CLOSE_SESSION':
            return null;
        default:
            return state;
    }
}

const reducers = combineReducers({
    sessionReducer,
    form
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(initSagaFunctions);

export default store;