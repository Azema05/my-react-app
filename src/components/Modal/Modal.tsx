import React from 'react';
import './styles.module.css';

const Modal: React.FC = () => {
  return (
    <div className="modal-overlay" id="modalOverlay">
      <div className="modal-window" id="modalWindow">
        <form id="modalForm">
          <h3>Форма входа</h3>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password</label>
          <div className="password-input-container">
            <input type="password" id="password" name="password" required />
            <button type="button" id="togglePasswordVisibility" className="eye-icon"></button>
          </div>
          <button type="submit" className="login-btn">Авторизоваться</button>
          <p className="signup-link">
            У вас нет учетной записи?
            <a href="#">Зарегистрироваться</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Modal;