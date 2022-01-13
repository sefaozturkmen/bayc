import React from "react";
import baycLogo from "../assets/images/bayc-logo.png";
import Social from "../components/Social";
const Main = () => {
  return (
    <div>
      <div className="container">
        <div className="mb-5 mb-lg-0 row">
          <div className="col-lg-4 col-12 offset-lg-4">
            <img
              src={baycLogo}
              className="img-fluid d-block mx-auto custom-logo pt-4"
              alt="bayc logo"
            />
          </div>
          <div className="col-lg-4">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
