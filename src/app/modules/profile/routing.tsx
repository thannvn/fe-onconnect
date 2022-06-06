import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfilePage from './pages/profile.component';

export default function PricingRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProfilePage />} />
    </Routes>
  );
}
