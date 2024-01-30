'use client';
import { ToggleContextProvider } from '@/hooks/ToggleContext';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

export default function QueryConfig({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClients = new QueryClient();
  return (
    <QueryClientProvider client={queryClients}>
      <ToggleContextProvider>{children}</ToggleContextProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}
