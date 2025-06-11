import React from 'react';
import './styles.module.css';

const SoundsSection: React.FC = () => {
  return (
    <section className="content_section3 text_find">
      <p className="text_sec3">SOUNDS</p>
      <h2 className="text2_sec3">Find your <span className="span_color">sound</span></h2>
      <p className="text3_sec3">Preview and download millions of royalty-free samples from top producers, artists, and sound designers. Available on desktop, web, and mobile.</p>
      <div className="btn_find_div"><a className="btn_find" href="#">TRY SOUNDS</a></div>
    </section>
  );
};

export default SoundsSection;