import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, firebaseDatabase } from '../Servicios/Firebase';

const registroFirebase = values => autenticacion
    .createUserWithEmailAndPassword(values.email, values.password)
        .then(success => success.toJSON())

const registroFirebaseDatabase = ({ uid, email, nombre }) =>
    firebaseDatabase.ref(`usuarios/${uid}`).set({
        nombre,
        email
    });

// const loginFirebase = values => autenticacion.    

function* registrarUsuario(values){
    yield call(registroFirebase, values.datos);
}

function* loginUsuario(values){
    yield call(loginFirebase, values.datos);
}

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
    yield takeEvery ('LOGIN', loginUsuario)
}