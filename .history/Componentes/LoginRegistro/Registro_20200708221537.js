import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import RegistroForm from './RegistroForm';

class Registro extends Component {
    registrarUsuario = (values) => {
        this.props.registro(values);
    }

    render() {
        return (
            <View>
                <RegistroForm registro={this.registrarUsuario}/>
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