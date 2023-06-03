import { Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Link } from 'react-router-dom';
import $ from "jquery"
import '../Banner/Banner.css'


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import plane from '../assets/images/plane.gif'
import ship from '../../assets/videos/ship.mp4'
import car from '../../assets/videos/pexels-kelly-lacy-5473765.mp4'
// import man from '../assets/images/pexels-tima-miroshnichenko-6169660.jpg'


const Banner = () => {
  return (
			<Swiper
			modules={[Autoplay, Pagination , A11y]}
			slidesPerView={1}
			autoplay={{ delay: 8000}}
			// pagination={{ type: 'custom', clickable: true, renderCustom(swiper, current, total:any) {
			// 	let labels: string[] = [];
			// 	$(".swiper-slide").each(function(i: number) {
			// 		labels.push($(this).data("name"));
			// 		// console.log(labels)
			// 	});
			// 	let text = "<div style='background-color:transparent;padding:20px;width:100%;text-align:left'>";
			// 	for (let i = 0; i < total; i++) {
			// 		// console.log(i)
			// 		if (i === current) {
			// 			text += "<span style='width:19rem;border-bottom:1px solid #39ff14;margin-right:8px;padding:10px;color:white;display:inline-block;padding-left:0;'>" + labels[i] + "</span>";
			// 		} else {
			// 			text += "<span style='border-bottom:1px solid white;margin-right:20px;color:white;padding:10px;padding-left:0;width:19rem;display:inline-block'>" + labels[i] + "</span>";
			// 		}
			// 	}
			// 	text += "</div>";
			// 	return text;
			// }, }}
	
			loop
			className="relative w-screen h-screen bg-black"
		>

			<div className='absolute lg:top-[40%] top-[50%] left-[20%] lg:left-[42%] text-8xl z-50 text-white'>Logo</div>
			<div className=''>Logo</div>
			{/* <Link to="#section-2" className='absolute top-[60%] left-[47%] text-5xl bg-[#39ff14] rounded-full z-50 icon-container w-14 h-14'>
				<svg className='pl-3' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="105" height="128" viewBox="0 0 256 256" xmlSpace="preserve">

					<path id="short" d="M 90 23.25 c 0 -0.384 -0.146 -0.768 -0.439 -1.061 c -0.586 -0.586 -1.535 -0.586 -2.121 0 L 45 64.629 L 2.561 22.189 c -0.585 -0.586 -1.536 -0.586 -2.121 0 c -0.586 0.586 -0.586 1.535 0 2.121 l 43.5 43.5 c 0.585 0.586 1.536 0.586 2.121 0 l 43.5 -43.5 C 89.854 24.018 90 23.634 90 23.25 z" />

				</svg>
				</Link> */}
				<SwiperSlide data-name="Air Freight">
					{/* <video src={ship} autoPlay muted loop className='videoBg object-cover h-screen absolute inset-0'/> */}
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