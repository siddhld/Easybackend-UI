import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner: React.FC = () => {
  console.log("Inside Loading Spinner");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="wheel-and-hamster"
        role="img"
        aria-label="Orange and tan hamster running in a metal wheel"
      >
        <div className="wheel"></div>
        <div className="hamster">
          <div className="hamster__body">
            <div className="hamster__head">
              <div className="hamster__ear"></div>
              <div className="hamster__eye"></div>
              <div className="hamster__nose"></div>
            </div>
            <div className="hamster__limb hamster__limb--fr"></div>
            <div className="hamster__limb hamster__limb--fl"></div>
            <div className="hamster__limb hamster__limb--br"></div>
            <div className="hamster__limb hamster__limb--bl"></div>
            <div className="hamster__tail"></div>
          </div>
        </div>
        <div className="spoke"></div>
      </div>
      <div className="mt-5 text-center">
        <p>Hold on, setting up things...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
