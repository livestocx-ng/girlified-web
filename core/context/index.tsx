import React, { createContext, useContext } from 'react';
import { MantineTheme, useMantineTheme } from '@mantine/core';

interface AppContextProps {
  theme: MantineTheme | null;
}

export const AppContext = createContext<AppContextProps>({
  theme: null,
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useMantineTheme();

  return (
    <AppContext.Provider
      value={{
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
