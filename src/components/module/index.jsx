import React from "react";
import "./module.scss";
import Login from "../../pages/login/Login";

const Module = ({ closeFunc }) => {
  return (
    <div className="module">
      <h1 onClick={()=>closeFunc(false)} className="module__closer">
        X
      </h1>
      <Login/>
    </div>
  );
};

export default Module;
