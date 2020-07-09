import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <TextInput placeholder={props.placeholder}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.keyboardType}
        autoCapitalize={props.autoCapitalize}
        secureTextEntry={props.secureTextEntry}
    />
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

    if(!/^([a-zA-Z0-9]{6,12})$/i.test(values.password)){
        errors.nombre = 'debe ser un valor alfanumerico de 6 a 12 caracteres';
    }

    if(values.password !== values.password_confirmed){
        errors.nombre = 'el password debe coincidir';
    }

    return errors;
}

export default reduxForm({ form: 'Registro'})(Registro);