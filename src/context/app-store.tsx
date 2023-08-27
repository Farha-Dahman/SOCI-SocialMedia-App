import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

export interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const AppStore = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsernameState] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    if (storedUsername) {
      setUsernameState(storedUsername);
    }
  }, []);

  const setUsername = (newUsername: string) => {
    localStorage.setItem("user_name", newUsername);
    setUsernameState(newUsername);
  };

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
