import React, { useState ,useRef, useEffect,useCallback} from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import {Calendar,DayState} from "@demark-pro/react-booking-calendar";
import { useTranslation } from 'react-i18next';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

interface Props {
    isOpen: boolean
    onClose: React.Dispatch<React.SetStateAction<boolean>>
    CalendarList: CalendarList;
    className: string;
    arrivalDate: string;
    departureDate: string;
    setArrivalDate: (arrivalDate: string) => void;
    setDepartureDate: (departureDate: string) => void;
    currency: string;
}

interface CalendarList {
    code: number;
    msg: string;
    data: {
      [date: string]: {
        price: string;
      };
    };
  }

const PopupCalendar: React.FC<Props> = ({ isOpen, onClose, CalendarList, className, arrivalDate, departureDate, setArrivalDate, setDepartureDate, currency }) => {

    const { t, i18n } = useTranslation();

    const menuRef = useRef<HTMLDivElement>(null);

    const reserved = [
        {
            startDate: new Date(),
            endDate: new Date(2016, 4, 5),
        },
    ];
    const [selectedDates, setSelectedDate] = useState([new Date(arrivalDate), new Date(departureDate)]);

    const handleSelect = (date : Date[]) => {
        setSelectedDate(date);
        let tempDate1 = new Date(date[0]);

        let arrivalDay = tempDate1.getDate();
        let arrivalMonth = tempDate1.getMonth() + 1;
        let arrivalYear = tempDate1.getFullYear();
        let arrivalDate = arrivalYear + "-" + arrivalMonth + "-" + arrivalDay;
        setArrivalDate(arrivalDate);
        if (date[1]) {
            let tempDate2 = new Date(date[1]);
            let departureDay = tempDate2.getDate();
            let departureMonth = tempDate2.getMonth() + 1;
            let departureYear = tempDate2.getFullYear();
            let departureDate = departureYear + "-" + departureMonth + "-" + departureDay;
            setDepartureDate(departureDate);
        }
    }

    function customDayContent(day : Date, innerProps: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> | undefined) {
        let extraText = null;
        const yyyy = day.getFullYear();
        const mm = String(day.getMonth() + 1).padStart(2, '0');
        const dd = String(day.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;

        Object.entries(CalendarList['data']).filter(([key, value]) => {
            if (key === formattedDate) {
                extraText = value['price']
            };
            return null;
        });
        if (extraText) {
            return (
                    <div {...innerProps} className="text-xs">{`${extraText} ${t(currency)} ${t("per_night")}`}</div>
            );
        }
        return <div {...innerProps}>test</div>;
    };

    const handleClickOutside = useCallback((event: MouseEvent) => {
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
        <div>
            {isOpen && (
                <div ref={menuRef} className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-40"></div>
            )}
            {isOpen && (
                <div className={`fixed shadow-lg top-1/2 left-1/2 rounded-md transform -translate-x-1/2 -translate-y-1/2 bg-background-popup z-50 lg:w-10/12 md:max-w-5xl w-full ${className}`}>
                    <div className='w-full text-right pointer-events-none'> <button
                        className=" text-gray-500 hover:text-gray-800 text-right h-8 w-8 my-2 font-black pointer-events-auto"
                        onClick={()=>onClose}
                    >
                        <IoCloseCircleOutline className="text-third h-full w-full hover:text-gray-300" />
                    </button></div>

                    <div className={`rounded-lg md:mx-4 md:px-4 pt-2 pb-6  ${className}`}>
                        <Calendar
                            selected={selectedDates}
                            onChange={handleSelect}
                            onOverbook={( err) => alert(err)}
                            components={{
                                MonthContainer: ({ children}) => {
                                    return <div className="relative flex flex-row justify-between items-center bg-secondary h-12 text-white">{children}</div>
                                },
                                MonthContent: ({ month, year }) => {
                                    let locales = i18n.language === 'en' ? 'en-US' : 'zh-CN';
                                    let displayText = new Date(year, month, 1).toLocaleDateString(locales, { month: 'long', year: 'numeric' })
                                    return <div className="text-xl font-semibold  text-white">{displayText}</div>
                                },
                                MonthArrowBack: ({ innerProps }) => {
                                    return <IoChevronBack {...innerProps} className="text-3xl pl-2 text-white font-bold cursor-pointer" />
                                },
                                MonthArrowNext: ({ innerProps }) => {
                                    return <IoChevronForward {...innerProps} className="text-3xl pr-2 text-white font-bold cursor-pointer" />
                                },
                                DayCell: ({ children, innerProps }) => {
                                    return <div {...innerProps} className="h-24 relative flex justify-center items-center align-middle cursor-pointer flex-col border" style={{ width: 'calc(100%/7)' }} >{children}</div>
                                },
                                DayCellHeader: ({ state,children, innerProps }) => {
                                    if (state.isToday) {
                                        return <div {...innerProps} className="text-xs text-gray-500">{children}</div>
                                    }
                                    return <div {...innerProps} className="text-xs text-gray-500">{children}</div>
                                },
                                DayCellFooter: ({ date, innerProps }) => {
                                    return customDayContent(date, innerProps);
                                }
                            }}
                            disabled={( date: Date, state: DayState ) => !state.isSameMonth || date < new Date()}
                            reserved={reserved}
                            variant="booking"
                            isStart={true}
                            dateFnsOptions={{ weekStartsOn: 1 }}
                            range={true}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
export default PopupCalendar