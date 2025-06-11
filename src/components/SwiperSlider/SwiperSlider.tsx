import React from 'react';
import './styles.module.css';

const SwiperSlider: React.FC = () => {
  return (
    <section className="content_section3_1">
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="/img/image 12.png" alt="slide" />
          </div>
          <div className="swiper-slide">
            <img src="/img/image 12.png" alt="slide" />
          </div>
          <div className="swiper-slide">
            <img src="../public/img/image 12.png" alt="slide" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SwiperSlider;