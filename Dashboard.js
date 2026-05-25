import React, { useState, useEffect } from "react";
import { apiCall } from "../api/mvApi";

function Dashboard() {
  const [db, setDb] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    apiCall('db-load').then(res => setDb(res.db)).catch(e => setError(e.message));
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!db) return <div>Loading...</div>;
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(db, null, 2)}</pre>
    </div>
  );
}
export default Dashboard;