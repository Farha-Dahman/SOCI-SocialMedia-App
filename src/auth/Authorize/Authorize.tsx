import React, { ReactNode } from "react";
import { useAppStore } from "../../hooks/useAppStore";
import { PageNotFound } from "../../layout/components/PageNotFound/PageNotFound";

interface AuthorizeProps {
  allowedRoles: string[];
  children: ReactNode;
}

const Authorize: React.FC<AuthorizeProps> = ({ allowedRoles, children }) => {
  const { role } = useAppStore();
  const isAllowed = allowedRoles.includes(role);
  return isAllowed ? <>{children}</> : <PageNotFound />;
};

export default Authorize;
