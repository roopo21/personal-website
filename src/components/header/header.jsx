import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header ">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Roopo
        </a>
        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link active-link">
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-briefcase nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link active-link">
                <i className="uil uil-desktop nav__icon"></i> Experience
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link active-link">
                <i className="uil uil-books nav__icon"></i> Blog
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link active-link">
                <i className="uil uil-envelope nav__icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
