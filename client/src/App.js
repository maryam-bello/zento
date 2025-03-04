import React from 'react';
import LandingPage from './pages/landingPage/LandingPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';


const App = () => {

  return (
    <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
