import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

export interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
  role: string;
  setRole: (role: string) => void;
}

export const AppStore = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsernameState] = useState("");
  const [role, setRoleState] = useState("");
  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    const storedRole = localStorage.getItem("user_role");
    if (storedUsername) {
      setUsernameState(storedUsername);
    }
    if (storedRole) {
      setRoleState(storedRole);
    }
  }, []);
  const setUsername = (newUsername: string) => {
    localStorage.setItem("user_name", newUsername);
    setUsernameState(newUsername);
  };

  const setRole = (newRole: string) => {
    localStorage.setItem("user_role", newRole);
    setRoleState(newRole);
  };

  return (
    <AppStore.Provider
      value={{
        username,
        setUsername,
        role,
        setRole,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};
