import { takeEvery } from 'redux-saga/effects';

export default function* initSagaFunctions(){
    yield takeEvety ('REGISTRO', registrar)
}