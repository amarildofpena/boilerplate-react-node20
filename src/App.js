// App.js
import React, { useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie';
import CookieModal from './components/CookieModal';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
// import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [showCookieModal, setShowCookieModal] = useState(false);

  const isAuthenticated = false; //

  useEffect(() => {
    const hasAcceptedCookies = Cookies.get('acceptedCookies');
    if (!hasAcceptedCookies) {
      setShowCookieModal(true);
    }
  }, []);

  const acceptCookies = () => {
    Cookies.set('acceptedCookies', 'true', { expires: 365 });
    setShowCookieModal(false);
  };

  const rejectCookies = () => {
    // Aqui você pode adicionar qualquer lógica adicional
    setShowCookieModal(false);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Routes path="">
        <Route path="/admin/home" isAuthenticated={isAuthenticated} element={<HomePage />} />
      </Routes>
      <CookieModal
        showModal={showCookieModal}
        onAccept={acceptCookies}
        onReject={rejectCookies}
      />
    </div>
  );
};

export default App;
