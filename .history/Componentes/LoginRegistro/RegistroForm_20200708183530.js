import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { autenticacion } from '../../Store/Servicios/Firebase';

const dynamicField = props => (
    <View style={styles.textInput}>
        <TextInput placeholder={props.placeholder}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
        />
        <View style={styles.linea}/>
        { props.meta.touched && props.meta.error && <Text style={styles.errors}>{ props.meta.error }</Text> }
    </View>
);

const Registro = (props) => (
    <View>
        <Field name="nombre" component={dynamicField} placeholder='Nombre' 
            keyboardType='default' autoCapitalize='sentences' secureTextEntry={false}/>
        <Field name="email" component={dynamicField} placeholder='Email' 
            keyboardType='email-address' autoCapitalize='none' secureTextEntry={false}/>
        <Field name="password" component={dynamicField} placeholder='Password de 6 a 12 caracteres alfanuméricos' 
            keyboardType='default' autoCapitalize='none' secureTextEntry={true}/>
        <Field name="password_confirmed" component={dynamicField} placeholder='Reingrese el password' 
            keyboardType='default' autoCapitalize='none' secureTextEntry={true}/>
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                    autenticacion.createUserWithEmailAndPassword(values.email, values.password)
                        .then((success) => {
                            console.log(success);
                        })
                        .catch((error) => {
                                //manejo de errores:
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(errorCode);
                                console.log(errorMessage);
                        })
                }
            )}
        />
    </View>
);

const validate = (values) => {
    const errors = {};
    
    if(!values.nombre){
        errors.nombre = 'requerido';
    }else if(values.nombre.length < 5){
        errors.nombre = 'es muy corto';
    }else if(values.nombre.length > 50){
        errors.nombre = 'no debe superar los 50 caracteres';
    }
    
    if(!values.email){
        errors.email = 'requerido';
    }else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email)){
        errors.email = 'email inválido';
    }

    if(!values.password || !/^([a-zA-Z0-9]{6,12})$/i.test(values.password)){
        errors.password = 'debe ser un valor alfanumerico de 6 a 12 caracteres';
    }

    if(values.password !== values.password_confirmed){
        errors.password_confirmed = 'el password debe coincidir';
    }

    return errors;
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16
    },
    linea: {
        backgroundColor: '#DCDCDC',
        height: 2
    },
    errors: {
        color: '#ff0000'
    }
})

export default reduxForm({ form: 'Registro', validate })(Registro);