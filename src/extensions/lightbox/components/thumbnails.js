import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { CONTENT_TYPES, CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS, getContentTypeDefaultPlaceholder, getImageThumbnailSrc } from '../content-types'

const WRAPPER_BASE_CLASS = 'rt-lightbox__thumbnail-item-wrapper';

const Thumbnails = ({showThumbnails, galleryItems, isItemLoaded, selectedItem, onClick, placeholderSrc, withoutBorder}) => {

    const settledThumbs = useRef({})
    const wrapper = useRef(null)
    const scrollPosition = useRef({item: null, scroll: null})
    const [settledAll, setSettledAll] = useState(false)
    const [scrollHint, setScrollHint] = useState(null)

    useEffect(() => {
        if(!showThumbnails || !wrapper.current) return
        const handleScroll = (event) => {
            scrollPosition.current = event.target.scrollLeft
        }
        wrapper.current.addEventListener('scroll', handleScroll)
        return () => {
            wrapper.current.removeEventListener('scroll', handleScroll)
        }
    })

    useLayoutEffect(() => {
        if(!showThumbnails || !wrapper.current) return
        const wrapperPos = wrapper.current.getBoundingClientRect()
        const itemPos = wrapper.current.children[selectedItem].getBoundingClientRect()

        if (scrollPosition.current){
            wrapper.current.scrollLeft = scrollPosition.current
        }

        if(settledAll){
            const wrapperPos = wrapper.current.getBoundingClientRect()
            const itemPos = wrapper.current.children[selectedItem].getBoundingClientRect()
            const itemRightDiff = wrapperPos.right - itemPos.right
            const itemLeftDiff = wrapperPos.left - itemPos.left
            if(itemRightDiff < -1){
                wrapper.current.scrollLeft += Math.abs(itemRightDiff)
                scrollPosition.current = wrapper.current.scrollLeft
            } else if (itemLeftDiff > 1){
                wrapper.current.scrollLeft -= Math.abs(itemLeftDiff)
                scrollPosition.current = wrapper.current.scrollLeft
            }
        }

    })

    if(!showThumbnails) {
        return null;
    }


    return <div ref={wrapper} className={`rt-lightbox__thumbnails rt-lightbox__thumbnails--visible`}>
        {galleryItems.map((item, index) => {
            

            const thumbnailSrc = getImageThumbnailSrc(item, placeholderSrc);

            const handleClick = (event) => {
                event.preventDefault()
                onClick(index)
            }

            const onLoad = (event) => {
                settledThumbs.current['item-'+index] = true
                event.target.parentNode.classList.add('rt-lightbox__thumbnail--settled')
                if(Object.keys(settledThumbs.current).length === galleryItems.length){
                    setSettledAll(true)
                }
            }

            const onError = (event) => {
                settledThumbs.current['item-'+index] = true
                event.target.src = getContentTypeDefaultPlaceholder(item.contentType);
                event.target.parentNode.classList.add('rt-lightbox__thumbnail--settled')
                if(Object.keys(settledThumbs.current).length === galleryItems.length){
                    setSettledAll(true)
                }
            }

            const isSettled = !!settledThumbs.current['item-'+index];
            const isActive = index === selectedItem;
            const isWithoutBorder = withoutBorder;

            const wrapperClasses = `
                ${WRAPPER_BASE_CLASS}
                ${isSettled ? `${WRAPPER_BASE_CLASS}--settled` : ''}
                ${isActive ? `${WRAPPER_BASE_CLASS}--active` : ''}
                ${isWithoutBorder ? `${WRAPPER_BASE_CLASS}--without-border` : ''}
                ${`${WRAPPER_BASE_CLASS}--${item.contentType}`}
            `;

            return <div className={wrapperClasses}><img 
                src={thumbnailSrc} 
                alt={item.title || '...'} 
                className="rt-lightbox__thumbnail"
                onClick={handleClick}
                onLoad={onLoad}
                onError={onError}
            /></div>
        })}
    </div>

}

export default Thumbnails