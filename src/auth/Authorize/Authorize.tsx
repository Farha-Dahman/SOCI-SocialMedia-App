import React, { ReactNode } from "react";
import { useAppStore } from "../../hooks/useAppStore";

interface AuthorizeProps {
  allowedRoles: string[];
  children: ReactNode;
}

const Authorize: React.FC<AuthorizeProps> = ({ allowedRoles, children }) => {
  const { role } = useAppStore();
  const isAllowed = allowedRoles.includes(role);
  return isAllowed ? <>{children}</> : null;
};

export default Authorize;
