import React, { ReactNode } from 'react'

const FormWrapper = ({title, text, children}: {title: string, text: string, children: ReactNode}) => {
  return (
    <div>
    <h1 className="text-5xl capitalize my-6 font-medium">{title}</h1>
    <p className="text-gray-dark">{text}</p>
    <>
      {children}
    </>
    </div>
  )
}

export default FormWrapper