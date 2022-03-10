import './App.css';

import { APP_URL } from 'constants/routes';
import DashboardPage from 'pages/DashboardPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={APP_URL.HOME} element={<DashboardPage />} />
        <Route path={APP_URL.LOGIN} element={<LoginPage />} />
        <Route path={APP_URL.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
