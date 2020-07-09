import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from '../Servicios/Firebase';
import TabStackLoginRegistro from './Componentes/LoginRegistro/TabStackLoginRegistro';
import ExampleWelcome from '../ExampleWelcome/ExampleWelcome';

class StartSelector extends Component {
    loginUsuario = (values) => {
        this.props.login(values);
    }

    render() {
        return (
            <View>
                { this.props.usuario ? <TabStackLoginRegistro/> : <ExampleWelcome/> }
            </View>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    login: (values) => {
        dispatch({ type: 'LOGIN', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);