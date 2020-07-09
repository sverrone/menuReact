import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = props => (
    <TextInput placeholder="Ingrese su nombre"
        onChangeText={props.input.onChange}
        value={props.input.value}
    />
);

const LoginForm = (props) => (
    <View>
        <Field name="nombre" component={fieldNombre} />
        <Button title="Login"
            onPress={props.handleSubmit(props.login)}
        />
    </View>
);

export default reduxForm({ form: 'LoginForm'})(LoginForm);