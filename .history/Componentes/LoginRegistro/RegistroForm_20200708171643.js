import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <TextInput placeholder={props.placeholder}
        onChangeText={props.input.onChange}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize={(props.input.name === 'email' || props.input.name === 'password' || props.input.name === 'password_confirmed') ? 'none' : 'sentences'}
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'password_confirmed')}
    />
);

const Registro = (props) => (
    <View>
        <Field name="nombre" component={dynamicField} placeholder='Nombre'/>
        <Field name="email" component={dynamicField} placeholder='Email'/>
        <Field name="password" component={dynamicField} placeholder='Password de 6 a 12 caracteres alfanuméricos'/>
        <Field name="password_confirmed" component={dynamicField} placeholder='Reingrese el password'/>
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                }
            )}
        />
    </View>
);

export default reduxForm({ form: 'Registro'})(Registro);