import { useContext } from "react";
import { UserContext, UserContextType } from "../Context/UserContext";

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("The user must be within UserProvider");
  }
  return context;
};
