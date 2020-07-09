import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

const Login = () => <Text>Login</Text>;

const Registro = () => <Text>Registro</Text>;

const LoginRegistro = StackNavigator({
    Login: {
        screen: Login,
    },
    Registro: {
        screen: Registro,
    },
});

export default { LoginRegistro };