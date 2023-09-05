import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import '../Banner/Banner.css'

import ship from '../../assets/videos/ship.mp4'
import car from '../../assets/videos/pexels-kelly-lacy-5473765.mp4'


const Banner = () => {
  return (
			<Swiper
			data-cursor = 'default'
			modules={[Autoplay, Pagination , A11y]}
			slidesPerView={1}
			autoplay={{ delay: 3000}}
			watchSlidesProgress
			pagination = {{
				clickable: true
			}}
			loop
			className="relative w-screen h-screen bg-black"
		>

			<div className='absolute lg:top-[40%] top-[50%] left-[20%] lg:left-[42%] text-8xl z-50 text-white'>Logo</div>
			<div className=''>Logo</div>
				<SwiperSlide data-name="Air Freight">
					<video src={ship} autoPlay muted loop className='videoBg'/>
				</SwiperSlide>
				<SwiperSlide data-name="Land Freight">
					<video src={car} autoPlay muted loop className='videoBg'/>
				</SwiperSlide>	
				<SwiperSlide data-name="Rail Freight">
					<video src={car} autoPlay muted loop className='videoBg'/>
				</SwiperSlide>	
				<SwiperSlide data-name="Warehousing">
					<video src={car} autoPlay muted loop className='videoBg'/>
				</SwiperSlide>	
			</Swiper>
  )
}

export default Banner