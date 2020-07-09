import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props) => {
    return <TextInput placeholder="texto field nombre" onChangeText={props.input.onChange}/>;
}
const LoginForm = () => (
    <View>
        <Field name="nombre" component={fieldNombre} />
        <Text>Redux Form</Text>
    </View>
);

export default reduxForm({ form: 'LoginForm'})(LoginForm);