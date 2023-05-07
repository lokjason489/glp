import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { IoCaretDown } from "react-icons/io5";
import Tooltip from './Tooltip';
import { MdOutlineCurrencyExchange } from 'react-icons/md';

interface Props {
  CurrencyList: CurrencyList[];
  currentCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

interface CurrencyList {
  label: string;
  value: number;
}

const CurrencyMenu: React.FC<Props> = ({ CurrencyList, currentCurrency, onCurrencyChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCurrencyChange = (currency: CurrencyList) => {
    setIsMenuOpen(false);
    onCurrencyChange(currency.label);
  };

  const handleClickOutside = (event: { target: any }) => {
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
      <Tooltip text="currency_desc" isShow={!isMenuOpen} innerProps={
        <button
          className="text-gray-600 font-semibold py-2 px-3 rounded inline-flex items-center"
          onClick={toggleMenu}
        >
          <MdOutlineCurrencyExchange className="mr-1" />
          <div className="mr-2 contents">{t(currentCurrency)}
            <IoCaretDown className={`${isMenuOpen ? 'rotate-180' : ''} duration-300 pointer-events-none`}></IoCaretDown>
          </div>
        </button>
      }>
      </Tooltip>
      {isMenuOpen && <div className={`${isMenuOpen ? 'show' : 'hide'} menu_top absolute right-0 mt-2 w-24 bg-white shadow-secondary rounded-md shadow-sm z-10`}>
        <ul className="py-2 ">
          {CurrencyList.map((item, index) => (
            <li key={index} className="hover:bg-slate-100 duration-150">
              <button
                disabled={item.label=== currentCurrency}
                className={`block px-3 py-2 ${item.label=== currentCurrency ? "bg-secondary text-white":"" } text-gray-700 hover:text-white w-full`}
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