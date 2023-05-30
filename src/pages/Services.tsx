import React, { Dispatch, useEffect } from 'react'
import Accordion from '../components/Accordion'
import { data } from "../data/accordion";
import Info from '../components/Info';
import ServiceForm from '../components/ServiceForm';
import { AiOutlineCheck } from 'react-icons/ai';
import ServicesList from '../components/ServicesList';
import Brochure from '../components/Brochure';

const Services = ({setIsInverted} : {setIsInverted: Dispatch<boolean>}) => {

  return (
    <div>
      <div  id='section-2' onMouseEnter={e => setIsInverted(true)} onMouseLeave={e => setIsInverted(false)} className="py-44 bg-[#39ff14] capitalize text-6xl font-bold" >
        <p className='mx-auto w-4/5'>What We Do</p>
      </div>
      <div className="grid grid-cols-4 mx-auto w-4/5">
        <div className="col-span-1 mt-32 mr-16">
          <ServicesList/>
          <Brochure setIsInverted={setIsInverted}/>
        </div>
        <div className="col-span-3 my-32">
          <h1 className="text-5xl font-medium">Worldwide shipping services.</h1>
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

          <h1 className='text-5xl font-medium mt-28 mb-14'>How this Works</h1>
          <div className="grid grid-cols-12 capitalize text-sm gap-10 my-4">
            <p className="text-gray col-span-4">services</p>
            <p className="text-gray col-span-8">solution</p>
          </div>
          <hr className='text-gray'/>
          {data.map((section, index: number) => (
            <Accordion key={index} section={section} />
          ))}

        <Info background={'bg-white'} text={'our solutions'} />
        
       <ServiceForm title={'Ask Us a Question'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu tincidunt ipsum.'} />
          
      </div>
    </div>
    </div>
  )
}

export default Services