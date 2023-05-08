import React, { useEffect, useState, useRef } from 'react';
import Layout from '../components/ui/layout'
import { useTranslation } from 'react-i18next';
import ProgressNav from '../components/widget/ProgressNav';
import { MdKeyboardArrowDown, MdManageHistory } from "react-icons/md";
import { IoCalendarOutline, IoPersonAddSharp, IoMegaphoneOutline, IoCaretForwardOutline, IoBusinessOutline } from "react-icons/io5"
import HotelTowers from '../components/widget/HotelTowers';
import RoomsGuest from '../components/widget/RoomsGuest';
import PopupCalendar from '../components/widget/PopupCalendar';
import { Link, useParams } from 'react-router-dom';

interface Props {
}

const HomePage: React.FC<Props> = () => {
  const { t } = useTranslation();

  const { skin } = useParams();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: { target: any }) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpenRoomGuest(false);
    }
  };

  const CalendarList = { "code": 200, "msg": "Your reservation was successfully created.", "data": { "2023-05-06": { "price": "1,649" }, "2023-05-07": { "price": "1,124" }, "2023-05-08": { "price": "1,199" }, "2023-05-09": { "price": "1,199" }, "2023-05-10": { "price": "1,199" }, "2023-05-11": { "price": "1,199" }, "2023-05-12": { "price": "1,724" }, "2023-05-13": { "price": "2,324" }, "2023-05-14": { "price": "1,274" }, "2023-05-15": { "price": "1,274" }, "2023-05-16": { "price": "1,274" }, "2023-05-17": { "price": "1,274" }, "2023-05-18": { "price": "1,274" }, "2023-05-19": { "price": "2,099" }, "2023-05-20": { "price": "2,549" }, "2023-05-21": { "price": "1,574" }, "2023-05-22": { "price": "1,274" }, "2023-05-23": { "price": "1,274" }, "2023-05-24": { "price": "1,274" }, "2023-05-25": { "price": "1,274" }, "2023-05-26": { "price": "1,949" }, "2023-05-27": { "price": "2,399" }, "2023-05-28": { "price": "1,274" }, "2023-05-29": { "price": "1,274" }, "2023-05-30": { "price": "1,274" }, "2023-05-31": { "price": "1,274" }, "2023-06-01": { "price": "1,274" }, "2023-06-02": { "price": "1,949" }, "2023-06-03": { "price": "2,624" }, "2023-06-04": { "price": "1,274" }, "2023-06-05": { "price": "1,274" }, "2023-06-06": { "price": "1,274" }, "2023-06-07": { "price": "1,274" }, "2023-06-08": { "price": "1,274" }, "2023-06-09": { "price": "2,099" }, "2023-06-10": { "price": "2,624" }, "2023-06-11": { "price": "1,274" }, "2023-06-12": { "price": "1,274" }, "2023-06-13": { "price": "1,274" }, "2023-06-14": { "price": "1,274" }, "2023-06-15": { "price": "1,274" }, "2023-06-16": { "price": "2,099" }, "2023-06-17": { "price": "2,624" }, "2023-06-18": { "price": "1,274" }, "2023-06-19": { "price": "1,274" }, "2023-06-20": { "price": "1,274" }, "2023-06-21": { "price": "1,274" }, "2023-06-22": { "price": "1,874" }, "2023-06-23": { "price": "2,774" }, "2023-06-24": { "price": "3,074" }, "2023-06-25": { "price": "1,274" }, "2023-06-26": { "price": "1,274" }, "2023-06-27": { "price": "1,274" }, "2023-06-28": { "price": "1,274" }, "2023-06-29": { "price": "1,274" }, "2023-06-30": { "price": "2,099" } } };

  const hotelList = ['glp', 'tkl', 'pvm']

  const [isOpenHotel, setIsOpenHotel] = useState(false);

  const toggleHotel = () => {
    setIsOpenHotel(!isOpenHotel);
  }

  const [isOpenRoomGuest, setIsOpenRoomGuest] = useState(false);

  const toggleRoomGuest = () => {
    setIsOpenRoomGuest(!isOpenRoomGuest);
  }

  const [arrivalDate, setArrivalDate] = useState(new Date().toISOString().substring(0, 10));

  const [departureDate, setDepartureDate] = useState(new Date().toISOString().substring(0, 10));

  const [roomsAdults, setRoomsAdults] = useState(2);

  const [room, setRoom] = useState(1);

  const [roomChild, setRoomChild] = useState(0);

  const [promotionCode, setPromotionCode] = useState('');

  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  const toggleCalendar = () => {
    setIsOpenCalendar(!isOpenCalendar);
  }

  const handleNewArrivalDate = (new_arrivalDate: string) => {
    new Date(new_arrivalDate) > new Date(departureDate) && setDepartureDate(new_arrivalDate);
    setArrivalDate(new_arrivalDate);
  }

  const handleNewDepartureDate = (new_departureDate: string) => {
    new Date(arrivalDate) > new Date(new_departureDate) && setArrivalDate(new_departureDate);
    setDepartureDate(new_departureDate);
  }

  const HotelTowersListing = [
    {
      image: 'https://shijicms.glp.mo/resources/upload/pic/20211115132226386.jpg',
      title: 'Grand Lisboa Palace Macau',
      desc: "Grand Lisboa Palace Macau offers a stunning tribute to Macau's rich cultural heritage and vibrant artistic traditions. From its modern, Chinoiserie-inspired interiors to bespoke art pieces created by famous local artists, the hotel tower showcases the exotic grandeur of East-meets-West, presented in elegant and exquisite detail. The hotel tower's 1, 350 contemporary guestrooms offer opulent relaxation with a breath-taking view of Cotai or the resort's Jardim Secreto. The spacious rooms and suites range from 60 to 300 square metres, with luxurious in-room amenities and attentive service that elevate the Lisboa standard to a new level of excellence.",
      ImageList: [{
        src: 'https://shijicms.glp.mo/resources/upload/pic/20211115132226386.jpg',
        alt: 'Image 1',
        desc: 'Description for Image 1',
      }, {
        src: 'https://via.placeholder.com/960x540.png',
        alt: 'Image 2',
        desc: 'Description for Image 2',
      }]
    },
    {
      image: 'https://shijicms.glp.mo/resources/upload/pic/20211115123702321.jpg',
      title: 'THE KARL LAGERFELD',
      desc: "The world's only hotel tower entirely designed by the late fashion icon invites you to experience the transcendent world of Karl. The hotel tower invokes a world of unrivalled creativity, offering a unique mix of Chinese and Western aesthetics that redefines the mastery of luxury hospitality. Originality beyond the realm of fashion is infused into the very heart of THE KARL LAGERFELD. Every feature, pattern and material in each guestroom was personally conceived or selected by the designer, offering an exclusive view into his distinctive, bespoke vision. Throughout your stay, you will find constant amazement in the creative expression of a talent which knew no bounds.",
      ImageList: [{
        src: 'https://shijicms.glp.mo/resources/upload/pic/20211115123702321.jpg',
        alt: 'Image 1',
        desc: 'Description for Image 1',
      }]
    },
    {
      image: 'https://shijicms.glp.mo/resources/upload/pic/20230424122054504.jpg',
      title: 'Palazzo Versace Macau',
      desc: "The first of its kind in Asia, the Palazzo Versace Macau presents the true Versace lifestyle. Under the stylistic and creative direction of Donatella Versace, the hotel tower offers a meticulously crafted experience infused with Versace's signature style. Every luxurious detail of Palazzo Versace Macau's interiors and guestrooms reflects the designer's ethos. Bespoke linens and upholstery interspersed with oriental elements are complemented by a full range of furnishings from the Versace Home Collection and superior Italian craftsmanship.",
      ImageList: [{
        src: 'https://shijicms.glp.mo/resources/upload/pic/20230424122054504.jpg',
        alt: 'Image 1',
        desc: 'Description for Image 1',
      }, {
        src: 'https://via.placeholder.com/960x540.png',
        alt: 'Image 2',
        desc: 'Description for Image 2',
      }, {
        src: 'https://via.placeholder.com/960x540.png',
        alt: 'Image 3',
        desc: 'Description for Image 3',
      }]
    },
  ]

  const progressList = [
    { label: "search", value: 0 },
    { label: "select_room", value: 1 },
    { label: "payment", value: 2 },
    { label: "confirmation", value: 3 }
  ]


  useEffect(() => {
    document.title = `${t('glp_title')}`;
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [t]);


  return (
    <Layout skin={skin}>
      {(currency) => (
        <div>
          <div id="ProgressNavContainer" className='md:block hidden'>
            <ProgressNav progressList={progressList} currentProgress={0} />
          </div>
          <form className='bg-white shadow focus-within:shadow-lg border-r-2 p-4 m-2 flex duration-100 flex-wrap mt-10 md:pt-2'>
            <div className='lg:w-1/3 w-full'>
              <div className='p-2'>
                <label htmlFor="hotel_select" className='required text-third'>
                  {t('select_hotel')}
                </label>
                <div className="relative inline-block w-full my-2">
                  <select required id='hotel_select'
                    className="block pl-12 cursor-pointer appearance-none w-full py-3 text-sm lg:text-base text-third bg-white border text-left border-gray-300 hover:border-gray-500 px-4 rounded shadow focus:outline-none focus:shadow-outline"
                    onClick={() => toggleHotel()}>
                    {hotelList.map((item, index) => (
                      <option key={index}>{t(item)}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <MdKeyboardArrowDown className={`${isOpenHotel ? 'rotate-180' : ''} text-third duration-300 pointer-events-none h-5 w-5`}></MdKeyboardArrowDown>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-gray-700">
                    <IoBusinessOutline className='h-5 w-5 text-third'></IoBusinessOutline>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full'>
              <div className='p-2'>
                <label htmlFor="arrival_date" className='required text-third'>
                  {t('arrival_date')}
                </label>
                <div className="relative inline-block w-full my-2">
                  <input type="text" readOnly capture id="arrival_date"
                    value={arrivalDate}
                    className='block text-sm lg:text-base cursor-pointer appearance-none w-full text-third py-3 bg-white border text-center border-gray-300 hover:border-gray-500 px-4 rounded shadow focus:outline-none focus:shadow-outline'
                    onClick={() => toggleCalendar()}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-10 flex items-center px-2 text-gray-700">
                    <IoCalendarOutline className='text-xl text-third'></IoCalendarOutline>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 md:w-1/2 w-full'>
              <div className='p-2'>
                <label htmlFor="departure_date" className='required text-third'>
                  {t('departure_date')}
                </label>
                <div className="relative inline-block w-full my-2">
                  <input type="text" readOnly capture id="departure_date"
                    value={departureDate}
                    className='block text-sm lg:text-base cursor-pointer appearance-none w-full py-3 text-third bg-white border text-center border-gray-300 hover:border-gray-500 px-4 rounded shadow focus:outline-none focus:shadow-outline'
                    onClick={() => toggleCalendar()} />
                  <div className="pointer-events-none absolute inset-y-0 left-10 flex items-center px-2 text-gray-700">
                    <IoCalendarOutline className='text-xl text-third'></IoCalendarOutline>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full' ref={menuRef}>
              <div className='p-2'>
                <label htmlFor="rooms_guests" className='text-third' >
                  {t('rooms_guests')}
                </label>
                <div className="relative inline-block w-full my-2" >
                  <input type="text" value={room + " " + t('room') + " / " + roomsAdults + " " + t('adult') + ", " + roomChild + " " + t('child')} readOnly required id="rooms_guests"
                    className='block pl-12 text-sm lg:text-base cursor-pointer appearance-none w-full py-3 text-third bg-white border border-gray-300 hover:border-gray-500 px-4 rounded shadow focus:outline-none focus:shadow-outline'
                    onClick={
                      () => toggleRoomGuest()
                    } />
                  <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-gray-700">
                    <IoPersonAddSharp className='text-xl text-third'></IoPersonAddSharp>
                  </div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <MdKeyboardArrowDown className={`${isOpenRoomGuest ? 'rotate-180' : ''} text-third duration-300 pointer-events-none h-5 w-5`}></MdKeyboardArrowDown>
                  </div>
                  <RoomsGuest isOpen={isOpenRoomGuest} room={room} adult={roomsAdults} child={roomChild} roomOnChange={setRoom} adultOnChange={setRoomsAdults} childOnChange={setRoomChild}></RoomsGuest>
                </div>
              </div>
            </div>
            <div className='lg:w-1/3 w-full'>
              <div className='p-2'>
                <label htmlFor="promotion_code" className='text-third'>
                  {t('promotion_code')}
                </label>
                <div className="relative inline-block w-full my-2">
                  <input type="text" required id="promotion_code"
                    value={promotionCode}
                    className='block cursor-pointer w-full py-3 
                             text-sm lg:text-base
                             text-third
                             bg-white border text-left border-gray-300 
                             hover:border-gray-500 px-4 rounded 
                             pl-12
                             shadow focus:outline-none focus:shadow-outline'
                    onChange={(event) => {
                      setPromotionCode(event.target.value);
                    }} />
                  <div className="pointer-events-none absolute inset-y-0 left-2 flex items-center px-2 text-gray-700">
                    <IoMegaphoneOutline className='text-xl text-third'></IoMegaphoneOutline>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 w-full">
              <div className="p-2 group">
                <Link to={`/roomType/?startDay=${arrivalDate}&endDay=${departureDate}${skin ? '&skin=' + skin : ''}`}>
                  <button className="bg-primary w-full block tracking-widest rounded text-white b font-medium mt-4 lg:mt-8 py-2 text-2xl uppercase duration-300 relative overflow-hidden group-hover:bg-primary-hover group-hover:-indent-12">
                    <span >{t('search')}</span>
                    <span className="absolute opacity-0 left-1/2 translate-x-1/4 top-0 bottom-0 flex items-center pl-3 pr-2 transition-transform duration-500 transform group-hover:translate-x-full group-hover:opacity-100">
                      <IoCaretForwardOutline className="text-2xl " />
                    </span>
                  </button>
                </Link>
              </div>
              <Link className='flex justify-center lg:justify-end m-2 underline gap-1 text-sm text-third' to={`/booking-search/${skin ? '?skin=' + skin : ''}`}>
                <MdManageHistory />
                MANAGE BOOKING
              </Link>
            </div>
          </form>
          <div className='block pt-4'>
            <div className='text-secondary text-xl my-2 py-3 font-bold title'>
              {t('available_hotels')}
            </div>
            {
              HotelTowersListing.map((item, index) => (
                <HotelTowers key={index} image={item.image} title={item.title} desc={item.desc} ImageList={item.ImageList} />
              ))
            }
          </div>
          <PopupCalendar
            currency={currency}
            isOpen={isOpenCalendar}
            onClose={setIsOpenCalendar}
            arrivalDate={arrivalDate}
            departureDate={departureDate}
            setArrivalDate={handleNewArrivalDate}
            setDepartureDate={handleNewDepartureDate}
            className={""}
            CalendarList={CalendarList} />
        </div>
      )}
    </Layout>
  );
};

export default HomePage;