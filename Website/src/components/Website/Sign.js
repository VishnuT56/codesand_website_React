

import React from "react";
import { FaGithub, FaGoogle, FaApple,  } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import './function.css'


const SignIn =() => {
  return (
    <div className="signin-container">
      <div className="login"><AiOutlineLogin size={50} /></div>
      <div className="signin-title">Sign in to CodeSandbox</div>
      <p className="signin-subtitle">Login or register to start building your projects today.</p>
      <div className="signin-buttons">
        <div className="github-button">
          <FaGithub /> Sign in with GitHub
        </div>
        <div className="row-buttons">
          <div className="google-button">
            <FaGoogle /> Sign in with Google
          </div>
          <div className="apple-button">
            <FaApple /> Sign in with Apple
          </div>
        </div>
      </div>
      <p className="signin-sso">Sign in with SSO</p>
      <p className="signin-terms">
        By continuing, you agree to CodeSandbox <br />
        <a href="#" className="signin-link">Terms of Service</a>, <a href="#" className="signin-link">Privacy Policy</a>
      </p>
    </div>
  );
};

export default SignIn;
