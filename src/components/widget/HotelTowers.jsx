import React,{useState} from "react";
import Gallery from "./Galley";
import Popup from "./popup";
import {IoImagesOutline} from "react-icons/io5";

const HotelTowers = ({ image, title, desc, ImageList }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    return (
        <div className="flex md:flex-row flex-col md:justify-start justify-center border-t border-third py-4 my-2 md:gap-8 gap-2">
            <div className="lg:w-auto w-full sm:h-56 flex justify-center basis-96 shrink-0 grow-0 relative cursor-pointer group group-hover:bg-gray-500">
                <img src={image} alt={title} className="w-full sm:object-contain object-cover h-full"
                    onClick={() => {
                        togglePopup();
                    }
                    }
                />
                <div className="text-white absolute right-0 bottom-1 h-10 w-22 bg-gray-600 flex justify-around items-center gap-2 px-2 group-hover:bg-gray-500"><IoImagesOutline className="text-2xl"/><p>Galley</p></div>
            </div>
            <div className="lg:w-auto w-full">
                <div className="text-left text-xl font-medium pt-2 pb-4 text-primary title">{title}</div>
                <p className="text-left text-xs font-normal text-third">{desc}</p>
            </div>
            <Popup isOpen={isPopupOpen} onClose={togglePopup} children={<Gallery ImageList={ImageList} title={title} desc={desc}></Gallery>} classList={"bg-white"}>
            </Popup>
        </div>
    )
}

export default HotelTowers;