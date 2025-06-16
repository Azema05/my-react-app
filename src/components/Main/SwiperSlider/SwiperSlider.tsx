import React from 'react';
import './styles.css';

const SwiperSlider = () => {
  return (
    <section className="section_3_4">
      <div className="content_section3_1">
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="/img/image 12.png" alt="slide" />
            </div>
            {/* <div className="swiper-slide">
              <img src="/img/image 12.png" alt="slide" />
            </div>
            <div className="swiper-slide">
              <img src="/img/image 12.png" alt="slide" />
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperSlider;