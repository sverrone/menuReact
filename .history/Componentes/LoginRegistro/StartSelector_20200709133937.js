import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Login extends Component {
    loginUsuario = (values) => {
        this.props.login(values);
    }

    render() {
        return (
            <View>
                <LoginForm login={this.loginUsuario}/>
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