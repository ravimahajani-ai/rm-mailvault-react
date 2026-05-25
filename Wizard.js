import React, { useState } from "react";
import { apiCall } from "../api/mvApi";
export default function Wizard() {
  const [config, setConfig] = useState('{}');
  const [msg, setMsg] = useState('');
  const submit = async e => {
    e.preventDefault();
    let conf;
    try { conf = JSON.parse(config); } catch { setMsg('Invalid JSON'); return; }
    try {
      const r = await apiCall('apply-wizard', { config: conf });
      setMsg(r.message);
    } catch (e) { setMsg(e.message); }
  };
  return (
    <form onSubmit={submit}>
      <h2>Apply Wizard Config</h2>
      <textarea value={config} onChange={e => setConfig(e.target.value)} rows={10} />
      <button type="submit">Apply</button>
      {msg}
    </form>
  );
}