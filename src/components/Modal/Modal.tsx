import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
// import { ImCheckmark } from 'react-icons/im'

const ModalContent = ({onConfirm}: {onConfirm: () => void}) => {
  const navigate = useNavigate()

  return (
    <Fragment>
      <div
        onMouseLeave={e => onConfirm}
        className=" overflow-x-hidden fixed top-[74px] right-[101px] z-50 outline-none focus:outline-none"
      >
        <div onMouseLeave={e => onConfirm} className="">
          {/*content*/}
          <div className="border-0 py-10 relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between px-[22px] rounded-t">
              <h2 className="mb-4 text-base">Keep track of your packages</h2>
            </div>
            {/*body*/}
            <div className="my-3 text-center">
             <input type="text" className="py-5 px-5 border-gray-light border text-center text-sm" placeholder="Tracking ID" />
            </div>
            {/*footer*/}
            <div className="text-center px-6">
              <button className='cursor-none flex a bg-[#39ff14] w-full my-2.5'>
                <div className='text-xl w-12 h-12 cursor-none mt-4'>
                  <AiOutlinePlus className='inline ml-8 glyphicon'/>
                </div>
                <p className='mt-0.5 ml-3 capitalize text-base font-medium place-self-center'>track & trace</p>
              </button>
              <Link to="#" className="mt-4 inline-block capitalize text-gray">need help?</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
const Backdrop = ({onConfirm}: {onConfirm: () => void}) => {
  return <div className={styles.backdrop} onMouseEnter={onConfirm}></div>;
};


const Modal= ({onConfirm}: {onConfirm: () => void}) => {
  const modalOption = (
    <ModalContent
    onConfirm={onConfirm}
    />
  );
  return (
    <div>
      {ReactDOM.createPortal(
        <Backdrop  onConfirm={onConfirm}/>,
        document.getElementById("backdrop")!
      )}
      {ReactDOM.createPortal(
        modalOption,
        document.getElementById("modal")!
      )}
    </div>
  );
};

export default Modal;