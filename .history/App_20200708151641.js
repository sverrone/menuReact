import React from 'react';
import { Text } from 'react-native'
import { StyleSheet, View } from 'react-native';
import StackLoginRegistro from './Componentes/LoginRegistro/StackLoginRegistro';
import TabLoginRegistro from './Componentes/LoginRegistro/TabLoginRegistro';
import TabStackLoginRegistro from './Componentes/LoginRegistro/TabStackLoginRegistro';
import { Provider } from 'react-redux';
import Store from './Store/Store';

export default function App() {
  return (
    <StackLoginRegistro/>
    // <TabLoginRegistro/>
    // <Provider store={Store}>
    //   <TabStackLoginRegistro/>
    // </Provider>
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
