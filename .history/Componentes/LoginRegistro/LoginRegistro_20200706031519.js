import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// const Login = () => <Text>Login1</Text>;
// 
// const Registro = () => <Text>Registro1</Text>;
// 
// const LoginRegistro = createStackNavigator({
//     Login: { 
//       screen: Login
//      },
//      Registro: {
//        screen: Registro
//      }
//   });
//   
//   export default createAppContainer(LoginRegistro);

function Login({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
        />
        </View>
    );
}

export default Login;
