import React from 'react';
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native';
import LoginRegistro from './Componentes/LoginRegistro/LoginRegistro';

export default function App() {
  return (
    <View style={styles.container}>
      <LoginRegistro/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
