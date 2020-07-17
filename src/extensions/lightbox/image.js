import React from 'react'

const Image = ({showImage, selectedItem, isItemLoaded, src, onLoad, onMouseDown, onTouchStart, onMouseUp, onMouseMove, onTouchEnd, onTouchMove}) => {
    return showImage ? 
        <img 
                className={`rt-lightbox__image${isItemLoaded ? ' rt-lightbox__image--visible' : ''}`} 
                key={`img-${selectedItem}`} 
                src={src} 
                onLoad={onLoad}
                onMouseDown={onMouseDown} 
                onTouchstart={onTouchStart} 
                onMouseUp={onMouseUp} 
                onMouseMove={onMouseMove}
                onTouchEnd={onTouchEnd} 
                onTouchMove={onTouchMove}
        /> : null
}

export default Image