import React, { useState } from "react";
import { apiCall } from "../api/mvApi";

export default function Email() {
  const [fields, setFields] = useState({ to: "", subject: "", body: "", from: "" });
  const [msg, setMsg] = useState('');
  const onChange = e => setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    try {
      await apiCall('send-email', fields);
      setMsg('Email sent!');
    } catch (e) { setMsg(e.message); }
  };
  return (
    <form onSubmit={submit}>
      <h2>Send Email</h2>
      <input name="to" placeholder="To" onChange={onChange} value={fields.to} />
      <input name="subject" placeholder="Subject" onChange={onChange} value={fields.subject} />
      <input name="from" placeholder="From (optional)" onChange={onChange} value={fields.from} />
      <textarea name="body" placeholder="Body" onChange={onChange} value={fields.body} />
      <button type="submit">Send</button>
      {msg}
    </form>
  );
}