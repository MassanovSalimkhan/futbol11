import React from "react";
import "./SignUp.css"; // Можно использовать тот же CSS

const SignUp = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form>
          <input type="text" placeholder="Full Name" className="auth-input" />
          <input type="email" placeholder="Email" className="auth-input" />
          <input type="password" placeholder="Password" className="auth-input" />
          <input
            type="password"
            placeholder="Confirm Password"
            className="auth-input"
          />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/sign-in">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
