import React, {createContext} from 'react';
import {rootStore} from './RootStore';

export const RootStoreContext = createContext(rootStore ?? null);

export const StoreProvider = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
