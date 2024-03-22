import React, { useRef, useEffect, useLayoutEffect, useState } from 'react'
import { CONTENT_TYPES, CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS, getContentTypeDefaultPlaceholder, getImageThumbnailSrc } from '../content-types'
import { THUMBNAILS_CLASSES_BY_AXIS, THUMBNAIL_AXIS, THUMBNAIL_CLASSES_BY_POSITION, THUMBNAIL_POSITION_TO_AXIS, getPositionClasses } from './thumbnails/thumbnail-axis';
import { getBreakpointUsableValueFromScreen } from '../../../breakpoints';
import { useBreakpointValue } from '../../../hooks/useBreakpointValue';

const WRAPPER_BASE_CLASS = 'rt-lightbox__thumbnail-item-wrapper';

const Thumbnails = ({
    showThumbnails,
    galleryItems,
    isItemLoaded,
    selectedItem,
    onClick,
    placeholderSrc,
    withoutBorder,
    thumbnailsPlacement: thumbnailsPlacementProp
}) => {

    const thumbnailsPlacement = useBreakpointValue(thumbnailsPlacementProp);
    
    const settledThumbs = useRef({})
    const wrapper = useRef(null)
    
    const scrollPosition = useRef({scrollLeft: null, scrollTop: null});

    const [settledAll, setSettledAll] = useState(false);

    useEffect(() => {
        if(!showThumbnails || !wrapper.current) return;
        
        const handleScroll = (event) => {
            ;
            scrollPosition.current = {
                scrollLeft: event.target.scrollLeft,
                scrollTop: event.target.scrollTop
            };
            
        }

        wrapper.current.addEventListener('scroll', handleScroll)
        
        return () => {
            wrapper.current.removeEventListener('scroll', handleScroll)
        }
    }, [showThumbnails])

    useLayoutEffect(() => {
        if(!showThumbnails || !wrapper.current) return;

        if (scrollPosition.current.scrollLeft){
            wrapper.current.scrollLeft = scrollPosition.current.scrollLeft
        }

        if (scrollPosition.current.scrollTop){
            wrapper.current.scrollTop = scrollPosition.current.scrollTop
        }

        
        const wrapperPos = wrapper.current.getBoundingClientRect();
        const itemPos = wrapper.current.children[selectedItem].getBoundingClientRect();

        const getHorizontalSpace = () => {
            const itemRightDiff = wrapperPos.right - itemPos.right;
            const itemLeftDiff = itemPos.left - wrapperPos.left;

            return {
                distanceToStart: itemLeftDiff,
                distanceToEnd: itemRightDiff
            }
        }

        const getVerticalSpace = () => {
            const itemBottomDiff = wrapperPos.bottom - itemPos.bottom;
            const itemTopDiff = itemPos.top - wrapperPos.top;


            return {
                distanceToStart: itemTopDiff,
                distanceToEnd: itemBottomDiff
            }
        }

        const addFinalOffset = (finalOffset, axis) => {
            
            if(axis === THUMBNAIL_AXIS.ROW) {
                wrapper.current.scrollLeft += finalOffset;
                scrollPosition.current.scrollLeft = wrapper.current.scrollLeft;
                return;
            }

            wrapper.current.scrollTop += finalOffset;
            scrollPosition.current.scrollTop = wrapper.current.scrollTop;
        }
        
        const adjustDistanceDiff = (distanceToStart, distanceToEnd, axis) => {

            let distStartOffset = null;
            let distEndOffset = null;

            if(distanceToStart < 0){
                distStartOffset = Math.abs(distanceToStart) * -1;
            } else if (distanceToEnd < 0){
                distEndOffset = Math.abs(distanceToEnd);
            }

            if(!distStartOffset && !distEndOffset){
                return;
            }

            const finalOffset = distStartOffset || distEndOffset;
            addFinalOffset(finalOffset, axis);
        }

        const horizontalSpace = getHorizontalSpace();
        adjustDistanceDiff(horizontalSpace.distanceToStart, horizontalSpace.distanceToEnd, THUMBNAIL_AXIS.ROW);

        const verticalSpace = getVerticalSpace();
        adjustDistanceDiff(verticalSpace.distanceToStart, verticalSpace.distanceToEnd, THUMBNAIL_AXIS.COLUMN);
    })

    if(!showThumbnails) {
        return null;
    }

    const wrapperPositionClass = getPositionClasses('rt-lightbox__thumbnails', thumbnailsPlacement);
    const imgPositionClass = getPositionClasses('rt-lightbox__thumbnail', thumbnailsPlacement);
    const itemWrapperPositionClass = getPositionClasses('rt-lightbox__thumbnail-item-wrapper', thumbnailsPlacement);

    const allSettledClass = settledAll ? ' rt-lightbox__thumbnails--all-settled' : '';

    return <div ref={wrapper} className={`rt-lightbox__thumbnails rt-lightbox__thumbnails--visible ${wrapperPositionClass}${allSettledClass}`}>
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
                ${itemWrapperPositionClass}
            `;

            return (
                <div className={wrapperClasses}>
                    <img 
                        src={thumbnailSrc} 
                        alt={item.title || '...'} 
                        className={`rt-lightbox__thumbnail ${imgPositionClass}`}
                        onClick={handleClick}
                        onLoad={onLoad}
                        onError={onError}
                    />
                </div>
            );
        })}
    </div>

}

export default Thumbnails