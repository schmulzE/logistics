import React, { Dispatch, useEffect } from 'react'
import Accordion from '../components/Accordion'
import { data } from "../data/accordion";
import Info from '../components/Info';
import ServiceForm from '../components/ServiceForm';
import { AiOutlineCheck } from 'react-icons/ai';
import ServicesList from '../components/ServicesList';
import Brochure from '../components/Brochure';

const Services = () => {

  return (
    <div>
      <div data-cursor="invert" id='section-2' className="py-44 bg-[#39ff14] capitalize lg:text-6xl text-3xl font-bold" >
        <p data-cursor="invert" className='mx-auto w-4/5'>What We Do</p>
      </div>
      <div className="lg:grid lg:grid-cols-4 lg:mx-auto px-8 lg:w-4/5">
        <div className="lg:col-span-1 mt-32 lg:mr-16 order-2 ;g:order-1">
          <ServicesList/>
          <Brochure />
        </div>
        <div className="lg:col-span-3 my-32 order-1 lg:order-2">
          <h1 className="lg:text-5xl text-3xl font-medium">Worldwide shipping services.</h1>
          <article className='my-9 text-gray-dark'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. Vivamus viverra tem pus sollicitudin. Proin vel tincidunt sem. Etiam sed dapibus augue. 
              Praesent eu pulvinar est ed quis mattis orci. Nam nisl erat, venena tis pretium libero vitae, suscipit cursus lacus. Proin porta felis quis mauris euismod sodales.
            </p>

            <p className='my-8'>
              Nam dignissim vitae lectus vitae tempor. In aliquam tempor pretium. 
              In nunc ex, feugiat non massa vestibulum, feugiat vestibulum, purus. Etiam libero quam, mattis eu arcu quis, ipsum dolor sit ame.
            </p>

            <ul>
              <li className='my-4'>
                <AiOutlineCheck className='inline-block mr-2' size={22} color='#39ff14'/>
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur abitur lobortis lobortis iaculis ad.</span>
              </li>
              <li className='my-4'>
                <AiOutlineCheck className='inline-block mr-2' size={22} color='#39ff14'/>
                <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cur abitur lobortis lobortis iaculis ad.</span>
              </li>
            </ul>
          </article>
          <img src="https://globefarer.qodeinteractive.com/wp-content/uploads/2021/08/services-img-1.jpg" width={800}/> 

          <h1 className='lg:text-5xl text-4xl font-medium mt-28 mb-14'>How this Works</h1>
          <div className="lg:grid lg:grid-cols-12 capitalize text-sm lg:gap-10 my-4 hidden">
            <p className="text-gray col-span-4">services</p>
            <p className="text-gray col-span-8">solution</p>
          </div>
          <hr className='text-gray'/>
          {data.map((section, index: number) => (
            <Accordion key={index} section={section} />
          ))}

        <Info classes='' background={'bg-white'} text={'our solutions'} />
        
       <ServiceForm title={'Ask Us a Question'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tincidunt ipsum.'} />
          
      </div>
    </div>
    </div>
  )
}

export default Services