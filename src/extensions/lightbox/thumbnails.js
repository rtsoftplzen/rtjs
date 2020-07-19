import React, { useEffect } from 'react'

const Thumbnails = ({showThumbnails, galleryItems, isItemLoaded, selectedItem, onClick, placeholderSrc}) => {

    return showThumbnails && galleryItems && galleryItems.length ? <div className={`rt-lightbox__thumbnails${isItemLoaded ? ' rt-lightbox__thumbnails--visible' : ''}`}>
        {galleryItems.map((item, index) => {
            return <img 
                src={item.smallSrc || placeholderSrc} 
                alt={item.title || '...'} 
                className={`rt-lightbox__thumbnail${index === selectedItem ? ' rt-lightbox__thumbnail--active' : ''}`}
                onClick={(event) => {
                    event.preventDefault()
                    onClick(index)
                }}
                onError={(event) => {
                    event.target.src = placeholderSrc
                }}
            />
        })}
    </div> : null

}

export default Thumbnails