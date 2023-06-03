// import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const BlogPost = () => {
  return (
      <div id="section-9" className="lg:px-32 px-4 lg:py-48 py-28">
      <h2 className="text-4xl font-medium mb-12">Latest blog posts</h2>

      <ul className="grid grid-flow-row lg:grid-cols-3 lg:gap-6 gap-20">
        <li>
          <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/maih-home-blog-img1.jpg" width={350} alt=""/>

          <div className="flex mt-5">
            <div className=" place-self-start pr-3 text-right ">
              <span className="font-medium text-4xl leading-none text-right place-self-end">	09</span>
              <br/> 
              <span className="inline-block text-sm font-medium">Aug</span>
            </div>
            <div className=" place-self-start pl-6 border-l border-gray">
              <p className="text-gray-dark capitalize">agriculture</p>
              <h3 className="text-xl font-medium">The Great Innovators</h3>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula</p>
              <Link to='' className='cursor-none flex a'>
                <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4'>
                  <AiOutlinePlus className='inline mt-3.5 ml-3.5 glyphicon'/>
                </div>
                <p className='mt-5 ml-5 capitalize text-xs font-medium place-self-center'>read more</p>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/maih-home-blog-img1.jpg" width={350} alt=""/>

          <div className="flex mt-5">
            <div className=" place-self-start pr-3 text-right ">
              <span className="font-medium text-4xl leading-none text-right place-self-end">	09</span>
              <br/> 
              <span className="inline-block text-sm font-medium">Aug</span>
            </div>
            <div className=" place-self-start pl-6 border-l border-gray">
              <p className="text-gray-dark capitalize">agriculture</p>
              <h3 className="text-xl font-medium">The Great Innovators</h3>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula</p>
              <Link to='' className='cursor-none flex a'>
                <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4'>
                  <AiOutlinePlus className='inline mt-3.5 ml-3.5 glyphicon'/>
                </div>
                <p className='mt-5 ml-5 capitalize text-xs font-medium place-self-center'>read more</p>
              </Link>
            </div>
          </div>
        </li>
        <li>
          <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/maih-home-blog-img1.jpg" width={350} alt=""/>

          <div className="flex mt-5">
            <div className=" place-self-start pr-3 text-right ">
              <span className="font-medium text-4xl leading-none text-right place-self-end">	09</span>
              <br/> 
              <span className="inline-block text-sm font-medium">Aug</span>
            </div>
            <div className=" place-self-start pl-6 border-l border-gray">
              <p className="text-gray-dark capitalize">agriculture</p>
              <h3 className="text-xl font-medium">The Great Innovators</h3>
              <p className="py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula</p>
              <Link to='' className='cursor-none flex a'>
                <div className='text-xl bg-[#39ff14] rounded-full w-12 h-12 cursor-none mt-4'>
                  <AiOutlinePlus className='inline mt-3.5 ml-3.5 glyphicon'/>
                </div>
                <p className='mt-5 ml-5 capitalize text-xs font-medium place-self-center'>read more</p>
              </Link>
            </div>
          </div>
        </li>
        
      </ul>
  </div>
  )
}

export default BlogPost