import { useTranslation } from "react-i18next";
import React from "react";
import { IoRemove, IoAdd } from "react-icons/io5";

interface Props {
    isOpen: boolean;
    room: number;
    adult: number;
    child: number;
    roomOnChange: (room: number) => void;
    adultOnChange: (adult: number) => void;
    childOnChange: (child: number) => void;
}

const RoomsGuest : React.FC<Props> = ({ isOpen, room, adult, child, roomOnChange, adultOnChange, childOnChange }) => {
    const { t } = useTranslation();

    return (
        <div>
            {isOpen &&
                <div className={`p-4 w-full absolute bg-white border shadow rounded z-10 ${isOpen ? 'show' : 'hide'}`} >
                    <div className="flex flex-col justify-between items-center w-full">
                        <div className="w-full group">
                            <label className="text-sm text-third">{t('room')}</label>
                            <div className="w-full flex justify-center items-center border group group-hover:border-primary-hover">
                            <div className="h-full w-10 text-center">
                                    <IoRemove
                                        className={`w-full  h-full  px-2  group-hover:border-primary-hover  text-third hover:text-primary ${child < 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => {
                                        roomOnChange((room - 1) < 1 ? 1 : room - 1)
                                    }} />
                                    </div>
                                <input type="text" readOnly
                                    className="flex-1 py-2 border-r border-l text-center h-full outline-y-none focus:outline-none text-third rounded-none user-select-none"
                                    value={room}></input>
                                 <div className="h-full w-10 text-center">
                                    <IoAdd
                                        className={`w-full  h-full px-2 group-hover:border-primary-hover text-third hover:text-primary ${child > 1 || adult > 2 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => {
                                        roomOnChange(room + 1 > 9 ? 9 : room + 1)
                                    }} />
                                    </div>
                            </div>
                        </div>
                        <div className="w-full group">
                            <label className="text-sm text-third">{t('adults_per_room')}</label>
                            <div className="w-full flex justify-center items-center border group group-hover:border-primary-hover">
                            <div className="h-full w-10 text-center">
                                    <IoRemove
                                        className={`w-full  h-full  px-2  group-hover:border-primary-hover  text-third hover:text-primary ${child < 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => {
                                        adultOnChange(adult - 1 < 1 ? 1 : adult - 1)
                                    }} />
                                    </div>
                                <input type="text" readOnly
                                    className="flex-1 py-2 border-r border-l text-center h-full outline-y-none focus:outline-none ring-gray-100  text-third rounded-none user-select-none"
                                    value={adult}></input>
                                <div className="h-full w-10 text-center">
                                    <IoAdd
                                        className={`w-full  h-full px-2 group-hover:border-primary-hover text-third hover:text-primary ${child > 1 || adult > 2 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                    onClick={() => {
                                        if (adult + 1 === 3) { childOnChange(0); }
                                        adultOnChange(adult + 1 > 3 ? 3 : adult + 1);
                                    }} />
                                   </div>
                            </div>
                        </div>
                        <div className="w-full group">
                            <label className="text-sm text-third">{t('children_per_room')}</label>
                            <div className="w-full flex justify-center items-center border group-hover:border-primary-hover h-10">
                                <div className="h-full w-10 text-center">
                                    <IoRemove
                                        className={`w-full  h-full  px-2  group-hover:border-primary-hover  text-third hover:text-primary ${child < 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                        onClick={() => {
                                            childOnChange(child - 1 < 0 ? 0 : child - 1)
                                        }} />
                                </div>
                                <input type="text" readOnly
                                    className="flex-1 border-r border-l text-center h-full outline-y-none focus:outline-none text-third rounded-none user-select-none"
                                    value={child} ></input>
                                <div className="h-full w-10 text-center">
                                    <IoAdd
                                        className={`w-full  h-full px-2 group-hover:border-primary-hover text-third hover:text-primary ${child > 1 || adult > 2 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                                        onClick={() => {
                                            if (adult === 3) { return; }
                                            childOnChange(child + 1 > 2 ? 2 : child + 1)
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default RoomsGuest;