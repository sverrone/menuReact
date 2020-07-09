import React from 'react';
import { View, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const dynamicField = props => (
    <View style={styles.textInput}>
        <TextInput placeholder={props.placeholder}
            onChangeText={props.input.onChange}
            value={props.input.value}
            keyboardType={props.keyboardType}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props.secureTextEntry}
        />
        <View style={styles.linea}/>
        { props.meta.touched && props.meta.error && <Text style={styles.errors}>{ props.meta.error }</Text> }
    </View>
);

const LoginForm = (props) => (
    <View>
        <Field name="email" component={dynamicField} placeholder='Email' 
            keyboardType='email-address' autoCapitalize='none' secureTextEntry={false}/>
        <Field name="password" component={dynamicField} placeholder='Password' 
            keyboardType='default' autoCapitalize='none' secureTextEntry={true}/>
        <Button title="Login"
            onPress={props.handleSubmit(props.login)}
        />
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