import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import FeaturedInSection from '../FeaturedInSection/FeaturedInSection';
import SoundsSection from '../SoundsSection/SoundsSection';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import PluginsSection from '../PluginsSection/PluginsSection';
import StudioSection from '../StudioSection/StudioSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import BenefitsSection from '../BenefitsSection/BenefitsSection';
import CallToActionSection from '../CallToActionSection/CallToActionSection';
import Modal from '../Modal/Modal';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturedInSection />
      <SoundsSection />
      <SwiperSlider />
      <PluginsSection />
      <StudioSection />
      <TestimonialsSection />
      <BenefitsSection />
      <CallToActionSection />
      <Modal />
    </>
  );
};

export default Home;