import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Login extends Component {
    render() {
        return (
            <View>
                <LoginForm/>
            </View>
        )
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    registro: (values) => {
        dispatch({ type: 'LOGIN', datos: values })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);