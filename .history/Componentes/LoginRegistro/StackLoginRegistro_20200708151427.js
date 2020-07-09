import React from 'react'
import { Button, View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LoginScreenStack( { navigation } ) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Button
            title="Ir a registrarse"
            onPress={ () => navigation.navigate('RegistroScreen') }
        />
      </View>
    );
}

const RegistroScreenTab = ({ navigation }) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Registro Screen</Text>
        <Button title="Ir a login" onPress={ () => navigation.goBack() } />
      </View>
    );
)
  
const Stack = createStackNavigator();
  
const StackLoginRegistro = () => (
    <NavigationContainer>
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
    </NavigationContainer>
)

export default StackLoginRegistro;