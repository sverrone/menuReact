import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <TextInput placeholder="Ingrese su email"
        onChangeText={props.input.onChange}
        value={props.input.value}
    />
);

const Registro = (props) => (
    <View>
        <Field name="email" component={dynamicField} />
        <Field name="password" component={dynamicField} />
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                }
            )}
        />
    </View>
);

export default reduxForm({ form: 'Registro'})(Registro);