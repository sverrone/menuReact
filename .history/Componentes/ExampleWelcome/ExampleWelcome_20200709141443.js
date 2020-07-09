import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class ExampleWelcome extends Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button title="Registrar"
                    onPress={props.handleSubmit(props.registro)}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
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