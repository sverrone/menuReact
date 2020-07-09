import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import initSagaFunctions from './Saga/SagaInitializer';

// const reducerPrueba = (state = [], action) => state;

const reducers = combineReducers({
    // reducerPrueba,
    form
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(initSagaFunctions);

export default store;