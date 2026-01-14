// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const SliderList = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
      }}
      loop={true}
      className='h-100 shadow-md'
    >
      <SwiperSlide className='w-full shadow-md'>Slide 1</SwiperSlide>
      <SwiperSlide className='w-full shadow-md'>Slide 2</SwiperSlide>
      <SwiperSlide className='w-full shadow-md'>Slide 3</SwiperSlide>
      <SwiperSlide className='w-full shadow-md'>Slide 4</SwiperSlide>
    </Swiper>
  )
}

export default SliderList