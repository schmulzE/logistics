import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './ImageReveal.css'


import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

const SectionOne = ({image, color} : {image: string, color: string}) => {
  gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        const wrapper = wrapperRef.current?.querySelector('.project_single_image-wrapper')
        const image = imageRef.current?.querySelector('.project_single_image')
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project_single",
                // start: "top center -=20%",
                // end: "bottom center",
                start: "top bottom",
                toggleActions: "restart none none none",
            }
        })
        tl.to(".project_single_image-wrapper", {
            ease: "power2",
            duration: 2,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })
        tl.to(".project_single_image",{
            duration: 2,
            scale: 1
        }, "<")
    }, [])
    

  return (
    <div id="section-2" className={`grid lg:grid-cols-3 lg:px-32 px-8 py-24 lg:py-24 text-center overflow-hidden bg-[${color}]`}>
      <div className='lg:border-r border-gray order-2 lg:order-1 col-span-2 lg:col-span-1 lg:h-[300px]'>
        <h1 className='text-3xl lg:text-[40px] font-medium lg:pr-4'>Fast and reliable <br/>shipping services</h1>
        <p className='py-8 lg:pr-4 text-left text-gray text-base'>Lorem, ipsum dolor sit amet consec tetur. <br className="hidden lg:block"/>A at facere eaque asperiores ipsum dolor.</p>
      <hr className='text-gray'/>
      <Link to='' className='cursor-none flex a lg:py-5 pt-10 lg:px-0'>
        <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none lg:w-18 lg:h-18 mt-4'>
          <AiOutlinePlus className='inline mt-3.5 lg:ml-0 ml-3.5 glyphicon'/>
        </div>
        <p className='mt-5 ml-5 capitalize text-[12px] font-medium lg:text-left'>view more <br/> about our services</p>
      </Link>
    </div>

    <div ref={containerRef} className={"project_single h-auto mb-10 lg:h-[300px] lg:ml-20 col-span-2 order-1 lg:order-2"}>
      <div ref={wrapperRef} className='project_single_image-wrapper'>
        <img ref={imageRef} src={image} alt="overlay-image" className='project_single_image' />
      </div>
    </div>

    </div>
  )
}

export default SectionOne