import React from 'react';
import './styles.css';
import volume from '../../../../img/Volume Up.png'
import unlock from '../../../../img/Unlock.png'
import download from '../../../../img/Download.png'
import play from '../../../../img/Play.png'

const FuncSection = () => {
  return (
    <section className="section6_2">
      <div>
        <h2 className="herotext_sec6_2">As good as it sounds</h2>
      </div>
      <div className="con_sec6_2">
        <div className="d1sec6_2">
          <img src={volume} alt="Volume Up" />
          <h2 className="textsec6_2">100 royalty free</h2>
          <p className="text2sec6_2">Use sounds for anything. They’re cleared for commercial use.</p>
        </div>
        <div className="d2sec6_2">
          <img src={unlock} alt="Unlock" />
          <h2 className="text3sec6_2">No commitments</h2>
          <p className="text4sec6_2">Cancel your subscription at any time, no questions asked.</p>
        </div>
        <div className="d3sec6_2">
          <img src={download} alt="Download" />
          <h2 className="text5sec6_2">Yours forever</h2>
          <p className="text6sec6_2">Keep everything you download. Even if you cancel.</p>
        </div>
        <div className="d4sec6_2">
          <img src={play} alt="Play" />
          <h2 className="text7sec6_2">Individual samples</h2>
          <p className="text8sec6_2">Preview & download individual samples, not just full packs.</p>
        </div>
      </div>
    </section>
  );
};

export default FuncSection;