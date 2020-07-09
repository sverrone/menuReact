import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <View>
                <LoginForm/>
            </View>
        )
    }
}

export default Login;