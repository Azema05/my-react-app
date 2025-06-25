import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/bundle';
import './styles.css';

const MySwiper = () => {
  return (
    <section className="section_3_4">
      <div className="content_section3_1">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000} 
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={0}
          observer={true}
          watchSlidesProgress={true}
          className="mySwiper"
          style={{ width: '100%', height: 'auto' }}
        >
          <SwiperSlide>
            <img src="/img/image 12.png" alt="slide" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/image 12.png" alt="slide" loading="lazy" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/img/image 12.png" alt="slide" loading="lazy" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default MySwiper;

// const SwiperSlider = () => {
//   return (
//     <section className="section_3_4">
//       <div className="content_section3_1">
//         <div className="swiper mySwiper">
//           <div className="swiper-wrapper">
//             <div className="swiper-slide">
//               <img src="/img/image 12.png" alt="slide" />
//             </div>
//             <div className="swiper-slide">
//               <img src="/img/image 12.png" alt="slide" />
//             </div>
//             <div className="swiper-slide">
//               <img src="/img/image 12.png" alt="slide" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SwiperSlider;