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

export default reduxForm({ form: 'Registro'})(Registro);