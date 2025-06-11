import React from 'react';
import './styles.module.css';

const Footer: React.FC = () => {
  return (
    <footer className="page_footer footer">
      <div className="footer-container">
        <div className="logo-section">
          <img src="/img/Logo-Lock-Up-Light_3x 2.png" alt="Splice Logo" className="logo" />
          <p className="copyright">2021 Splice.com All Rights Reserved</p>
        </div>
        <div className="menu-grid">
          <div className="menu-column">
            <h2>STUDIO</h2>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">About Splice Studio</a></li>
              <li><a href="#">Managing Your Production Library</a></li>
              <li><a href="#">Collaborating with Baewatch</a></li>
            </ul>
          </div>
          <div className="menu-column">
            <h2>COMMUNITY</h2>
            <ul>
              <li><a href="#">Ableton Live Projects</a></li>
              <li><a href="#">FL Studio Projects</a></li>
              <li><a href="#">Logic Pro X Projects</a></li>
              <li><a href="#">Garageband Projects</a></li>
              <li><a href="#">Remix Contests</a></li>
              <li><a href="#">Tiestos Secrets</a></li>
            </ul>
          </div>
          <div className="menu-column">
            <h2>SOUNDS</h2>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Catalog</a></li>
              <li><a href="#">How Jauz Uses Sounds</a></li>
              <li><a href="#">deadmau5s Chimaera</a></li>
              <li><a href="#">KSHMR Vol. 2</a></li>
            </ul>
          </div>
          <div className="menu-column">
            <h2>PLUGINS</h2>
            <ul>
              <li><a href="#">Top VSTs</a></li>
              <li><a href="#">Serum</a></li>
              <li><a href="#">Rent to Own</a></li>
              <li><a href="#">Free Plugins</a></li>
              <li><a href="#">Top Manufacturers</a></li>
            </ul>
          </div>
          <div className="menu-column">
            <h2>BEATMAKER</h2>
            <ul>
              <li><a href="#">Create Your Own Beat</a></li>
              <li><a href="#">Wakapella</a></li>
              <li><a href="#">Just Blaze</a></li>
            </ul>
          </div>
          <div className="menu-column">
            <h2>BLOG</h2>
            <ul>
              <li><a href="#">Latest Posts</a></li>
              <li><a href="#">Using Soundtoys Decapitator</a></li>
              <li><a href="#">Mastering 101</a></li>
              <li><a href="#">Producing Future Beats</a></li>
              <li><a href="#">Belonging at Splice</a></li>
            </ul>
          </div>
        </div>
        <div className="social-section">
          <h2>FIND US ON SOCIAL</h2>
          <div className="social-icons">
            <a href="#"><img src="/img/Facebook - Negative.png" alt="Facebook" /></a>
            <a href="#"><img src="/img/Twitter - Negative.png" alt="Twitter" /></a>
            <a href="#"><img src="/img/Instagram - Negative.png" alt="Instagram" /></a>
            <a href="#"><img src="/img/YouTube - Negative.png" alt="Instagram" /></a>
          </div>
          <div className="additional-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Jobs</a>
            <a href="#">Contact</a>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;