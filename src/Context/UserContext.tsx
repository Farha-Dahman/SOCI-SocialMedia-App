import React, { createContext, useState } from "react";
export interface UserContextType {
  username: string;
  setUsername: (username: string) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [username, setUsername] = useState("");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
