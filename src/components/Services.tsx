import React, { useReducer } from 'react'
import FormWrapper from './FormWrapper'



type ServiceData = {
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

type UpdateForm = ServiceData & {
 updateFields: (fields: Partial<ServiceData>) =>  void 
}

const Services = ({  ltl, air, customBrokerage, hazmat, ftl, ocean, flatBed, warehousing, international, specialized, other, updateFields}: UpdateForm) => {

  return (
    <FormWrapper title={'Please select a solution'} text={'At least one field is required *'}>
    <div className='grid lg:grid-cols-3 mt-5 lg:gap-10'>
      <div className='font-medium'>
        <input className='cursor-none' type="checkbox" name="LTL" id="LTL" value={ltl} onChange={e => updateFields({ltl : e.target.value})}/>
        <label htmlFor="LTL" className='inline-block mb-6 ml-1'>LTL</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="custom-brokerage" id="custom-brokerage" value={customBrokerage} onChange={e => console.log(e.target.value)}/>
        <label htmlFor="Custom brokerage" className='inline-block mb-6 ml-1'>Custom brokerage</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="air" id="air" value={air} onChange={e => console.log(e.target.value)}/>
        <label htmlFor="air" className='inline-block mb-6 ml-1'>Air</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="Hazmat" id="Hazmat" />
        <label htmlFor="Hazmat" className='inline-block mb-6 ml-1'>Hazmat</label>
      </div>
      <div className='font-medium'>
        <input className='cursor-none' type="checkbox" name="LTL" id="LTL" />
        <label htmlFor="LTL" className='inline-block mb-6 ml-1'>LTL</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="custom-brokerage" id="custom-brokerage" />
        <label htmlFor="Custom brokerage" className='inline-block mb-6 ml-1'>Custom brokerage</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="air" id="air" />
        <label htmlFor="air" className='inline-block mb-6 ml-1'>Air</label>
        <br/>
        <input className='cursor-none'type="checkbox" name="Hazmat" id="Hazmat" />
        <label htmlFor="Hazmat" className='inline-block mb-6 ml-1'>Hazmat</label>
      </div>
      <div className='font-medium'>
        <input className='cursor-none' type="checkbox" name="LTL" id="LTL" />
        <label htmlFor="LTL" className='inline-block mb-6 ml-1'>LTL</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="custom-brokerage" id="custom-brokerage" />
        <label htmlFor="Custom brokerage" className='inline-block mb-6 ml-1'>Custom brokerage</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="air" id="air" />
        <label htmlFor="air" className='inline-block mb-6 ml-1'>Air</label>
        <br/>
        <input className='cursor-none' type="checkbox" name="Hazmat" id="Hazmat" />
        <label htmlFor="Hazmat" className='inline-block mb-6 ml-1'>Hazmat</label>
      </div>
       
    </div>
  </FormWrapper>
  )
}

export default Services