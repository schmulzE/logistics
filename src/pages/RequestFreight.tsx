import React, { Dispatch, FormEvent, useEffect, useRef, useState } from 'react'
import Personal from '../components/Personal'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi"
import { useMultiStepForm } from '../hooks/useMultiStepForm'
import Services from '../components/Services'
import StepIndex from '../components/Accordion'


type FormData = {
  firstName: string,
  lastName: string,
  email: string,
  company: string,
  phone: string,
  website: string,
  ltl: string,
  air: string,
  customBrokerage: string,
  hazmat: string,
  ftl: string,
  ocean: string,
  flatBed: string,
  warehousing: string,
  international: string,
  specialized: string,
  other: string,
}

const INITIAL_DATA: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  phone: '',
  website: '',
  ltl: '',
  air: 'air',
  customBrokerage: 'customBrokerage',
  hazmat: 'hazmat',
  ftl: 'ftl',
  ocean: 'ocean',
  flatBed: 'flatBed',
  warehousing: 'warehousing',
  international: 'international',
  specialized: 'specialized',
  other: 'other',
}

const RequestFreight = () => {
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
     return{...prev, ...fields}
    })
  }

  const {next, step, steps, back, currentStepIndex, isFirstStep, isLastStep} = useMultiStepForm([
    <Personal {...data} updateFields={updateFields}/>, 
    <Services {...data} updateFields={updateFields}/>,
    <Personal {...data} updateFields={updateFields}/>
  ]) 

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if(!isLastStep) return next()
    
  }

  return (
    <div>
      <div data-cursor="invert" id='section-2' className="lg:p-44 py-44 px-8 bg-[#39ff14] capitalize lg:text-6xl text-4xl font-semibold lg:font-bold" >
        step {currentStepIndex + 1} / {steps.length}
      </div>
      {/* <StepIndex currentStepIndex={currentStepIndex} steps={steps}/> */}
      <div className='bg-[#dfdfdf my-32'>
        <form onSubmit={onSubmit} className='lg:px-40 px-8 cursor-none'>
         
          {step}

          {!isFirstStep && (<button type="button" onClick={back} className='bg-[#39ff14] mt-10 mr-4 p-2.5 font-medium uppercase text-black'><HiOutlineChevronLeft size={22} className="inline-block"/> prev step </button>)}
          <button data-cursor="click" type="submit" className='bg-[#39ff14] mt-10 cursor-none p-2.5 font-medium uppercase text-black'>{isLastStep ? 'submit' : 'next step' }<HiOutlineChevronRight size={22} className="inline-block"/></button>
        </form>
      </div>
    </div>
  )
}

export default RequestFreight


