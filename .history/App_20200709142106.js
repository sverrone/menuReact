import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import StackLoginRegistro from './Componentes/LoginRegistro/StackLoginRegistro';
import TabLoginRegistro from './Componentes/LoginRegistro/TabLoginRegistro';
import TabStackLoginRegistro from './Componentes/LoginRegistro/TabStackLoginRegistro';
import StartSelector from './Componentes/LoginRegistro/StartSelector';

export default function App() {
  return (
    // <StackLoginRegistro/>
    // <TabLoginRegistro/>
    <View>
      <Provider store={Store}>
        {/* <TabStackLoginRegistro/> */}
        <StartSelector/>
      </Provider>
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
