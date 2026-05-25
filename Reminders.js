import React, { useState } from "react";
import { apiCall } from "../api/mvApi";
export default function Reminders() {
  const [msg, setMsg] = useState('');
  const trigger = async () => {
    try { 
      const res = await apiCall('cron-reminders', {}, "GET"); 
      setMsg(JSON.stringify(res));
    } catch (e) { setMsg(e.message); }
  };
  return (
    <div>
      <h2>Send Reminders (run cron)</h2>
      <button onClick={trigger}>Run Cron</button>
      <pre>{msg}</pre>
    </div>
  )
}