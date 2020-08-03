import React from 'react';
import { View, StyleSheet, ProgressBarAndroid } from 'react-native';
import { Button, TextInput, HelperText, Text } from 'react-native-paper';
import { Field, reduxForm } from 'redux-form';


const dynamicField = props => (
    <View>
        <TextInput label={props.label}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
            error={props.meta.touched && props.meta.error}
        />
        <HelperText type="error" visible={props.meta.touched && props.meta.error} >
            { props.meta.error }
        </HelperText>
       </View>
);

const LoginForm = (props) => (
    <View>
        <Field name="email" component={dynamicField} label='Email' 
            keyboardType='email-address' autoCapitalize='none' secureTextEntry={false} />
        <Field name="password" component={dynamicField} label='Password' 
            keyboardType='default' autoCapitalize='none' secureTextEntry={true} />

        <Button title="forgot" mode="text" compact uppercase={false} >
                Olvidaste tu clave?
        </Button>
        
        <Button title="Login" mode="contained" raised theme={{ roundness: 10 }} 
            onPress={props.handleSubmit(props.login)} loading={props.loading} ref={props.boton}>
                Login
        </Button>
        
        <Button title="registrarse" mode="text" compact uppercase={false}>
            No tenes una cuenta? Registrate
        </Button>
    </View>
);

const validate = (values) => {
    const errors = {};
    if(!values.email){
        errors.email = 'requerido';
    }else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email)){
        errors.email = 'email inválido';
    }

    if(!values.password){
        errors.password = 'requerido';
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

export default reduxForm({ form: 'LoginForm', validate })(LoginForm);