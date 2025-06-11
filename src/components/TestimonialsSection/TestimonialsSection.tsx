import React from 'react';
import './styles.module.css';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="content_section6 creators_text">
      <div className="sec6_world">
        <div className="sec6_world_text">
          <h2 className="text_section6">What <span className="span_color">creators</span> are saying about Splice</h2>
          <p className="text2_section6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue tellus urna, mi velit diam. Turpis diam amet massa id.</p>
          <div className="div_btn_splice"><a className="btn_splice" href="#">TRY IT NOW</a></div>
        </div>
        <div className="cards" id="information-cards">
          {/* Пример карточек */}
          <div className="card">
            <p className="card_text">I can always find what I'm looking for on Splice, whether it's the exact sound I want or just a bit of inspiration.</p>
            <div className="card_footer">
              <img className="card_avatar" src="/img/image 9.png" alt="avatar" />
              <p className="card_person">
                <span className="card_person-name">Andrew Huang</span>
                <small className="card_person-type">Artist</small>
              </p>
            </div>
          </div>
          <div className="card">
            <p className="card_text">Finally a way to buy plugins that works. By paying a little at a time, producers can get legit access to the top VSTs.</p>
            <div className="card_footer">
              <img className="card_avatar" src="/img/image 9_1.png" alt="avatar" />
              <p className="card_person">
                <span className="card_person-name">KSHMR</span>
                <small className="card_person-type">Artist</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;