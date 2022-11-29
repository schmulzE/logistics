import React from 'react'
import man from "../assets/images/pexels-pixabay-220453.jpg"
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination , A11y]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        loop
        pagination={{ clickable: true }}
        className="lg:w-4/5 lg:mb-28 lg:h-128 h-[450px]"
      >
        <SwiperSlide>
          <div className='pt-16 relative'>
            <div id="card" className="bg-white lg:w-128 w-80 mx-auto lg:h-96 h-72 rounded-lg text-center lg:ml-72 relative">
              <div id="section-5" className="absolute -top-16 right-24 lg:-top-16 lg:right-44 w-[120px] h-[120px] lg:w-[160px] lg:h-[160px]" style={{ backgroundImage: `url(${man})`,backgroundSize: 'cover', backgroundRepeat: "no-repeat", borderRadius: '50%' }}/>
              <h2 className='text-black pt-16 lg:pt-28'>Mr Joseph David</h2>
              <p className="text-gray">C.E.O Admot Rentals</p>
              <p className="text-black mt-6 lg:mt-28 lg:w-[70%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam natus adipisci porro labore voluptatem sunt.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pt-16 relative'>
            <div id="card" className="bg-white lg:w-128 w-80 mx-auto lg:h-96 h-72 rounded-lg text-center lg:ml-72 relative">
              <div id="section-5" className="absolute -top-16 right-24 lg:-top-16 lg:right-44 w-[120px] h-[120px] lg:w-[160px] lg:h-[160px]" style={{ backgroundImage: `url(${man})`,backgroundSize: 'cover', backgroundRepeat: "no-repeat", borderRadius: '50%' }}/>
              <h2 className='text-black pt-16 lg:pt-28'>Mr Joseph David</h2>
              <p className="text-gray">C.E.O Admot Rentals</p>
              <p className="text-black mt-6 lg:mt-28 lg:w-[70%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam natus adipisci porro labore voluptatem sunt.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial