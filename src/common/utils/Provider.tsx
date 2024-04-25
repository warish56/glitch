import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaWrapper} from '@common/components/SafeAreaWrapper';

type props = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      staleTime: 1000 * 60, //1 min
    },
  },
});

export const AppProvider = ({children}: props) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaWrapper>{children}</SafeAreaWrapper>
        </SafeAreaProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
};
