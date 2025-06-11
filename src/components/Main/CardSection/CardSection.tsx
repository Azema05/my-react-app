import React from 'react';
import './styles.css';

const CardSection: React.FC = () => {
  return (
    <section className="content_section6 creators_text">
      <div className="sec6_world">
        <div className="sec6_world_text">
          <h2 className="text_section6">What <span className="span_color">creators</span> are saying about Splice</h2>
          <p className="text2_section6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.</p>
          <div className="div_btn_splice"><a className="btn_splice" href="#">TRY IT NOW</a></div>
        </div>
        <div className="cards" id="information-cards">
        </div>
      </div>
    </section>
  );
};

export default CardSection;