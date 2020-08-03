import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';

class Login extends Component {
    constructor(props){
        super(props)
        this.boton = React.createRef();
        this.state = {
            loading: false
        }
    }

    loginUsuario = (values) => {
        console.log('loginUsuario')
        console.log(this.boton.current)
        this.setState({
            loading: true
        })
        this.props.login(values);
    }

    render() {
        return (
            <View>
                <LoginForm login={this.loginUsuario} boton={this.boton} loading={this.state.loading}/>
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