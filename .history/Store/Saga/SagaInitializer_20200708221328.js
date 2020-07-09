import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion } from '../Servicios/Firebase';

const registroFirebase = values => autenticacion
    .createUserWithEmailAndPassword(values.email, values.password)
        .then((success) => {
            console.log(success);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        })

function* registrarUsuario(values){
    yield call(registroFirebase, values.datos);
}

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
}