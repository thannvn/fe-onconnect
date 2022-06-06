import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page.component.jsx';

export default function LoginRoute() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
