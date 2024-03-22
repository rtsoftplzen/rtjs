import React from 'react'

const CLOSER_BASE_CLASS = 'rt-lightbox__closer';
const CLOSER_VISIBLE_CLASS = `${CLOSER_BASE_CLASS}--visible`;

const Closer = ({showCloser, galleryItem, showCloserXSymbol, isItemLoaded, label}) => {

    const hasLabel = !!label;
    const hasGalleryItem = !!galleryItem;


    const showCloserDefault = hasGalleryItem && (showCloserXSymbol || hasLabel);

    // show the closer if the gallery item is present and the closer is not explicitly hidden
    // or if has text content inside of it
    const showCloserFinal = showCloser ?? showCloserDefault;

    if(!showCloserFinal){
        return null;
    }

    return (
      <div
        className={`${CLOSER_BASE_CLASS}${
          isItemLoaded ? ` ${CLOSER_VISIBLE_CLASS}` : ""
        }`}
      >
        {showCloserXSymbol && <>&times;</>} {label}
      </div>
    );

}

export default Closer