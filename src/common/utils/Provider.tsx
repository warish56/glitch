import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaWrapper} from '@common/components/SafeAreaWrapper';
import {ApiProvider} from './queryClient';

type props = {
  children: React.ReactNode;
};

export const AppProvider = ({children}: props) => {
  return (
    <ApiProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaWrapper>{children}</SafeAreaWrapper>
        </SafeAreaProvider>
      </NavigationContainer>
    </ApiProvider>
  );
};
