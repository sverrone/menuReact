import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RegistroForm from './RegistroForm';

class Registro extends Component {
    render() {
        return (
            <View>
                <Text> Login componente </Text>
                <LoginForm/>
            </View>
        )
    }
}

export default Login;