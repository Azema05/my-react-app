import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="page_header header">
      <div className="container">
        <a className="hader_logo" href="#">
          <img src="/img/Group.png" alt="splice" />
        </a>
        <nav className="header_navigation">
          <ul>
            <li><a className="header_navigation_a" href="#">STUDIO</a></li>
            <li><a className="header_navigation_a" href="#">COMMUNITY</a></li>
            <li><a className="header_navigation_a" href="#">SOUNDS</a></li>
            <li><a className="header_navigation_a" href="#">PLUGINS</a></li>
            <li><a className="header_navigation_a" href="#">BLOG</a></li>
          </ul>
        </nav>
        <div className="header_btn_div">
          <button id="openModalBtn" className="btn_div1"><a className="header_button" href="#">LOG IN</a></button>
          <div className="btn_div1"><a className="header_button" href="#">SIGN UP</a></div>
        </div>
      </div>
    </header>
  );
};

export default Header;