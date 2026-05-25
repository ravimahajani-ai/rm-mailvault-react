import React, { useEffect, useState } from "react";
import { apiCall } from "../api/mvApi";
export default function ReminderLog() {
  const [log, setLog] = useState([]);
  useEffect(() => { apiCall('reminder-log').then(r => setLog(r.log || [])); }, []);
  return (
    <div>
      <h2>Reminder Log</h2>
      <table>
        <thead>
          <tr><th>Mailbox ID</th><th>Customer</th><th>Email</th><th>Sent At</th></tr>
        </thead>
        <tbody>
          {log.map((l,k) => (
            <tr key={k}><td>{l.mailbox_id}</td><td>{l.customer_name}</td><td>{l.customer_email}</td><td>{l.sent_at}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}