/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import CaseList from './src/components/CaseList';
import {ThemeProvider} from 'styled-components';
import {lightTheme, darkTheme} from './src/Styles/Theme';
import {useDarkMode} from 'react-native-dark-mode';
import {ThemedSafeAreaView, ThemedStatusBar} from './src/components/Primitives';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const isDarkMode = useDarkMode();

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <ThemedStatusBar />
        <ThemedSafeAreaView>
          <CaseList />
        </ThemedSafeAreaView>
      </ThemeProvider>
    </>
  );
};

export default App;
