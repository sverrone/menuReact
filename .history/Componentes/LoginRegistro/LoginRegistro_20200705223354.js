import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Login = () => <Text>Login1</Text>;

const Registro = () => <Text>Registro1</Text>;

const LoginRegistro = createStackNavigator({
    Login: { 
      screen: Login
     },
     Registro: {
       screen: Registro
     }
  });
  
  export default createAppContainer(LoginRegistro);