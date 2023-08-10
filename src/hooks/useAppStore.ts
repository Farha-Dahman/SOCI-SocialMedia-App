import { useContext } from "react";
import { AppStore, AppContextType } from "../context/app-store";

export const useAppStore = (): AppContextType => {
  const context = useContext(AppStore);
  if (!context) {
    throw new Error("The user must be within UserProvider");
  }
  return context;
};
