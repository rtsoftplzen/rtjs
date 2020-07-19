import React, { useRef, useEffect } from 'react'

const Thumbnails = ({showThumbnails, galleryItems, isItemLoaded, selectedItem, onClick, placeholderSrc}) => {

    const settledThumbs = useRef({})
    const wrapper = useRef(null)

    useEffect(() => {
        if(!showThumbnails) return
        const wrapperPos = wrapper.current.getBoundingClientRect()
        const itemPos = wrapper.current.children[selectedItem].getBoundingClientRect()
        const overflow = wrapperPos.right - itemPos.right
        wrapper.current.scrollLeft -= overflow
    }, [selectedItem])

    return showThumbnails ? <div ref={wrapper} className={`rt-lightbox__thumbnails${isItemLoaded ? ' rt-lightbox__thumbnails--visible' : ''}`}>
        {galleryItems.map((item, index) => {
            return <img 
                src={item.smallSrc || placeholderSrc} 
                alt={item.title || '...'} 
                className={`rt-lightbox__thumbnail${settledThumbs.current['item-'+index] ? ' rt-lightbox__thumbnail--settled' : ''}${index === selectedItem ? ' rt-lightbox__thumbnail--active' : ''}`}
                onClick={(event) => {
                    event.preventDefault()
                    onClick(index)
                }}
                onLoad={(event) => {
                    settledThumbs.current['item-'+index] = true
                    event.target.classList.add('rt-lightbox__thumbnail--settled')
                }}
                onError={(event) => {
                    settledThumbs.current['item-'+index] = true
                    event.target.src = placeholderSrc
                    event.target.classList.add('rt-lightbox__thumbnail--settled')
                }}
            />
        })}
    </div> : null

}

export default Thumbnails