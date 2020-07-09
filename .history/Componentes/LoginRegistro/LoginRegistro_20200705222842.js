import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Login = () => <Text>Login</Text>;

const Registro = () => <Text>Registro</Text>;

const LoginRegistro = createStackNavigator({
    Login: { 
      screen: Login
     },
     Registro: {
       screen: Registro
     }
  })
  
  export default createAppContainer(LoginRegistro);