import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { IoCaretDown } from "react-icons/io5";
import { MdLanguage } from 'react-icons/md';

interface Props {
  languageList: LanguageList[];
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

interface LanguageList {
  label: string;
  value: string;
}

const LanguageMenu : React.FC<Props> = ({ languageList, currentLanguage, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageChange = (lang : LanguageList) => {
    i18n.changeLanguage(lang.value);
    setIsMenuOpen(false);
    onLanguageChange(lang.label);
  };

  const handleClickOutside = (event: {target: any} ) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="text-gray-600 font-semibold py-2 px-3 rounded inline-flex items-center"
        onClick={toggleMenu}
      >
        <MdLanguage className="mr-1"></MdLanguage>
        <div className="mr-2 contents">{currentLanguage}
          <IoCaretDown className={`${isMenuOpen ? 'rotate-180' : ''} duration-300 pointer-events-none`}></IoCaretDown></div>
      </button>
      {
         isMenuOpen && <div className={`${isMenuOpen ? 'show' : 'hide'} menu_top absolute right-0 mt-2 w-20 bg-white shadow-secondary rounded-md shadow-md z-20`}>
         <ul className="py-2">
           {languageList.map((item, index) => (
             <li key={index} className="hover:bg-gray-300">
               <button
                 disabled={item.label=== currentLanguage}
                 className={`block px-3 py-2 ${item.label=== currentLanguage ? "bg-secondary text-white":"" } text-gray-700 hover:text-white w-full`}
                 onClick={() => handleLanguageChange(item)}
               >
                 {item.label}
               </button>
             </li>
           ))}
         </ul>
       </div>
      }
    </div>
  );
};

export default LanguageMenu;