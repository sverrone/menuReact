import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreenStack( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Ir a registrarse"
            onPress={ () => navigation.navigate('Details') }
        />
      </View>
    );
}

function RegistroScreenStack( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Ir a login" onPress={ () => navigation.goBack() } />
      </View>
    );
  }
  
const Stack = createStackNavigator();
  
function LoginRegistro() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={ LoginScreenStack } 
                    options={{
                        title: 'Login',
                        headerStyle: {
                        backgroundColor: '#aaCCaa',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="Registro" component={ RegistroScreenStack } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default LoginRegistro;