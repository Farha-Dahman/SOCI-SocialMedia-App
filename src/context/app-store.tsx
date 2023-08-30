import React, {
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from "react";

export interface AppContextType {
  username: string;
  setUsername: (username: string) => void;
  role: "admin" | "user";
  setRole: (role: "admin" | "user") => void;
}

export const AppStore = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [username, setUsernameState] = useState("");
  const [role, setRoleState] = useState<"admin" | "user">("user");
  useEffect(() => {
    const storedUsername = localStorage.getItem("user_name");
    const storedRole = localStorage.getItem("user_role");
    if (storedUsername) {
      setUsernameState(storedUsername);
    }
    if (storedRole) {
      setRoleState(storedRole as "admin" | "user");
    }
  }, []);
  const setUsername = (newUsername: string) => {
    localStorage.setItem("user_name", newUsername);
    setUsernameState(newUsername);
  };

  const setRole = (newRole: "admin" | "user") => {
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
