// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

function Slider(props) {
  const imgStyle = {
    verticalAlign: 'middle'
  };

  const slideStyle = {
    height: '450px',
    lineHeight: '450px'
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect="fade"
    >
        {props.images.map((src, i) => {
            return <SwiperSlide style={slideStyle}>
                <img src={src} alt={i} style={imgStyle}/>
            </SwiperSlide>;
        })}
    </Swiper>
  );
};

export default Slider;