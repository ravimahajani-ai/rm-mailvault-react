import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserAdd from './pages/UserAdd';
import UserReset from './pages/UserReset';
import UserToggle from './pages/UserToggle';
import License from './pages/License';
import Email from './pages/Email';
import EmailBulk from './pages/EmailBulk';
import Sms from './pages/Sms';
import EmailLog from './pages/EmailLog';
import Reminders from './pages/Reminders';
import ReminderLog from './pages/ReminderLog';
import Wizard from './pages/Wizard';

function App() {
  const [user, setUser] = useState(null);

  function handleLogout() {
    setUser(null);
    // optionally, call your PHP logout API
  }

  return (
    <BrowserRouter>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/" element={<ProtectedRoute user={user}><Dashboard /></ProtectedRoute>} />
        <Route path="/users" element={<ProtectedRoute user={user}><Users /></ProtectedRoute>} />
        <Route path="/user-add" element={<ProtectedRoute user={user}><UserAdd /></ProtectedRoute>} />
        <Route path="/user-reset" element={<ProtectedRoute user={user}><UserReset /></ProtectedRoute>} />
        <Route path="/user-toggle" element={<ProtectedRoute user={user}><UserToggle /></ProtectedRoute>} />
        <Route path="/license" element={<ProtectedRoute user={user}><License /></ProtectedRoute>} />
        <Route path="/email" element={<ProtectedRoute user={user}><Email /></ProtectedRoute>} />
        <Route path="/email-bulk" element={<ProtectedRoute user={user}><EmailBulk /></ProtectedRoute>} />
        <Route path="/email-log" element={<ProtectedRoute user={user}><EmailLog /></ProtectedRoute>} />
        <Route path="/sms" element={<ProtectedRoute user={user}><Sms /></ProtectedRoute>} />
        <Route path="/reminders" element={<ProtectedRoute user={user}><Reminders /></ProtectedRoute>} />
        <Route path="/reminder-log" element={<ProtectedRoute user={user}><ReminderLog /></ProtectedRoute>} />
        <Route path="/wizard" element={<ProtectedRoute user={user}><Wizard /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
