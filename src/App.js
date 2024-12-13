import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './page-48-login/LoginPage';
import Page42 from './page-42-43/Page42';
import SignupPage from './page-48-login/SignUpPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/page42" element={<Page42 />} />
      </Routes>
    </div>
  );
}

export default App;
