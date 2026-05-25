import React, { useState, useEffect } from "react";
import { apiCall } from "../api/mvApi";

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    apiCall('users-list')
      .then(res => setUsers(res.users))
      .catch(e => setError(e.message));
  }, []);
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <h2>User Accounts</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th><th>Email</th><th>Role</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>{u.active ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Users;