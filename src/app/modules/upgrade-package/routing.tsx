import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UpgradePackage from './pages/upgrade-package.component';

export default function PricingRoute() {
  return (
    <Routes>
      <Route path="/" element={<UpgradePackage />} />
    </Routes>
  );
}
