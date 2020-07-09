import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form';

// const reducerPrueba = (state = [], action) => state;

const reducers = combineReducers({
    // reducerPrueba,
    form
});

const store = createStore(reducers);

export default store;