import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RegistroForm from './RegistroForm';

class Registro extends Component {
    render() {
        return (
            <View>
                <Text> Registro componente </Text>
                <RegistroForm/>
            </View>
        )
    }
}

export default Registro;