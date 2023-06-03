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

//   useLayoutEffect(() => {
      
//       const rule = CSSRulePlugin.getRule(".img-container::after");
//       if(rule) {
// 		const tl = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".img-container::after",
//                 start: "top 40%",
//                 end: "bottom 60%",
// 				toggleActions: "play play none restart",
// 			}
// 		});
		
// 		tl.to("body", { duration: 0.5, autoAlpha: 1 })
//         .to(rule, { duration: 1, width: "100%", ease: "Power2.ease" })
//         .set(rule, { duration: 0, right: 0, left: "unset" })
//         .to(rule, { duration: 1, width: "0%", ease: "Power2.ease" })
//         .to("img", { duration: 0.2, opacity: 1, delay: -1 })
//         .from(".img-container img", {
//             duration: 1,
//             scale: 1.4,
//             ease: "Power2.easeInOut",
//             delay: -1.2
//         });
//     }
        
// 	}, [])

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
                markers: true,
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
    <div id="section-2" className={`grid lg:grid-cols-3 lg:px-32 px-8 py-24 lg:py-48 text-center overflow-hidden bg-[${color}]`}>
      <div className='lg:border-r border-gray order-2 lg:order-1 col-span-2'>
        <h1 className='text-3xl font-medium lg:pr-4'>Fast and reliable <br/>shipping services</h1>
        <p className='py-8 lg:pr-4 text-left text-gray text-base'>Lorem, ipsum dolor sit amet consec tetur ipsum dolor sit. <br className="hidden lg:block"/>A at facere eaque asperiores vero dolores ipsum dolor sit.</p>
      <hr className='text-gray'/>
      <Link to='' className='cursor-none flex a pt-10'>
        <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4'>
          <AiOutlinePlus className='inline mt-3.5 lg:ml-3.5 glyphicon'/>
        </div>
        <p className='mt-5 ml-5 capitalize text-xs font-medium'>view more <br/> about our services</p>
      </Link>
      
      </div>

      {/* <figure className={"img-container ml-20 col-span-2"}>
        <img src={image} alt="overlay-image"/>
    </figure> */}

    <div ref={containerRef} className={"project_single h-auto mb-10 lg:h-[300px] lg:ml-20 col-span-2 order-1 lg:order-2"}>
      <div ref={wrapperRef} className='project_single_image-wrapper'>
        <img ref={imageRef} src={image} alt="overlay-image" className='project_single_image' />
      </div>
    </div>

    </div>
  )
}

export default SectionOne