import React from 'react';
import './styles.css';

const HeroSection: React.FC = () => {
  return (
    <section className="content_section1 hero">
      <div className="hero__description">
        <img className="text_hero" src="/img/Group 6.png" alt="text" />
        <div className="text_header">
          <p>Royalty-free sounds. Industry-leading software. Endless inspiration. Start creating with Splice.</p>
        </div>
        <div className="btn_hero_div">
          <button><a className="btn_hero" href="#">SIGN UP</a></button>
        </div>
      </div>
      <img className="img_hero hero__img" src="/img/Vector 5.png" alt="people" />
    </section>
  );
};

export default HeroSection;