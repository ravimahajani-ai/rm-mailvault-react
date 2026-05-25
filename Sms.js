import React, { useState } from "react";
import { apiCall } from "../api/mvApi";
export default function Sms() {
  const [fields, setFields] = useState({ to: "", body: "" });
  const [msg, setMsg] = useState('');
  const onChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    try {
      await apiCall('send-sms', fields);
      setMsg('SMS Sent!');
    } catch (e) { setMsg(e.message); }
  };
  return (
    <form onSubmit={submit}>
      <h2>Send SMS</h2>
      <input name="to" placeholder="To" onChange={onChange} value={fields.to} />
      <textarea name="body" placeholder="Message" onChange={onChange} value={fields.body} />
      <button type="submit">Send</button>
      {msg}
    </form>
  );
}