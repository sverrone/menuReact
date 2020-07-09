import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
    <TextInput placeholder="Ingrese su nombre"
        onChangeText={props.input.onChange}
        value={props.input.value}
    />
);

const Registro = (props) => (
    <View>
        <Field name="nombre" component={fieldNombre} />
        <Button title="Registrar"
            onPress={props.handleSubmit( (values) => {
                    console.log(values);
                }
            )}
        />
    </View>
);

export default reduxForm({ form: 'Registro'})(Registro);