import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={ () => navigation.navigate('Details') }
        />
      </View>
    );
}

function DetailsScreen( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={ () => navigation.goBack() } />
      </View>
    );
  }
  
const Stack = createStackNavigator();
  
function LoginRegistro() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={ HomeScreen } 
                    options={{
                        title: 'Home',
                        headerStyle: {
                        backgroundColor: '#aaCCaa',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                        fontWeight: 'bold',
                        },
                    }}
                />
                <Stack.Screen name="Details" component={ DetailsScreen } />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default LoginRegistro;