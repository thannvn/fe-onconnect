import React, { Suspense } from 'react';
import './styles/App.scss';
import { Route, Routes } from 'react-router-dom';

const Home = React.lazy(() => import('app/modules/home/routing'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
