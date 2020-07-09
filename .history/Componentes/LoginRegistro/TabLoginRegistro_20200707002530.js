import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginTab( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Ir a registrarse"
            onPress={ () => navigation.navigate('RegistroScreen') }
        />
      </View>
    );
}

function RegistroTab( { navigation } ) {
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
          <Tab.Navigator>
            <Tab.Screen name="LoginScreen" component={LoginScreenTab} />
            <Tab.Screen name="RegistroScreen" component={RegistroScreenTab} />
          </Tab.Navigator>
      </NavigationContainer>
    );
}

export default LoginRegistro;