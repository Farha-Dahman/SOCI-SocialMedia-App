import React, { createContext, useState, PropsWithChildren } from "react";

export interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const AppStore = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsername] = useState("");

  return (
    <AppStore.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};
