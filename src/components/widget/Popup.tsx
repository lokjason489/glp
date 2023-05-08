import React, { useRef, useEffect,useCallback} from "react";
import { IoCloseCircleOutline } from 'react-icons/io5';

interface Props {
  isOpen: boolean;
  onClose:  React.Dispatch<React.SetStateAction<boolean>>;
  innerProp: React.ReactNode;
  classList: string;
  popupSize: string
}

const Popup: React.FC<Props> = ({ isOpen, onClose, innerProp, classList, popupSize }) => {
    const menuRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = useCallback((event: MouseEvent) => {
      console.log(event);
      console.log(menuRef);
      if (menuRef.current && (event.target instanceof Node && menuRef.current.contains(event.target))) {
        onClose(false);
      }
    }, [menuRef, onClose]);
    
    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
    
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [handleClickOutside]);
  return (
    <>
      {isOpen && (
        <div ref={menuRef} className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-40"></div>
      )}
      {isOpen && (
        <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-50  ${popupSize}`}>
          <div className="w-full text-right">
            <button
              className=" text-gray-500 hover:text-gray-800 text-right text-3xl font-black"
              onClick={()=> onClose(false)}
            >
              <IoCloseCircleOutline className="text-white hover:text-gray-300" />
            </button>
          </div>

          <div
            className={`shadow-lg rounded-lg mx-4 px-4 py-6 ${classList}`}
          >
            {innerProp}
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;