/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {AppProvider} from '@common/utils/Provider';
import {RootRoutes} from '@routes/root';
import React from 'react';

function App() {
  return (
    <AppProvider>
      <RootRoutes />
    </AppProvider>
  );
}

export default App;
