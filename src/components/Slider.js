import React, { useState, useRef} from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationSlider from './NavigationSlider';
// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Navigation]);

function Slider(props) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const imgStyle = {
    verticalAlign: 'middle'
  };

  const slideStyle = {
    height: '450px',
    lineHeight: '450px'
  };

  const swiperSlides = props.images.map((src, i) => {
    return <SwiperSlide style={slideStyle}>
        <img src={src} style={imgStyle}/>
    </SwiperSlide>;
  });

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={2}
      navigation
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
    >
        {swiperSlides}
        <NavigationSlider navigationPrevRef={navigationPrevRef} navigationNextRef={navigationNextRef}/>
    </Swiper>
  );
};

export default Slider;