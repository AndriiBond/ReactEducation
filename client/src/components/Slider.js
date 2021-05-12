import React, {useRef} from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationSlider from './NavigationSlider';
import Translation from "./Translation";

// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Navigation]);

function Slider(props) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const slideStyle = {
    textAlign: 'center',
    height: '500px',
    overflow: 'hidden'
  };

  const textStyle = {
    textAlign: 'center'
  };

  const swiperSlides = props.images.map((src, i) => {
    return <SwiperSlide style={slideStyle}>
        <p style={textStyle}>
          <Translation resource="cat.name" params={[i]}/>
        </p>
        <img src={src} style={{width: '100%'}}/>
    </SwiperSlide>
  });

  return (
    <Swiper
      spaceBetween={10}
      breakpoints={{
        "500": {
          "slidesPerView": 1,
        },
        "1000": {
          "slidesPerView": 2,
        },
        "1460": {
          "slidesPerView": 3,
        }
      }}
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