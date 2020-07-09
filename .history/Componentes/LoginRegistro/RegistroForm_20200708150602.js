import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <TextInput placeholder="Ingrese su email"
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize={(props.input.name === 'email' || props.input.name === 'password' || props.input.name === 'password_confirmed') ? 'none' : ''}
        secureTextEntry={}
    />
);

const Registro = (props) => (
    <View>
        <Field name="nombre" component={dynamicField} ph='Nombre'/>
        <Field name="email" component={dynamicField} ph='Email'/>
        <Field name="password" component={dynamicField} ph='Password de 6 a 12 caracteres alfanuméricos'/>
        <Field name="password_confirmed" component={dynamicField} ph='Reingrese el password'/>
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                }
            )}
        />
    </View>
);

export default reduxForm({ form: 'Registro'})(Registro);