import React, { useState } from "react";
import { apiCall } from "../api/mvApi";

export default function UserReset() {
  const [id, setId] = useState('');
  const [newPassword, setPw] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async e => {
    e.preventDefault();
    try {
      await apiCall('users-reset-pw', { id, newPassword });
      setMsg('Password reset!');
    } catch (e) { setMsg(e.message); }
  }
  return (
    <form onSubmit={submit}>
      <h2>Reset User Password</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="User ID" />
      <input type="password" value={newPassword} onChange={e => setPw(e.target.value)} placeholder="New Password" />
      <button type="submit">Reset</button>
      {msg}
    </form>
  )
}