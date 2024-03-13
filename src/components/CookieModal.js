// components/CookieModal.js
import React from 'react';

const CookieModal = ({ showModal, onAccept, onReject }) => {
  return (
    <div className={`modal ${showModal ? 'show' : ''}`}>
      <div className="modal-content">
        <h2>Utilização de Cookies</h2>
        <p>Este site utiliza cookies para garantir a melhor experiência possível. Ao continuar a navegar, você concorda com o uso de cookies.</p>
        <div className="button-container">
          <button onClick={onAccept}>Aceitar</button>
          <button onClick={onReject}>Rejeitar</button>
        </div>
      </div>
    </div>
  );
};

export default CookieModal;
