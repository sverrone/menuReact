import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Login';
import Registro from './Registro';

const Stack = createStackNavigator();

function LoginScreenTab( { navigation } ) {
    return (
      <Stack.Navigator>
          <Stack.Screen name="LoginScreen" component={ Login } 
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
      </Stack.Navigator>
    );
}

const RegistroScreenTab = ({ navigation }) => (
    <Stack.Navigator>
        <Stack.Screen name="RegistroScreen" component={ Registro } 
            options={{
                title: 'Registro',
                headerStyle: {
                backgroundColor: '#CCaaaa',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold',
                },
            }}
        />
    </Stack.Navigator>
}

const Tab = createBottomTabNavigator();

function LoginRegistro() {
    return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="LoginScreenTab" component={LoginScreenTab} />
            <Tab.Screen name="RegistroScreenTab" component={RegistroScreenTab} />
          </Tab.Navigator>
      </NavigationContainer>
    );
}

export default LoginRegistro;