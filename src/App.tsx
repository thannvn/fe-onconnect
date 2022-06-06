import { createTheme, ThemeProvider } from '@mui/material';
import { useAppSelector } from 'app/services/redux/hooks';
import { selectUser } from 'app/services/redux/slices/user-slice';
import StorageService from 'app/services/storage';
import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AuthGuard from 'routes/auth-guard';
import LoggedGuard from 'routes/logged-guard';
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
const Profile = React.lazy(() => import('app/modules/profile/routing'));
const UpgradePackage = React.lazy(
  () => import('app/modules/upgrade-package/routing')
);

function App() {
  const [displayNavFooter, setDisplayNavFooter] = useState<boolean>(true);
  const [displayFooter, setDisplayFooter] = useState<boolean>(true);
  const location = useLocation();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    StorageService.init();
    setIconSet(icons);
  }, []);

  useEffect(() => {
    if (['/login', '/register-free'].includes(location.pathname) || user.id) {
      setDisplayFooter(false);
      setDisplayNavFooter(!!user.id);
      return;
    }
    setDisplayFooter(true);
    setDisplayNavFooter(true);
  }, [location.pathname, user.id]);

  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<LoadingComponent open />}>
        {displayNavFooter && <NavBar />}

        <Routes>
          <Route
            path="/*"
            element={
              <LoggedGuard>
                <Home />
              </LoggedGuard>
            }
          />
          <Route
            path="/pricing/*"
            element={
              <LoggedGuard>
                <Pricing />
              </LoggedGuard>
            }
          />
          <Route
            path="/register-free/*"
            element={
              <LoggedGuard>
                <RegisterFree />
              </LoggedGuard>
            }
          />
          <Route
            path="/login/*"
            element={
              <LoggedGuard>
                <Login />
              </LoggedGuard>
            }
          />
          <Route
            path="/profile/*"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />

          <Route
            path="/upgrade-package/*"
            element={
              <AuthGuard>
                <UpgradePackage />
              </AuthGuard>
            }
          />
        </Routes>

        {displayFooter && <Footer />}
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
