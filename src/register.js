import React from 'react';
import './css/register.css';

function RegisterForm() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Sign up</h2>
        <p className="register-subtitle">
          Always access your personal account as a service provider or a client now!
        </p>
        <form>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" name="firstName" defaultValue="Firstname" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" name="lastName" defaultValue="Lastname" />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" defaultValue="kaziconn@gmail.com" />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" name="phoneNumber" defaultValue="0712345678" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" defaultValue="password" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" name="terms" />
              I agree to all the <a href="#">Terms and Privacy Policies</a>
            </label>
          </div>
          <button type="submit" className="register-button">Create account</button>
        </form>
        <div className="login-section">
          <p>Already have an account? <a href="#">Login</a></p>
        </div>
        <div className="social-login">
          <button className="social-button fb-button">
            Facebook
          </button>
          <button className="social-button google-button">
            Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
