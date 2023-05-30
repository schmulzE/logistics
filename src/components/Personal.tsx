import { useReducer } from "react"
import FormWrapper from "./FormWrapper"

type UserData = {
  firstName: string,
  lastName: string,
  company: string,
  website: string,
  phone: string,
  email:string
}

type UpdateForm = UserData & {
 updateFields: (fields: Partial<UserData>) =>  void 
}

const Personal= ({ firstName, lastName, company, website, phone, email, updateFields}: UpdateForm) => {
  
  return (
    <FormWrapper title={'general information'} text={'Your email address will not be published. Required fields are marked *'}>
      <div className='grid lg:grid-cols-2 gap-8 text-gray mt-8'>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">first name</span>
          <input className='outline-none' value={firstName} onChange={e => updateFields({firstName: e.target.value })}/>
        </div>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">last name</span>
          <input className='outline-none' value={lastName} onChange={e => updateFields({lastName: e.target.value})}/>
        </div>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">company</span>
          <input className='outline-none' value={company} onChange={e => updateFields({company: e.target.value })}/>
        </div>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">phone</span>
          <input className='outline-none' value={phone} onChange={e => updateFields({phone: e.target.value})}/>
        </div>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">email</span>
          <input className='outline-none' value={email} onChange={e => updateFields({email: e.target.value })}/>
        </div>
        <div className="border-b border-gray py-2">
          <span className="pr-4 capitalize text-sm">website</span>
          <input className='outline-none' value={website} onChange={e => updateFields({website: e.target.value })}/>
        </div>
      </div>
    </FormWrapper>
    
  )
}

export default Personal