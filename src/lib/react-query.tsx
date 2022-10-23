import * as React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ReactQueryProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const ReactQueryProvider: React.FunctionComponent<
  ReactQueryProviderProps
> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
