import React from "react";
import ImageGallery from 'react-image-gallery';

function Gallery({ImageList,title,desc}) {

    const images = ImageList.map((item) => {
        return {
            original: item.src,
            thumbnail: item.src,
            loading: "lazy",
            originalAlt: item.alt,
            thumbnailAlt: item.alt,
            description : item.desc,
            originalHeight :'540px',
            originalWidth : '960px',
        }
        }
    )
    return (
        <div>
            <ImageGallery 
            items={images}
            showNav={false}
            thumbnailPosition="bottom"
            useBrowserFullscreen={true}
            showPlayButton={false}
            additionalClass="text-left"
            />
            <p className="text-third text-sm py-2">
                {desc}
            </p>
        </div>
    );
}


export default Gallery;