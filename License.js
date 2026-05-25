import React, { useState, useEffect } from "react";
import { apiCall } from "../api/mvApi";

function License() {
  const [license, setLicense] = useState(null);
  const [key, setKey] = useState('');
  const [msg, setMsg] = useState('');
  useEffect(() => {
    apiCall('license-get').then(res => setLicense(res.license));
  }, []);
  const activate = async e => {
    e.preventDefault();
    try {
      const { message } = await apiCall('license-activate', { key });
      setMsg(message);
    } catch (e) { setMsg(e.message); }
  };
  return (
    <div>
      <h2>License</h2>
      <pre>{JSON.stringify(license, null, 2)}</pre>
      <form onSubmit={activate}>
        <input value={key} onChange={e => setKey(e.target.value)} placeholder="License Key" />
        <button type="submit">Activate</button>
      </form>
      {msg}
    </div>
  );
}

export default License;