import React, { useState } from "react";
import { apiCall } from "../api/mvApi";
export default function EmailBulk() {
  const [json, setJson] = useState('[]');
  const [msg, setMsg] = useState('');
  const submit = async e => {
    e.preventDefault();
    let emails;
    try { emails = JSON.parse(json); } catch { setMsg('Invalid JSON'); return; }
    try {
      const res = await apiCall('send-bulk-email', { emails });
      setMsg(`Sent: ${res.sent}, Failed: ${res.failed}`);
    } catch (e) { setMsg(e.message); }
  };
  return (
    <form onSubmit={submit}>
      <h2>Send Bulk Email (JSON array)</h2>
      <textarea value={json} onChange={e => setJson(e.target.value)} rows={5} />
      <button type="submit">Send</button>
      {msg}
    </form>
  );
}