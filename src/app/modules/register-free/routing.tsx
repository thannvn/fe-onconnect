import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterFreePage from './pages/register-free.component';

export default function RegisterFreeRoute() {
  useEffect(() => {
    const footer = document.getElementById('footer');
    const appBar = document.getElementById('app-bar');
    if (footer) footer.style.display = 'none';
    if (appBar) appBar.style.display = 'none';

    return () => {
      if (footer) footer.style.display = 'flex';
      if (appBar) appBar.style.display = 'block';
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<RegisterFreePage />} />
    </Routes>
  );
}
