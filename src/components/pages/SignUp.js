import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Auth.css';  // Shared styling for both sign-up and sign-in

function SignUp() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/auth/signup', {
      username: formData.username,
      password: formData.password,
    })
    .then(response => {
      setMessage(response.data?.message || 'Sign up successful!');
      setTimeout(() => navigate('/sign-in'), 1500);
    })
    .catch(error => {
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
      console.error('Sign up error:', error);
    });
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
      <p className="auth-link">
        Already signed up? <a href="/sign-in">Sign in here</a>
      </p>
    </div>
  );
}

export default SignUp;
