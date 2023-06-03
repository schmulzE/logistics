import React, { useEffect, useState, useRef } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { TabList } from '../../data/tab'
import { gsap } from 'gsap';
import styles from "../Tab/Tab.module.css"



const Tab = () => {
  const [openTab, setOpenTab] = useState(1)
  const revealRef = useRef<HTMLLIElement[]>([])
  const infoRef = useRef<HTMLDivElement[]>([])
  revealRef.current = []
  infoRef.current = []
  
  useEffect(() => {
    revealRef.current.forEach((el, index) => {
      el.addEventListener('click', () => {
        infoRef.current.forEach((el: any, index) => {
          // const tl = gsap.timeline()
          const container = el.querySelector('.text-container');
          const title = el.querySelector('.title');
          const text = el.querySelector('.text');
          const links = el.querySelector('.a');
          gsap.fromTo(container, 
            {autoAlpha: 0, 
              x: -30
            },
            {
              x: 0,
              duration: 1,
              autoAlpha: 1,
              // ease: "Power2.easeInOut",
            })
          gsap.fromTo(title, 
            {autoAlpha: 0, 
              x: -50
            },
            {
              x: 0,
              duration: 0.8,
              autoAlpha: 1,
              ease: "Power2.easeInOut",
              delay: 0.2
            })
          gsap.fromTo(text, 
            {autoAlpha: 0, 
              x: -80
            },
            {
              x: 0,
              duration: 0.8,
              autoAlpha: 1,
              ease: "Power2.easeInOut",
              delay: 0.3
            })
          gsap.fromTo(links, 
            {autoAlpha: 0, 
              x: -80
            },
            {
              x: 0,
              duration: 0.8,
              autoAlpha: 1,
              ease: "Power2.easeInOut",
              delay: 0.4
            })
          })
      })
    })
  }, [])

  const tabListRef = (el: HTMLLIElement) => {
    if (el && !revealRef.current.includes(el)) {
      revealRef.current.push(el)
    }
  }
  const divsRef = (el: HTMLDivElement) => {
    if (el && !infoRef.current.includes(el)) {
      infoRef.current.push(el)
    }
  }
  

  return (
    <div id="section-3" className='bg-[#fff] lg:px-32 px-16 py-36' >
      <div className="flex flex-wrap gap-3">
       <div className="w-full relative">
          <ul
            className="flex mb-0 list-none pt-4 flex-col content-start lg:flex-row w-[52%] lg:w-full"
            role="tablist"
            >
            {TabList.map((item) => ( 
            <li key={item.id} ref={tabListRef} className={"-mb-px last:mr-0 lg:flex-auto lg:text-center " + (openTab !== item.id && `${styles["tab-link"]}`)}>
              <a
                className={
                  "text-sm md:text-lg font-medium lg:px-5 py-4 cursor-none block leading-normal" +
                  (openTab === item.id
                    ? "border-[#39ff14] border-b-[3px] border-b-[#39ff17] relative z-30"
                    : "outline-gray-light outline-1")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(item.id);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
               {item.name}
              </a>
            </li>
            ))}
          </ul>
          <hr className='lg:absolute w-full lg:top-[77.5px] text-gray block'/>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
            <div className="py-5 flex-auto">
              <div className="tab-content tab-space">
               {TabList.map((item) => ( 
                  <div key={item.id} ref={divsRef} className={openTab === item.id ? "block" : "hidden"} id="link">
                  <div className="lg:grid grid-cols-2 gap-10 mt-8">
                     <div className="image-container">
                        <img src={item.image} width={800}/>
                     </div>
                     <div className="text-container lg:px-16">
                        <h1  className="text-3xl font-bold mb-5 title mt-8 lg:mt-0">Secure courier<br/> for small & big packages</h1>
                        <p className='mb-5 text'>{item.text}</p>
                        <hr/>
                        <Link  to='' className='cursor-none flex a'>
                           <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4 '>
                           <AiOutlinePlus className='inline mt-3.5 ml-3.5 glyphicon'/>
                           </div>
                           <p className='mt-5 ml-5 text-xs capitalize font-medium'>view more <br/> about our services</p>
                        </Link>
                     </div>
                  </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Tab