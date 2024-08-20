import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import './Auth.css';

function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/api/auth/signin', {
      username: formData.username,
      password: formData.password,
    })
    .then(response => {
      login(formData.username);
      setMessage(response.data?.message || 'Sign in successful!');
      navigate('/'); // Redirect to the home page
    })
    .catch(error => {
      setMessage(error.response?.data?.error || 'Something went wrong. Please try again.');
      console.error('Sign in error:', error);
    });
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="auth-form">
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
        <button type="submit" className="auth-button">Sign In</button>
      </form>
      {message && <p className="auth-message">{message}</p>}
      <div className="auth-link">
        <a href="/sign-up">Don't have an account? Sign up here</a>
      </div>
    </div>
  );
}

export default SignIn;
