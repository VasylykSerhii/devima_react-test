/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Menu.scss';

import LogoMenu from '../../assets/img/logo_menu.png';

function Menu() {
  return (
    <div className="menu">
      <div className="menu-logo">
        <img src={LogoMenu} alt="logo" />
        <span className="menu-logo-text">Devima</span>
      </div>
      <div className="menu-links">
        <a href="#" className="menu-link">Services</a>
        <a href="#" className="menu-link active">Cases</a>
        <a href="#" className="menu-link">Blog</a>
        <a href="#" className="menu-link">Career</a>
        <a href="#" className="menu-link">Company</a>
        <a href="#" className="menu-link">Contacts</a>
      </div>
    </div>
  );
}

export default Menu;
