import { useRef, useState} from "react";
import man from '../assets/images/pexels-tima-miroshnichenko-6169660.jpg'


import Banner from "../components/Banner"
import Blog from "../components/BlogPost";
import SectionOne from "../components/ImageReveal/ImageReveal";
import ParallaxImage from "../components/ParallaxImage";
import Info from "../components/Info";
import Tab from "../components/Tab/Tab";

const Home = () => {
	const [openTab, setOpenTab] = useState(1)

  return (
		<div className='relative overflow-hidden'>
			 
			<Banner />
			<SectionOne image="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-img-1.jpg" color="#dfdfdf"/>
			<Tab/>
			<ParallaxImage image={man}/>
			<Info background={""} text={""} classes={"mx-auto w-4/5"} />	
			<SectionOne image="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/main-home-img-2.jpg" color="#fff" />
			<ParallaxImage image="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/10/main-home-image-3-new.jpg"/>
			<div id="section-8" className="bg-[#dfdfdf] px-32 py-44">
					<p className="text-4xl text-center font-medium w-[90%] mx-auto"> innovative service for easy & fast shipments, transportation coordinated <br/> qualified staff</p>
			</div>
			<Blog />

			
		</ div>
  )
}

export default Home