import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { DateRange} from 'react-date-range';
import * as locales from 'react-date-range/dist/locale';
import i18n from "../../plugin/i18n/i18n";

const PopupCalendar = ({ isOpen, onClose, CalendarList, className, arrivalDate, departureDate, setArrivalDate, setDepartureDate }) => {

    const nameMapper = {
        en: 'English (United States)',
        sc: 'Chinese Simplified',
        tc: 'Chinese Traditional',
    };


    const [state, setState] = useState([
        {
            startDate: new Date(arrivalDate),
            endDate: new Date(departureDate),
            key: 'selection'
        }
    ]);


    const customDayContent = (day) => {
        let extraText = null;
        const yyyy = day.getFullYear();
        const mm = String(day.getMonth() + 1).padStart(2, '0');
        const dd = String(day.getDate()).padStart(2, '0');
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        Object.entries(CalendarList['data']).filter(([key, value]) => {
            if (key === formattedDate) {
                extraText = value['price']
            };
        });
        if (extraText) {
            return (
                <div className="flex flex-col items-center">
                    <div className="text-sm">{dd}</div>
                    <div className="text-xs">{extraText}</div>
                </div>
            );
        }
    };

    return (
        <div>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 opacity-50 z-10"></div>
            )}
            {isOpen && (
                <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background-popup z-20 min-w-[70%] max-w-[70%] ${className}`}>
                    <div className='w-full text-right'> <button
                        className=" text-gray-500 hover:text-gray-800 text-right text-3xl font-black"
                        onClick={onClose}
                    >
                        <IoCloseCircleOutline className="text-white hover:text-gray-300" />
                    </button></div>

                    <div className={`shadow-lg rounded-lg mx-4 px-4 py-6  ${className}`}>

                        <DateRange
                            onChange={item => setState([item.selection])}
                            months={2}
                            showSelectionPreview={false}
                            ranges={state}
                            dayContentRenderer={customDayContent}
                            direction="horizontal"
                            preventSnapRefocus={true}
                            calendarFocus="backwards"
                            moveRangeOnFirstSelection={false}
                            // locale={nameMapper[i18n.language]}
                            ariaLabels={{
                                dateInput: {
                                    selection1: { startDate: "start date input of selction 1", endDate: "end date input of selction 1" },
                                },
                                monthPicker: "month picker",
                                yearPicker: "year picker",
                                prevButton: "previous month button",
                                nextButton: "next month button",
                            }} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopupCalendar;