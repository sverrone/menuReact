import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

function LoginScreenStack( { navigation } ) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen,</Text>
    </View>
  );
}

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
      </Stack.Navigator>
    );
}

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