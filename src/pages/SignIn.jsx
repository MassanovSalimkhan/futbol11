import React from "react";
import "./SignIn.css"; // Или общий CSS-файл

const SignIn = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-footer">
          Don't have an account? <a href="/sign-up">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
