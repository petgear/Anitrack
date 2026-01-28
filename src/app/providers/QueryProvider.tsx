'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClinet] = useState(() => new QueryClient());
  return <QueryClientProvider client={queryClinet}>{children}</QueryClientProvider>;
};
