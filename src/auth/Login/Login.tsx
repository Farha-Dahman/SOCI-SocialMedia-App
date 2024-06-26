import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../hooks/useAppStore";
import LoginImage from "../../assets/images/LoginImage.png";
import { useFormik } from "formik";
import { loginSchema } from "../../schemas/login";
import { Checkbox } from "primereact/checkbox";
import "../../assets/style/custom-checkbox.scss";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { setUsername, setRole } = useAppStore();
  const [selectedRole, setSelectedRole] = useState("user");
  const [usernameInput, setUsernameInput] = useState("");

  const sendData = () => {
    setUsername(usernameInput);
    setRole(selectedRole as "admin" | "user");
    navigate("/");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      role: "user",
    },
    validationSchema: loginSchema,
    onSubmit: sendData,
  });

  return (
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
          <form
            onSubmit={formik.handleSubmit}
            className="w-100 mx-auto login-form w-50 mx-3 mb-4 border border-dark-subtle"
          >
            <h2 className="mb-5 fw-bold">Access Your SOCI Account</h2>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                id="exampleInputName"
                value={usernameInput}
                onChange={(e) => {
                  setUsernameInput(e.target.value);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                name="name"
                placeholder="Enter your name"
                className={`form-control border border-dark-subtle ${
                  formik.errors.name && formik.touched.name ? "is-invalid" : ""
                }`}
              />
              {formik.errors.name && formik.touched.name && (
                <p className="text-danger mb-4 mt-0">{formik.errors.name}</p>
              )}
            </div>
            <div className="custom-checkbox d-flex mt-2 me-5">
              <Checkbox
                id="is_Admin"
                name="is_Admin"
                value="is_Admin"
                checked={selectedRole === "admin"}
                onChange={() =>
                  setSelectedRole(selectedRole === "admin" ? "user" : "admin")
                }
                title="I'm Admin"
                className="custom-checkbox"
              />
              <label htmlFor="is_Admin" className="custom-txt fw-bold ms-2">
                I&apos;m an Admin
              </label>
            </div>

            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-light my-5 btn-lg card-button fw-bold d-flex"
                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting ? "Logging in..." : "Log in"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
