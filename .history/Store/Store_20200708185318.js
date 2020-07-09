import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';

// const reducerPrueba = (state = [], action) => state;

const reducers = combineReducers({
    // reducerPrueba,
    form
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export default store;