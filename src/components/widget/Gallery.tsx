import React from "react";
import ImageGallery, { ReactImageGalleryItem } from 'react-image-gallery';

interface Props {
  ImageList: ImageList[];
  title: string;
  desc: string;
}

interface ImageList {
  src: string;
  alt: string;
  desc: string;
}



const Gallery: React.FC<Props> = ({ ImageList, title, desc }) => {
  const images: ReactImageGalleryItem[] = ImageList.map((item: ImageList) => {
    return {
    // bulletClass: undefined,
    // bulletOnClick: undefined,
    description: item.desc,
    original: item.src,
    thumbnail: item.src,
    loading: "eager",
    originalAlt: item.alt,
    thumbnailAlt: item.alt,
    originalHeight: 540,
    originalWidth: 960,
    thumbnailHeight: 54,
    thumbnailWidth: 96,
    fullscreen: 'true',
    // thumbnailLabel: undefined,
    // thumbnailTitle: undefined,
    // thumbnailClass: undefined,
    // renderItem: undefined,
    // renderThumbInner: undefined,
    // imageSet: undefined,
    // renderNav: undefined,
    srcSet: item.src,
    thumbnailLoading: 'lazy',
    // originalClass: undefined,
    originalTitle:title,
    }
  })

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