import React, { useState } from "react";
import { apiCall } from "../api/mvApi";

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    try {
      const { user } = await apiCall('login', { username, password });
      onLogin(user);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <div style={{color:'red'}}>{error}</div>}
      <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  )
}
export default Login;