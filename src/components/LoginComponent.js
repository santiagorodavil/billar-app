import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'password';
  
    if (username === validUsername && password === validPassword) {
      // Successful login
      alert('Login successful! Redirecting to the protected page.');
      // You can redirect to the protected page here.
      navigate('/home');
    } else {
      // Failed login
      alert('Invalid username or password. Please try again.');
    }
  };
  return (
    <>
        <div className='container-login'>
            <form className='login-form' onSubmit={handleLogin}>
                <h2>Bienvenido</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            <button type="submit">Login</button>
            </form>
        </div>
    </>
  );
}

export default LoginForm;