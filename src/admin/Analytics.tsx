import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Analytics: React.FC = () => {
  const navigate = useNavigate();
  const interactionsChart = () => {
    navigate("interactions");
  };
  const verificationChart = () => {
    navigate("");
  };
  return (
    <div>
      <h3 className="mt-2">Analytics Page</h3>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="analytics-btn m-1"
          title="Interactions chart"
          onClick={verificationChart}
        >
          Verification Chart
        </button>
        <button
          className="analytics-btn m-1"
          title="Interactions chart"
          onClick={interactionsChart}
        >
          Interactions Chart
        </button>
      </div>
      <section id="content" className="content container-fluid pb-5">
        <Outlet />
      </section>
    </div>
  );
};

export default Analytics;
