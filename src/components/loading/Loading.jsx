import React from "react";
import "./loading.scss"

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__cards bg__animation"></div>
      <div className="loading__cards bg__animation"></div>
      <div className="loading__cards bg__animation"></div>
      <div className="loading__cards bg__animation"></div>
      <div className="loading__cards bg__animation"></div>
      <div className="loading__cards bg__animation"></div>
    </div>
  );
};

export default Loading;
