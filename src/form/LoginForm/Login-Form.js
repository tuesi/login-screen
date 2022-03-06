import React from "react";
import './login-form.sass'
import LoginTable from '../LoginTable/Login-Table';

function LoginForm() {
    return (
      <div className="form">
          <div className="header">
            <div className="header-text">
              Login Form
            </div>
          </div>
          <div className="body">
            <LoginTable />
          </div>
      </div>
    );
  }
  
  export default LoginForm;