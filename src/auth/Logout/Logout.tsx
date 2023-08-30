import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../hooks/useAppStore";

const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername, setRole } = useAppStore();

  const logout = () => {
    setUsername("");
    setRole("user");
    navigate("/login");
  };

  return (
    <li className="dropdown-item" onClick={logout}>
      Logout
    </li>
  );
};

export default Logout;
