import {useContext} from 'react';
import {RootStoreContext} from './StoreContext';

export const useStore = () => {
  const store = useContext(RootStoreContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return store;
};
