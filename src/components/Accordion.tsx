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
  // console.log(section);
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
    <div className="grid grid-cols-12 py-12 " onClick={toggle}>
      <div className="col-span-4 font-medium text-xl capitalize">{service}</div>
      <div className="col-span-8 a text-base flex gap-12 text-gray ml-4">
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
    <div className="text-gray my-4 grid grid-cols-12 gap-10">
      <div className="col-start-5 col-end-12" >{text}</div>
    </div>
  );
};

export default Accordion