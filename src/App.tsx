import { createTheme, ThemeProvider } from '@mui/material';
import StorageService from 'app/services/storage';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from 'shared/blocks/footer/footer.component';
import LoadingComponent from 'shared/blocks/loading/loading.component';
import NavBar from 'shared/blocks/nav-bar/nav-bar.component';
import { setIconSet } from 'shared/icons/app-icon.component';
import icons from 'shared/icons/icon-list';
import './translation/i18n';

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
const Login = React.lazy(() => import('app/modules/login/routing'));

function App() {
  const [displayNavFooter, setDisplayNavFooter] = useState<boolean>(true);
  const location = useLocation();
  useEffect(() => {
    StorageService.init();
    setIconSet(icons);
  }, []);

  useEffect(() => {
    if (['/login', '/register-free'].includes(location.pathname)) {
      setDisplayNavFooter(false);
      return;
    }
    setDisplayNavFooter(true);
  }, [location.pathname]);

  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<LoadingComponent open />}>
        {displayNavFooter && <NavBar />}

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/pricing/*" element={<Pricing />} />
          <Route path="/register-free/*" element={<RegisterFree />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>

        {displayNavFooter && <Footer />}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
