// Dashboard.js
import React from 'react';
import withAuthentication from './withAuthentication';

const HomePage = () => {
  console.log(withAuthentication);
  return (
    <div>
      <h1>Dashboard</h1>
      {/* Conteúdo do dashboard */}
    </div>
  );
};

export default withAuthentication(HomePage);
