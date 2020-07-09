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

const loginFirebase = values => autenticacion
    .signInWithEmailAndPassword(values.email, values.password)
    .then(success => success)

function* registrarUsuario(values){
    try{
        const registro = yield call(registroFirebase, values.datos);
        const uid = registro.user.uid;
        const email = registro.user.email;
        const { datos: { nombre } } = values;
        yield call(registroFirebaseDatabase, {uid, nombre, email})
    }catch(error){
        console.log(error);
    }
}

function* loginUsuario(values){
    try{
        const login = yield call(loginFirebase, values.datos);
        const uid = login.user.uid;
        const { datos: { nombre, email } } = values;
        console.log(uid);
        console.log(login);
    }catch(error){
        console.log(error);
    }
}

export default function* initSagaFunctions(){
    yield takeEvery ('REGISTRO', registrarUsuario)
    yield takeEvery ('LOGIN', loginUsuario)
}