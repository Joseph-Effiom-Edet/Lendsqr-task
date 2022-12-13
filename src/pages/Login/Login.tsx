import React from "react";
import "./login.scss";
import Pablo from "../../assets/images/pablo.png";
import Union from "../../assets/images/Union.png";
import LendSqr from "../../assets/images/lendsqr.png";

function Login() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="flex1-wrapper">
          <div className="flex1-wrapper-images">
            <img className="logo-image-1" src={Union} alt="" />
            <img className="logo-image-2" src={LendSqr} alt="" />
          </div>
          <img className="big-image" src={Pablo} alt="" />
        </div>
        <div className="flex2-wrapper">
          <h1>Welcome!</h1>
          <p>Enter details to login.</p>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <span className="show">SHOW</span>
            <span className="forgot-password">FORGOT PASSWORD?</span>
            <button>LOG IN</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
