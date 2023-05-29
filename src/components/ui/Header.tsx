import React, { useState,useEffect } from 'react';
import LanguageMenu from '../widget/LanguageMenu';
import CurrencyMenu from '../widget/CurrencyMenu';
import { IoCaretDown, IoInformationCircleOutline } from "react-icons/io5";
import Popup from '../widget/Popup';
import { useTranslation } from 'react-i18next';


interface Props{
  currencyList: {
    label: string;
    value: number;
  }[];
  currency: string;
  setCurrency: (curr: string) => void;
  skin: string;
}

const Header: React.FC<Props> = ({ currencyList, currency, setCurrency, skin }) => {
  const languageList = [
    { label: "EN", value: "en" },
    { label: "简", value: "sc" },
    { label: "繁", value: "tc" },
  ];

  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(languageList.filter(el => el.value === "en")[0].label);

  const [isOpenSelection, setIsOpenSelection] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleSelection = () => {
    setIsOpenSelection(!isOpenSelection);
  }

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const handleLanguageChange = (lang : string) => {
    setLanguage(lang);
    i18n.changeLanguage(languageList.filter(el => el.label === lang)[0].value);
  }

  const handleCurrencyChange = (curr : string) => {
    setCurrency(curr);
  }

  const [isScrolling, setIsScrolling] = useState(false);

  // const primaryHeader = document.getElementById("AppHeader");
  // const scrollWatcher = document.createElement("div");

  // scrollWatcher.setAttribute("data-scroll-watcher","");

  // primaryHeader?.before(scrollWatcher);

  // const navObserver = new IntersectionObserver((entries)=>{
  //   setIsScrolling(!entries[0].isIntersecting)
  // },{rootMargin: "90px 0px 0px 0px"});

  // navObserver.observe(scrollWatcher);

  useEffect(() => {
    let isTop = true;
    const handleScroll = () => {
      isTop = window.scrollY < (isTop ? 112 : 50);
      setIsScrolling(!isTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header id = "AppHeader" className={`top-0 w-full z-30 bg-white shadow-xl border-secondary border-b-2 transition-all ${isScrolling ? "h-14 ease-in sticky duration-150" : `${skin === 'tkl' ? 'md:h-20': "md:h-28" } md:static h-14 ease-out fixed duration-300`}`}>
      <div className="w-1/1 h-1/1 relative">
        <div className={`absolute md:block hidden top-1/2 left-1/2 transform -translate-x-1/2 ${skin === 'tkl' ? '': '' } `}>
          <a href="/" className={`w-auto ${isScrolling ? "h-9 my-3" : "h-20 my-4"}`}>
            <img
              className={`w-auto transition-all ${isScrolling ? `h-9 my-3 ease-in duration-150` :` ${skin === 'tkl' ? 'my-3 h-14': "my-4 h-20" } ease-out duration-300`}`}
              src={isScrolling ? '/images/' + skin + "_smallLogo.png" : '/images/' + skin + "_Logo.png"}
              alt="Logo"
            />
          </a>
        </div>
        <div className="md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2">
          <a href="/" className={`w-auto h-9 my-3`}>
            <img
              className={`w-auto transition-all h-9 my-3 ease-in duration-150"`}
              src={'/images/' + skin + "_smallLogo.png"}
              alt="Logo"
            />
          </a>
        </div>
      </div>
      <div className={`md:flex hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  justify-end items-center h-1/1 transition-all ${isScrolling ? "h-14 ease-in duration-150" : `${skin === 'tkl' ? 'md:h-20': "md:h-28" } h-14 ease-out duration-300 `}`}>
        <div className="flex justify-center items-center">
          <CurrencyMenu CurrencyList={currencyList} currentCurrency={currency} onCurrencyChange={handleCurrencyChange}/>
          <LanguageMenu languageList={languageList} currentLanguage={language} onLanguageChange={handleLanguageChange}/>
        </div>
      </div>
      <div className={`md:hidden flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  justify-end items-center h-1/1 transition-all ${isScrolling ? "h-14 ease-in duration-150" : `${skin === 'tkl' ? 'md:h-20': "md:h-28" } h-14 ease-out duration-300 `}`}>
        <button className='mr-2 flex justify-center items-center text-gray-600 font-semibold' onClick={togglePopup}>
          <span>{t(currency)}</span><span />/<span /> <span>{t(language)}</span>
          <IoCaretDown className={`${isPopupOpen ? 'rotate-180' : ''} duration-300 pointer-events-none`}></IoCaretDown>
        </button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={setIsPopupOpen} classList={"bg-background-popup"} popupSize="max-w-sm"
      innerProp = {
        <div className="flex justify-center items-center flex-col text-center">
          <div className='text-sm text-third font-bold pb-3'>{t('please_select_language')}</div>
          {languageList.map((item, index) => (
            <button
              key={index}
              className={`block my-2 py-2 px-4 font-semibold ${item.label === language ? 'bg-primary' : 'bg-button-inactive'} text-white md:w-1/2 w-3/4`}
              onClick={() => handleLanguageChange(item.label)}
            >
              {item.label}
            </button>
          ))}

          <div className='text-sm text-third font-bold pb-2 pt-4'>{t('please_select_currency')}</div>
          <div className="relative block md:w-1/2 w-3/4">
            <select value={currency} className="block cursor-pointer appearance-none w-full py-3 bg-white border text-center border-gray-300 hover:border-gray-500 px-4 rounded shadow-inner leading-tight focus:outline-none focus:shadow-outline" onClick={()=>toggleSelection()} onChange={(event) => handleCurrencyChange(event.target.value)}>
              {currencyList.map((item, index) => (
                <option className='text-center p-2 text-gray-800' value={item.label} key={index}>{t(item.label)}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <IoCaretDown className={`${isOpenSelection ? 'rotate-180' : ''} duration-300 pointer-events-none`}></IoCaretDown>
            </div>
          </div>
          
          <div className='inline-block text-xs text-zinc-400 font-bold pb-2 pt-4 md:w-1/2 w-3/4'>
            <span className='whitespace-normal break-words'>
              <IoInformationCircleOutline className='inline-block mb-1 align-middle' />
              {t('currency_desc')}
            </span>
          </div>
        </div>}/>
    </header>
  );
};

export default Header;