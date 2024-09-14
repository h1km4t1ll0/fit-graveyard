import {createContext, FC, ReactNode} from 'react';
import {rootStore} from './RootStore';

export const RootStoreContext = createContext(rootStore ?? null);

export const StoreProvider: FC<{ children: ReactNode | undefined }> = ({children}) => {
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  );
};
