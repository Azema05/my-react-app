import React from 'react';
import HeroSection from '../Main/HeroSection/HeroSection';
import FeaturedInSection from '../Main/FeaturedInSection/FeaturedInSection';
import SoundsSection from '../Main/SoundsSection/SoundsSection';
import SwiperSlider from '../Main/SwiperSlider/SwiperSlider';
import PluginsSection from '../Main/PluginsSection/PluginsSection';
import StudioSection from '../Main/StudioSection/StudioSection';
import CardSection from '../Main/CardSection/CardSection';
import FuncSection from '../Main/FuncSection/FuncSection';
import GradientSection from '../Main/GradientSection/GradientSection';
import Modal from '../Modal/Modal';

const Home = () => {
  return (
    <>
     <h1>THIS IS HOME PAGE</h1>
      <HeroSection />
      <FeaturedInSection />
      <SoundsSection />
      <SwiperSlider />
      <PluginsSection />
      <StudioSection />
      <CardSection />
      <FuncSection />
      <GradientSection />
      <Modal />
    </>
  );
};

export default Home;