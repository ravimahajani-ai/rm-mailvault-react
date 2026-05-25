import React, { useState, useEffect } from "react";
import { apiCall } from "../api/mvApi";
export default function EmailLog() {
  const [log, setLog] = useState([]);
  useEffect(() => { apiCall('email-log').then(r => setLog(r.log || [])); }, []);
  return (
    <div>
      <h2>Email Log</h2>
      <table>
        <thead><tr><th>To</th><th>Subject</th><th>Status</th><th>Sent At</th></tr></thead>
        <tbody>
          {log.map((l,k) => (
            <tr key={k}><td>{l.to_email}</td><td>{l.subject}</td><td>{l.status}</td><td>{l.sent_at}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}