import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { LoginPage } from './pages/LoginPage';
import { Messenger } from './pages/Messenger';
import { NotFound } from './pages/NotFound';
import { RegisterPage } from './pages/RegisterPage';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<LoginPage />} />
        <Route path={`${process.env.PUBLIC_URL}/messenger`} element={<Messenger />} />
        <Route path={`${process.env.PUBLIC_URL}/register`} element={<RegisterPage />} />
        <Route path={`${process.env.PUBLIC_URL}*`} element={<NotFound />} />
        {/* <Route path="/" element={<LoginPage />} />
        <Route path="/messenger" element={<Messenger />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};
