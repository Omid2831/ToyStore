// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import sliderData from './data';

const SliderList = () => {
  return (
    <section id="home">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        className='h-96 shadow-md'
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id} className='w-full relative'>
            <img
              src={slide.image}
              alt={slide.title}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white'>
              <h2 className='text-4xl md:text-5xl font-bold mb-4'>{slide.title}</h2>
              <p className='text-xl md:text-2xl'>{slide.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default SliderList