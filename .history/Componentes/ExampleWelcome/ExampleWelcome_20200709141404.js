import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ExampleWelcome extends Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>
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
                dispatch({ type: 'INIT_SESSION', usuario });
            }else{
                console.log('No hay sesión');
                dispatch({ type: 'CLOSE_SESSION' });
            }
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleWelcome);