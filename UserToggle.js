import React, { useState } from "react";
import { apiCall } from "../api/mvApi";

export default function UserToggle() {
  const [id, setId] = useState('');
  const [msg, setMsg] = useState('');
  const submit = async e => {
    e.preventDefault();
    try {
      await apiCall('users-toggle', { id });
      setMsg('Toggled user status!');
    } catch (e) { setMsg(e.message); }
  }
  return (
    <form onSubmit={submit}>
      <h2>Toggle User Active</h2>
      <input value={id} onChange={e => setId(e.target.value)} placeholder="User ID" />
      <button type="submit">Toggle</button>
      {msg}
    </form>
  )
}