import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from 'shared/blocks/nav-bar/nav-bar.component';
import './translation/i18n';
import { ThemeProvider, createTheme } from '@mui/material';

export const customTheme = createTheme({
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});

const Home = React.lazy(() => import('app/modules/home/routing'));
const Pricing = React.lazy(
  () => import('app/modules/pricing/pages/pricing-page.component')
);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Suspense fallback={<div>...Loading</div>}>
        <NavBar />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
