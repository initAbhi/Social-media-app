import React from "react";

const LoadingScreen = () => {
  return (
    <div className="custom-loadingScreen">
      <div className="spinner-border text-light" style={{width: "4rem", height: "4rem"}} role="status">
        <span className="visually-hidden" >Loading...</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
