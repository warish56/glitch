/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {RootRoutes} from '@app1Routes/root';
import {AppProvider} from '@common/utils/Provider';
import React from 'react';

function App() {
  return (
    <AppProvider>
      <RootRoutes />
    </AppProvider>
  );
}

export default App;
