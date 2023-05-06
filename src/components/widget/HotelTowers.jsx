import React from "react";

const HotelTowers = ({image,title,desc}) => {
    return (
        <div className="flex md:flex-row flex-col md:justify-start justify-center border-t border-third py-4 my-2 md:gap-8 gap-2">
            <div className="lg:w-auto w-full sm:h-56 flex justify-center basis-96 shrink-0 grow-0">
                <img src={image} alt={title} className="w-full sm:object-contain object-cover" />
            </div>
            <div className="lg:w-auto w-full">
                <div className="text-left text-xl font-medium pt-2 pb-4 text-primary">{title}</div>
                <p className="text-left text-xs font-normal text-third">{desc}</p>
            </div>
           
        </div>
    )
}

export default HotelTowers;