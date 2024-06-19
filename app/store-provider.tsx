'use client';

import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/query';
import { useEffect, useRef } from 'react';

import type { AppStore } from '@/lib/store';
import { makeStore } from '@/lib/store';

export type Props = Readonly<{
  children: ReactNode;
}>;

export const StoreProvider = ({ children }: Props) => {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
    return undefined;
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
};
