import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PricingPage from './pages/pricing-page.component';

export default function PricingRoute() {
  return (
    <Routes>
      <Route path="/" element={<PricingPage />} />
    </Routes>
  );
}
