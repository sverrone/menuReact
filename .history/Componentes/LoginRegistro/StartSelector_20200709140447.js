import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from '../../Store/Servicios/Firebase';
import TabStackLoginRegistro from './TabStackLoginRegistro';
import ExampleWelcome from '../ExampleWelcome/ExampleWelcome';

class StartSelector extends Component {
    componentDidMount(){
        this.props.autenticacion();
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
    usuario: state.sessionReducer
})

const mapDispatchToProps = dispatch => ({
    autenticacion: () => {
        autenticacion.onAuthStateChanged((usuario) => {
            if(usuario){
                console.log(usuario);
                dispatch({ type: 'INIT_SESSION', payload: usuario });
            }else{
                console.log('No hay sesión');
                dispatch(closeSessionAction());
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(StartSelector);