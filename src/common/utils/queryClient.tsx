import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export const appQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      retryOnMount: false,
      staleTime: 1000 * 60, //1 min
    },
  },
});

export const ApiProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={appQueryClient}>
      {children}
    </QueryClientProvider>
  );
};
