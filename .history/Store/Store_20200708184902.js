import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as form } from 'redux-form';

// const reducerPrueba = (state = [], action) => state;

const reducers = combineReducers({
    // reducerPrueba,
    form
});

const primerMiddleware = store => next => (action) => {
    console.log('primerMiddleware');
    next(action);
}

const ultimoMiddleware = store => next => (action) => {
    console.log('ultimoMiddleware');
    next(action);
}

const store = createStore(reducers, applyMiddleware(primerMiddleware, ultimoMiddleware));

export default store;