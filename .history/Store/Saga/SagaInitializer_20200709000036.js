import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, firebaseDatabase } from '../Servicios/Firebase';

const registroFirebase = values => autenticacion
    .createUserWithEmailAndPassword(values.email, values.password)
    .then(success => success)

const registroFirebaseDatabase = ({ uid, nombre, email }) =>
    firebaseDatabase.ref(`usuarios/${uid}`).set({
        nombre,
        email
    });

// const loginFirebase = values => autenticacion.    

function* registrarUsuario(values){
    try{
        const registro = yield call(registroFirebase, values.datos);
        console.log('registro:');
        console.log(registro);
        console.log(registro.user.uid);
        console.log(registro.user.email);
        // const { email, uid } = registro;
        // const { user: { email1, uid1 } } = registro;
        const { datos: { nombre } } = values;
        console.log({uid, nombre, email});
        yield call(registroFirebaseDatabase, {uid, nombre, email})
    }catch(error){
        console.log(error);
    }
}

function* loginUsuario(values){
    yield call(loginFirebase, values.datos);
}

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
    yield takeEvery ('LOGIN', loginUsuario)
}