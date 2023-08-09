import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Hooks/useUser";
const Login: React.FC = () => {
  let navigate = useNavigate();
  const { setUsername } = useUser();
  const [usernameInput, setUsernameInput] = useState("");

  const handleLogin = () => {
    setUsername(usernameInput);
    navigate("/");
  };
  return (
    <form className="login-form container p-5 border border-dark-subtle  w-50 mt-5 background-content">
      <h2 className="mb-5">Enter to your account</h2>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Your Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="NameHelp"
          placeholder="Enter your name"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn btn-light my-5 me-2 btn-lg Card--button"
        onClick={handleLogin}
      >
        Log in
      </button>
    </form>
  );
};

export default Login;
