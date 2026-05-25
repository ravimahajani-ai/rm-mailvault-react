import React from "react";
import { Link } from "react-router-dom";

function Navbar({user, onLogout}) {
  return (
    <nav>
      <Link to="/">Dashboard</Link> | <Link to="/users">Users</Link> | <Link to="/license">License</Link> |{" "}
      <Link to="/email">Email</Link> | <Link to="/reminders">Reminders</Link> |{" "}
      <Link to="/wizard">Wizard</Link> |{" "}
      {user ? <button onClick={onLogout}>Logout ({user.username})</button> : null}
    </nav>
  );
}
export default Navbar;