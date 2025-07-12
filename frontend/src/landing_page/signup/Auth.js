import { useState } from "react";
import axios from "axios";
import "../css/Auth.css"

const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? `${import.meta.env.VITE_API_BASE_URL}/api/auth/register`
      : `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`;

    try {
      const res = await axios.post(url, form, { withCredentials: true });
      

      console.log("Auth response:", res.data);

      const userId = res.data.user;
      if (!userId) throw new Error("No user ID returned");

      localStorage.setItem("userId", userId);
      console.log("Stored userId in localStorage:", userId);

      
      window.location.href = `https://finvoke-2.onrender.com/dashboard?userId=${userId}`;
;

    } catch (err) {
      alert(err.response?.data?.msg || "Something went wrong");
    }
  };

   return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {isSignup && (
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              placeholder="Username"
              className="auth-input"
              required
            />
          )}
          <input
            name="email"
            onChange={handleChange}
            value={form.email}
            placeholder="Email"
            type="email"
            className="auth-input"
            required
          />
          <input
            name="password"
            type="password"
            onChange={handleChange}
            value={form.password}
            placeholder="Password"
            className="auth-input"
            required
          />
          <button type="submit" className="auth-button">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>

        <div className="auth-toggle">
          {isSignup ? "Already have an account? " : "New here? "}
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="auth-toggle-button"
          >
            {isSignup ? "Log In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;