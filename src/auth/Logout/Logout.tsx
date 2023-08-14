import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../hooks/useAppStore";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername } = useAppStore();

  const handleLogout = () => {
    setUsername("");
    navigate("/login");
  };

  return (
    <li className="dropdown-item" onClick={handleLogout}>
      Logout
    </li>
  );
};

export default LogoutButton;
