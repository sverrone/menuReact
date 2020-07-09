import React, { Component } from 'react';
import { Text, View } from 'react-native';
import RegistroForm from './RegistroForm';
import { connect } from 'react-redux';

class Registro extends Component {
    render() {
        return (
            <View>
                <RegistroForm/>
            </View>
        )
    }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    registro: (values) => {
        dispatch({ type: 'REGISTRO', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Registro);