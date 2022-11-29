import React from 'react'
import banner01 from '../assets/images/delivery-man.jpg'
import banner02 from '../assets/images/bannerAsset 1-100.jpg'
import banner03 from '../assets/images/pexels-monstera-5997313.jpg'
import image01 from '../assets/images/pexels-david-dibert-1117211.jpg'
import image02 from '../assets/images/pexels-pixabay-358220.jpg'
import image03 from '../assets/images/pexels-kai-pilger-1544372.jpg'
import image04 from '../assets/images/pexels-ketut-subiyanto-4246112.jpg'
import image05 from '../assets/images/pexels-liza-summer-6348095.jpg'
import image06 from '../assets/images/pexels-tiger-lily-4483774.jpg'
import background from '../assets/images/Background.jpg'
import map from "../assets/images/map.svg"
import { BsBellFill } from 'react-icons/bs'
import { BiTargetLock } from 'react-icons/bi'
import Testimonial from './Testimonial'

const Home = () => {


  return (
    <div>
      <div id="section-1" style={{ backgroundImage: `url(${banner01})`,backgroundSize: 'cover' }} className="flex text-white lg:h-[130vh] h-[100vh]">
        <div id="hero-text" className='lg:pl-28 flex lg:w-[78%] flex-col content-center justify-center bg-gradient-to-r from-[#00312D]'>
          <h1 className='lg:text-7xl lg:font-medium lg:w-[55%] text-4xl text-center'>Think beyond the border</h1>
          <p className='mb-12 mt-5 mx-3 lg:mx-0 text-center lg:text-left'>Go beyond logistics, make the world go round and revolutionize business.</p>
          <div className='lg:w-[62%] mx-3 bg-white p-5 rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg'>
            <p className="my-5">Enter your tracking number</p>
            <div className="grid grid-cols-2">
              <input type="text" placeholder='Tracking No.' className="p-4 lg:w-[320px] lg:mr-10 outline-none text-black" />
              <button className="p-4 text-xs lg:text-base bg-[#73be01] lg:w-[200px] lg:ml-16 w-[150px]">Track your shipment</button>
            </div>
          </div>
        </div>
      </div>
      <div id="section-2" style={{ backgroundImage: `url(${banner01})`, backgroundSize: 'cover', }} className="bg-[#00312d] h-auto lg:h-[190vh]">
         <div id="caption" className='h-auto lg:h-[190vh] bg-[#00312d] bg-opacity-95 text-center lg:p-24 p-12'>
          <h1 className=' text-4xl lg:text-5xl lg:font-semibold mt-10 capitalize text-[#73be01]'>our services</h1>
          <p className='text-md mt-5 text-white text-lg'>Services we offer to our client</p>
          <div className="grid lg:grid-cols-3 gap-8 mt-20 lg:text-left text-center text-white mb-12">
            <div  className='text-white'>
              <img src={image04} alt="" />
              <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 mb-6 text-base">Day to Day delivery across all state in the country</p>
            </div>
            <div className='text-white'>
              <img src={image01} alt="" />
              <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 mb-6 text-base">Day to Day delivery across all state in the country</p>
            </div>
            <div>
              <img src={image03} alt="" />
              <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 mb-6 text-base">Day to Day delivery across all state in the country</p>
            </div>
            <div>
              <img src={image02} alt="" />
             <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 text-base">Day to Day delivery across all state in the country</p>
            </div>
            <div>
              <img src={image06} alt="" />
              <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 text-base">Day to Day delivery across all state in the country</p>
            </div>
            <div>
              <img src={image05} alt="" />
              <h1 className="mt-2 capitalize text-xl">local shipping</h1>
              <p className="mt-3 text-base">Day to Day delivery across all state in the country</p>
            </div>
          </div>
        </div>
      </div>
      <div id="section-3" className='lg:p-16 text-center'>
        <div id="caption" className="text-center mt-10 lg:text-5xl px-12 text-3xl lg:w-1/2 mx-auto lg:font-semibold">Why choose us has your <span className='text-[#73be01]'>Logistics</span> service</div>
        <div className="grid lg:grid-cols-2 gap-0 mt-20 ">
          <img src={banner02} alt="" className='w-[350px] mx-auto'/>
          <div className='mt-8'>
            <div className="flex flex-row mb-14">
              <h3 className='lg:text-5xl text-3xl lg:font-bold p-5 text-[#00312d]'>01</h3>
              <div className='text-left p-5'>
                <h3 className='lg:text-lg text-xl font-medium lg:font-semibold'>Seamless delivery service</h3>
                <p className='text-base text-gray'>shipping through us is good and you'll get the value of what you paid for</p>
              </div>
            </div>
            <div className="flex flex-row mb-14">
              <h3 className='lg:text-5xl text-3xl lg:font-bold p-5 text-[#73be01]'>02</h3>
              <div className='text-left p-5'>
                <h3 className='lg:text-lg text-xl  font-medium lg:font-semibold'>Seamless delivery service</h3>
                <p className='text-base text-gray'>shipping through us is good and you'll get the value of what you paid for</p>
              </div>
            </div>
            <div className="flex flex-row mb-14">
              <h3 className='lg:text-5xl text-3xl lg:font-bold p-5 text-[#00312d]'>03</h3>
              <div className='text-left p-5'>
                <h3 className='lg:text-lg text-xl font-medium lg:font-semibold'>Seamless delivery service</h3>
                <p className='text-base text-gray'>shipping through us is good and you'll get the value of what you paid for</p>
              </div>
            </div>
            <div className="flex flex-row">
              <h3 className='lg:text-5xl text-3xl lg:font-bold p-5 text-[#73be01]'>04</h3>
              <div className='text-left p-5'>
                <h3 className='lg:text-lg text-xl font-medium lg:font-semibold'>Seamless delivery service</h3>
                <p className='text-base text-gray'>shipping through us is good and you'll get the value of what you paid for</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="section-4" className='bg-[#EFFFD6] lg:p-24 h-auto mt-24 lg:mb-40 mb-24 py-24'>
        <div id="caption" className="text-center lg:text-5xl text-4xl lg:font-semibold">We also offer</div>
          <div className="grid lg:grid-cols-2 lg:gap-24 gap-12 mt-20 lg:ml-10 mx-10">
            <div className='lg:mt-5 order-2'>
              <div className="flex flex-row mb-5">
                <BiTargetLock  color={'#73be01'} className="w-20 h-20"/>
                <div className='text-left ml-8'>
                  <h3 className='lg:text-lg lg:font-semibold'>Seamless delivery service</h3>
                  <p className='text-base'>shipping through us is good and you'll get the value of what you paid for</p>
                </div>
              </div>
              <div className="flex">
               <BsBellFill size={32} color={'#73be01'} className="w-16 h-16"/>
                <div className='text-left ml-8'>
                  <h3 className='lg:text-lg lg:font-semibold'>seamless delivery service</h3>
                <p className='text-base'>shipping through us is good and you'll get the value of what you paid for</p>
              </div>
            </div>
          </div>
          <div className='lg:h-[250px] lg:w-[420px] h-[130px] w-[300px] order-1' style={{ backgroundImage: `url(${banner03})`, backgroundSize: 'cover', backgroundPosition: 'center center' }}/>
        </div>
      </div>
      <div id="section-5" className="lg:my-16 flex flex-col justify-center content-center text-center relative lg:h-[130vh] h-[100vh]" style={{ backgroundImage: `url(${background})`,backgroundSize: 'cover', color: 'white' }}>
        <h1 className='capitalize lg:mt-28 mb-10 lg:text-5xl text-3xl lg:font-semibold'>What our <span className=' text-[#73be01]'>clients</span> say <br/> about us </h1>
        <Testimonial/>
      </div>
      <div id="section-6" className='text-center h-auto mt-36 mb-36'>
        <h1 className="text-4xl lg:text-5xl capitalize text-[#73be01] font-semibold">contact us</h1>
        <div className="grid lg:grid-cols-2 gap-8 lg:px-32 lg:mt-28 mt-14">
          <div className="lg:text-left order-2 lg:order-1">
            <h3 className=" font-medium capitalize lg:text-2xl text-xl">warehouse</h3>
            <p className="text-gray mb-10">Plot 10A, Dayo Gerald Avenue, Victoria Island, Nigeria</p>
            <h3 className=" font-medium capitalize lg:text-2xl text-xl">Head office</h3>
            <p className="text-gray mb-10">Plot 10A, Dayo Gerald Avenue, Victoria Island, Nigeria</p>
            <h3 className=" font-medium capitalize lg:text-2xl text-xl">contact</h3>
            <ul className="text-gray">
              <li className="py-3">Mobile : +62813 8075 0179</li>
              <li className="py-3">Email : falconlogistiks@yahoo.com</li>
              <li className="py-3">Office : Ph: 021 2270 2243</li>
            </ul>
          </div>
          <div id="section-5" className="order-1 lg:order-2" style={{ backgroundImage: `url(${map})`,backgroundSize: 'cover', height: '360px', width: '100%' }}/>
        </div>
      </div>
    </div>
  )
}

export default Home