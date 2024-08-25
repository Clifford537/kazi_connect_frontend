import React from 'react';
import './login.css';

function LoginForm() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" defaultValue="kaziconn@gmail.com" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" defaultValue="password" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot Password</a>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-section">
          <p>Don't have an account? <a href="#">Sign up</a></p>
        </div>
        <div className="social-login">
          <p>or login with</p>
          <button className="social-button fb-button">Facebook</button>
          <button className="social-button google-button">Google</button>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
