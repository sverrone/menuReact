import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { autenticacion } from '../../Store/Servicios/Firebase';

class ExampleWelcome extends Component {
    render() {
        return (
            <View>
                <Text>Welcome</Text>
                <Button title="Salir"
                    onPress={() => {autenticacion.signOut()}}
                />
            </View>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    closeSession: () => {
        
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExampleWelcome);