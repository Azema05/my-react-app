import React from 'react';
import './styles.css';

const FeaturedInSection = () => {
  return (
    <section className="content_section2 text_img">
      <p className="text_sec2">FEATURED IN</p>
      <div className="imgs_sec2">
        <img src="/img/image 1.png" alt="logo_text1" />
        <img src="/img/image 5.png" alt="logo_text2" />
        <img src="/img/image 4.png" alt="logo_text3" />
        <img src="/img/image 3.png" alt="logo_text4" />
        <img src="/img/image 2.png" alt="logo_text5" />
      </div>
    </section>
  );
};

export default FeaturedInSection;