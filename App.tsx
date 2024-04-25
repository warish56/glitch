/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppProvider} from '@common/utils/Provider';
import {MainRoutes} from '@routes/root';
import React from 'react';

function App() {
  return (
    <AppProvider>
      <MainRoutes />
    </AppProvider>
  );
}

export default App;
