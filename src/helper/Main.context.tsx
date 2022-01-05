import { createContext, useContext, useState } from 'react';

export type MainContextProps = {
  walletIsConnected: boolean,
  setWalletIsConnected: (value: boolean) => void,
};

const initialState = {
  walletIsConnected: false,
  setWalletIsConnected: () => {},
} as MainContextProps;

const Context = createContext<MainContextProps>(initialState);
const { Provider } = Context;
export const useMainContex = () => useContext(Context);

const useMainContextWallet = () => {
  const [walletIsConnected, setWalletIsConnected] = useState<boolean>(initialState.walletIsConnected);

  return {
    Provider,
    walletIsConnected,
    setWalletIsConnected,
  };
};

export default useMainContextWallet;
