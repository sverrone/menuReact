import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function LoginScreenTab( { navigation } ) {
    return (
      <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={ LoginScreenStack } 
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
          <Stack.Screen name="RegistroScreen" component={ RegistroScreenStack } />
      </Stack.Navigator>
    );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function LoginRegistro() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="LoginScreen" component={LoginScreenTab} />
          </Tab.Navigator>
      </NavigationContainer>
    );
}

export default LoginRegistro;