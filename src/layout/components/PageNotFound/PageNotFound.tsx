import React from "react";
export const PageNotFound: React.FC = () => {
  return (
    <div className="background-content m-5 pb-5">
      <h1>Oops! We can not find the page you are looking for</h1>
      <p>
        You tried to request a page that does not exist. If you believe this to
        be in error, let us know Contact Us.
      </p>
    </div>
  );
};
