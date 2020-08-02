import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as StoreProvider} from 'react-redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Store from './Store/Store';
import StackLoginRegistro from './Componentes/LoginRegistro/StackLoginRegistro';
import TabLoginRegistro from './Componentes/LoginRegistro/TabLoginRegistro';
import TabStackLoginRegistro from './Componentes/LoginRegistro/TabStackLoginRegistro';
import StartSelector from './Componentes/LoginRegistro/StartSelector';

export default function App() {
  return (
    // <StackLoginRegistro/>
    // <TabLoginRegistro/>
    <StoreProvider store={Store}>
      <PaperProvider theme={theme}>
        {/* <TabStackLoginRegistro/> */}
        <StartSelector/>
      </PaperProvider>
    </StoreProvider>
  );
}

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};