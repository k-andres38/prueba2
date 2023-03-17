import React, { useState } from 'react';

import { useAuth0 } from "@auth0/auth0-react";

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };
const {loginWithRedirect} =useAuth0()

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" value={email} onChange={handleChange} required />

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" value={password} onChange={handleChange} required />

        <button  type='submit'>Login</button>
        <button  onClick={()=>loginWithRedirect()}>Iniciar session con google</button>
      </form>
    </div>
  );
}

export default Login;
