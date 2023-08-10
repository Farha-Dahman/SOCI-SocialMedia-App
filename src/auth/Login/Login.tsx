import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../hooks/useAppStore";
import LoginImage from "../../assets/images/LoginImage.png";
const Login: React.FC = () => {
  let navigate = useNavigate();
  const { setUsername } = useAppStore();
  const [usernameInput, setUsernameInput] = useState("");

  const handleLogin = () => {
    setUsername(usernameInput);
    navigate("/");
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center align-items-center min-vh-100">
          <div className="col-sm-12 col-md-6 col-lg-4">
            <img
              src={LoginImage}
              alt="Login Image"
              className="login-image mx-auto d-block"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-6">
            <form className="w-100 mx-auto login-form w-50 mx-3 mb-4 border border-dark-subtle">
              <h2 className="mb-5 fw-bold">Access Your SOCI Account</h2>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputName"
                  className="form-label fw-bold"
                >
                  Name
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
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-light my-5 btn-lg card-button fw-bold d-flex"
                  onClick={handleLogin}
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
