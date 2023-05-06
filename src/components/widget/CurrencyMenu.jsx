import { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { IoCaretDown } from "react-icons/io5";
import Tooltip from './Tooltip';
import { MdOutlineCurrencyExchange } from 'react-icons/md';

const CurrencyMenu = ({ CurrencyList, currentCurrency, onCurrencyChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCurrencyChange = (currency) => {
    setIsMenuOpen(false);
    onCurrencyChange(currency.label);
  };

  const handleClickOutside = (event) => {
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
      <Tooltip text="currency_desc" isShow={!isMenuOpen} children={<button
        className="text-gray-600 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={toggleMenu}
      ><MdOutlineCurrencyExchange className="mr-1" />
        <div className="mr-2 contents">{t(currentCurrency)}
          <IoCaretDown className={`${isMenuOpen ? 'rotate-180' : ''} duration-300 pointer-events-none`}></IoCaretDown>
        </div>
      </button>}>
      </Tooltip>
      {isMenuOpen && <div className={`${isMenuOpen ? 'show' : 'hide'} menu_top absolute right-0 mt-2 w-24 bg-white shadow-secondary rounded-md shadow-sm z-10`}>
        <ul className="py-2 ">
          {CurrencyList.map((item, index) => (
            <li key={index} className="hover:bg-slate-100 duration-150">
              <button
                className="block px-4 py-2 text-gray-600 duration-150 hover:text-gray-400 w-full"
                onClick={() => handleCurrencyChange(item)}
              >
                {t(item.label)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      }
    </div>
  );
};

export default CurrencyMenu;