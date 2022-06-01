import React, { Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from 'shared/blocks/nav-bar/nav-bar.component';
import './translation/i18n';
import { ThemeProvider, createTheme } from '@mui/material';
import { setIconSet } from 'shared/icons/app-icon.component';
import icons from 'shared/icons/icon-list';
import Footer from 'shared/blocks/footer/footer.component';
import LoadingComponent from 'shared/blocks/loading/loading.component';

export const customTheme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});

const Home = React.lazy(() => import('app/modules/home/routing'));
const Pricing = React.lazy(() => import('app/modules/pricing/routing'));
const RegisterFree = React.lazy(
  () => import('app/modules/register-free/routing')
);

function App() {
  useState(() => {
    setIconSet(icons);
  });

  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<LoadingComponent open />}>
        <NavBar />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/register-free" element={<RegisterFree />} />
        </Routes>

        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
