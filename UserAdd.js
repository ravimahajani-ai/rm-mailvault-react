import React, { useState } from "react";
import { apiCall } from "../api/mvApi";

export default function UserAdd() {
  const [fields, setFields] = useState({ username: "", email: "", password: "", role: "user" });
  const [msg, setMsg] = useState("");
  const onChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    try {
      await apiCall('users-add', fields);
      setMsg("User added!");
    } catch (e) {
      setMsg(e.message);
    }
  };
  return (
    <form onSubmit={submit}>
      <h2>Add User</h2>
      <input name="username" placeholder="Username" onChange={onChange} value={fields.username} />
      <input name="email" placeholder="Email" onChange={onChange} value={fields.email} />
      <input name="password" type="password" placeholder="Password" onChange={onChange} value={fields.password} />
      <select name="role" onChange={onChange} value={fields.role}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit">Add</button>
      {msg}
    </form>
  );
}