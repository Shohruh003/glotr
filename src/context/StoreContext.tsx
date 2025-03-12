import { createContext, ReactNode } from 'react';
import rootStore from '../store/RootStore';

interface StoreContextProps {
    children: ReactNode;
}

export const StoreContext = createContext(rootStore);

export const StoreProvider: React.FC<StoreContextProps> = ({ children }) => {
  return <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>;
};