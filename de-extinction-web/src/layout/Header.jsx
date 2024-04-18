import React from 'react';
import '../App.css'; 
import logo from '../assets/LogoDino.png';
const Header = () => {
  return (
    <header className="header-container">
      <div className="header-left">
        <button className="header-button">Menú</button>
        <button className="header-button">Como se Juega</button>
        <button className="header-button">Descargar</button>
        <button className="header-button">Iniciar Sesión</button>
      </div>
      <div className="header-right">
        <img src={logo} alt="Logo" className="header-logo" />
      </div>
    </header>
  );
}

export default Header;
