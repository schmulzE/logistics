import React from "react";
import useOpenController from "../hooks/useOpenController";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
type AccordionData = {
    service: string,
    solution: string,
    text: string,
}
const Accordion = ({ section, key } : { section: AccordionData, key: number }) => {
  const { isOpen, toggle } = useOpenController(false);
  return (
    <>
      <ExpendableColumn
        service={section.service}
        solution={section.solution}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.text} />}
      <hr className="text-gray" />
    </>
  );
};

export const ExpendableColumn = ({ service, solution, isOpen, toggle } : { service: string, solution: string, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="lg:grid lg:grid-cols-12 grid-cols-1 py-12 " onClick={toggle}>
      <div className="lg:col-span-4 font-medium text-xl capitalize">{service}</div>
      <div className="lg:col-span-8 a text-base flex gap-12 text-gray lg:ml-4">
        {solution}
      <button className="text-black">
       <div className="text-xl bg-[#39ff14] rounded-full w-8 h-8 cursor-none" >
          {isOpen ? <AiOutlineMinus className={"inline morphicon"} /> : <AiOutlinePlus className='inline glyphicon'/>}
        </div>

      </button>
      </div>
    </div>
  );
};

export const TextSection = ({ text } : { text: string }) => {
  return (
    <div className="text-gray my-4 lg:grid lg:grid-cols-12 lg:gap-10">
      <div className="lg:col-start-5 lg:col-end-12" >{text}</div>
    </div>
  );
};

export default Accordion