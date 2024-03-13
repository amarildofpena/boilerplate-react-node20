// withAuthentication.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const withAuthentication = (WrappedComponent) => {
  const WithAuthenticationWrapper = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const isAuthenticated = props.isAuthenticated;
      if (!isAuthenticated) {
        // Redirecionar para a página de login se o usuário não estiver autenticado
        navigate('/login');
      }
    }, [navigate]);

    return <WrappedComponent {...props} />;
  };

  return WithAuthenticationWrapper;
};

export default withAuthentication;
