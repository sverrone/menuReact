import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <TextInput placeholder={props.placeholder}
        onChangeText={props.input.onChange}
        value={props.input.value}
        autoCapitalize={(props.input.name === 'email' || props.input.name === 'password' || props.input.name === 'password_confirmed') ? 'none' : 'sentences'}
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'password_confirmed')}
    />
);

const Registro = (props) => (
    <View>
        <Field name="nombre" component={dynamicField} placeholder='Nombre' keyboardType='default'/>
        <Field name="email" component={dynamicField} placeholder='Email' keyboardType='email'/>
        <Field name="password" component={dynamicField} placeholder='Password de 6 a 12 caracteres alfanuméricos' keyboardType='default'/>
        <Field name="password_confirmed" component={dynamicField} placeholder='Reingrese el password' keyboardType='default'/>
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                }
            )}
        />
    </View>
);

export default reduxForm({ form: 'Registro'})(Registro);