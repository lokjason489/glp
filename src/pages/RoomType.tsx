import React, {useState} from "react";
import Layout from "../components/ui/layout";
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {MdFilterList} from 'react-icons/md';

interface Props {
}

const RoomType: React.FC<Props> = () => {
    const location = useLocation();

    const { t } = useTranslation();
    
    const [view , setView] = useState("room") // ["room", "rate"

    const handleView = (view: string) => {
        setView(view)
    }

    const { skin, startDay, endDay, Hotel, room, adult, child } = parseQueryString(location.search);

    console.log(skin, startDay, endDay, Hotel, room, adult, child);
    return (
        <Layout skin={skin}>
            {() => (
                <div className="pt-6">
                    <h1 className="text-3xl text-primary">Select room</h1>
                    <div className="flex justify-center items-center gap-10 py-4">
                        <div className="text-black font-extrabold text-xs">Your Trip Details</div>
                        <div className="flex-1 w-max h-11 flex justify-start items-center border-r border-primary">
                            <ol>
                                <p className="text-xs text-gray-400 font-medium">Hotel Selection:</p>
                                <p className="text-xs text-black font-bold">{t(Hotel || "")}</p>
                            </ol>
                        </div>
                        <div className="flex-1 w-max h-11 flex justify-start items-center border-r border-primary">
                            <ol>
                                <p className="text-xs text-gray-400 font-medium">Duration:</p>
                                <p className="text-xs text-black font-bold">{startDay} to {endDay}</p>
                            </ol>
                        </div>
                        <div className="flex-1 w-max h-11 flex justify-start items-center">
                            <ol>
                                <p className="text-xs text-gray-400 font-medium">Room details:</p>
                                <p className="text-xs text-black font-bold">{room} Rooms,{adult} Adults, {child} Children Per Room</p>
                            </ol>
                        </div>
                        <button className="text-white bg-primary text-sm font-bold w-24 h-9 rounded"> Edit </button>
                    </div>
                    <div className="bg-[#e8e4da] flex justify-start items-center py-3">
                      <div className="text-black font-extrabold text-xs flex-1 inline-flex justify-start items-center">
                        <p className="pr-3"> Search Result</p>   
                        <p className="text-xs text-gray-500 font-medium">Hotel Selection:</p>
                        </div>
                        <div className="pr-4  text-primary px-6">
                            <button className="flex group hover:text-white hover:bg-primary duration-150 justify-center items-center py-2 px-4 rounded bg-white text-black font-extrabold text-xs">
                                <MdFilterList className="text-primary mr-2 group-hover:text-white"></MdFilterList>
                                Filter
                            </button>
                        </div>
                        <p className="text-primary font-extrabold text-base">|</p>
                        <div className="flex justify-center items-center gap-10 px-6">
                            <div className={`${view === "room"?'border-b border-primary font-bold text-black':'font-medium text-gray-400'}  text-xs cursor-pointer`} onClick={()=>{handleView('room')}}>view by room</div>
                            <div className={`${view !== "room"?'border-b border-primary font-bold text-black':'font-medium text-gray-400'}  text-xs cursor-pointer`} onClick={()=>{handleView('rate')}}>view by rate</div>
                        </div>
                    </div>
                </div>
            )
            }
        </Layout>
    )
}

function parseQueryString(queryString: string) {
    const params = new URLSearchParams(queryString);
    const skin = params.get('skin');
    const startDay = params.get('startDay');
    const endDay = params.get('endDay');
    const Hotel = params.get('hotel')
    const room = params.get('roomNumber');
    const adult = params.get('adult');
    const child = params.get('child');
    return { skin, startDay, endDay, Hotel, room, adult, child };
}

export default RoomType;