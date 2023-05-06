import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5'

const Popup = ({ isOpen, onClose, children , className }) => {
  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"></div>
      )}
      {isOpen && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-20 min-w-[70%] max-w-[70%]">
            <div className='w-full text-right'> <button
            className=" text-gray-500 hover:text-gray-800 text-right text-3xl font-black"
            onClick={onClose}
          >
            <IoCloseCircleOutline className="text-white hover:text-gray-300"/>
          </button></div>
         
          <div className={`shadow-lg rounded-lg mx-4 px-4 py-6  ${className}`}>{children}</div>
        </div>
      )}
    </div>
  )
}

export default Popup
