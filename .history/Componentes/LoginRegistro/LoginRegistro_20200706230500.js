import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';

const Login = () => <Text>Login1</Text>;

const Registro = () => <Text>Registro1</Text>;

const LoginRegistro = createStackNavigator({
    Login: { 
      screen: Login
     },
     Registro: {
       screen: Registro
     }
  });
  
  export default createAppContainer(LoginRegistro);

// function HomeScreen() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
  
//   const Stack = createStackNavigator();
  
//   function LoginRegistro() {
//     return (
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Home" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
  
//   export default LoginRegistro;