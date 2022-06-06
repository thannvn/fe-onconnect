import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterFreePage from './pages/register-free.component';

export default function RegisterFreeRoute() {
  return (
    <Routes>
      <Route path="/" element={<RegisterFreePage />} />
    </Routes>
  );
}
