import React from "react";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import { useTranslation } from 'react-i18next';

const ProgressNav = ({ progressList, currentProgress }) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-row justify-center items-center select-none">
            <div className="flex flex-row">
                {progressList.map((item, index) => (
                    <div key={index} className={`flex justify-center items-center text-white`}>
                        <div className={`w-10 h-10 font-bold rounded-full border-2 text-center flex justify-center items-center
                                ${item.value <= currentProgress ? 'bg-secondary' : 'bg-third'}`}>{item.value + 1}</div>
                        <div className={`pl-4 text-s font-bold ${item.value <= currentProgress ? 'text-secondary' : 'text-third'}`}>{t(item.label)}</div>
                        {item.value < 3 &&  <MdKeyboardDoubleArrowRight className={`px-2 text-4xl ${item.value < currentProgress ? 'text-secondary' : 'text-third'}`} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProgressNav;