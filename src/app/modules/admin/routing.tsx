import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminHomePage from './pages/admin-home.component';

export default function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<AdminHomePage />} />
    </Routes>
  );
}
