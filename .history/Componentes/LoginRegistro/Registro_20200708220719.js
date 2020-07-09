import React, { Component } from 'react';
import { View } from 'react-native';
import RegistroForm from './RegistroForm';
import { connect } from 'react-redux';

class Registro extends Component {
    registro = (values) => {
        this.props.registro(values);
    }

    render() {
        return (
            <View>
                <RegistroForm registro={this.registro}/>
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