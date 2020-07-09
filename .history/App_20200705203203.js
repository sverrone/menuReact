import React from 'react';
import { View } from 'react-native';
import LoginRegistro from '/Componentes/LoginRegistro/LoginRegistro.js';

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
