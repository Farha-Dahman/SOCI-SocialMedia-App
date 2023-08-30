import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppStore } from "./hooks/useAppStore";

interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { username } = useAppStore();
  if (!username) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
