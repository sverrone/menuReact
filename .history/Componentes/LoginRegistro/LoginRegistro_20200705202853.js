import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

const SignIn = () => <Text>SignIn</Text>

const LoginRegistro = StackNavigator({
    SignIn: {
        screen: SignIn
    }
})

export { LoginRegistro }