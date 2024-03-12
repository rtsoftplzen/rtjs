import React, { useEffect } from 'react'
import ErrorDisplay from './error-display';
import GalleryImage from './gallery-image';
import { CONTENT_TYPES_TO_COMPONENTS } from '../content-types';
import { LOAD_STATES } from '../load-states';

const CUSTOM_MOUNT_POINT_ID = "rt-gallery-item";

const GalleryItem = ({ galleryItem, selectedItem, itemLoadState, src, swiping, placeholderSrc, onLoad, onError, onMouseDown, onTouchStart, onMouseUp, onMouseMove, onTouchEnd, onTouchMove, errorText, withoutBorder }) => {
    
	const swipeHandlerProps = {
		onMouseDown,
		onTouchStart,
		onMouseUp,
		onMouseMove,
		onTouchEnd,
		onTouchMove,
	};
    
    const noItemToShow = !galleryItem;
    

    const contentType = galleryItem.contentType;
    const galleryComponentProvider = CONTENT_TYPES_TO_COMPONENTS[contentType];

    const isUsingDefaultProvider = galleryComponentProvider !== undefined;

    // force onLoad / loading success with custom provider
    useEffect(() => {
        if(!isUsingDefaultProvider)
        {
            onLoad();
        }
    }, [onLoad, isUsingDefaultProvider]);


    if(noItemToShow)
    {
        return null;
    }

    const hasErrorToShow = itemLoadState === LOAD_STATES.ERROR;
    if(hasErrorToShow)
    {
        return (
            <ErrorDisplay
                itemContentType={galleryItem.contentType}
                errorText={errorText}
                placeholderSrc={placeholderSrc}
                swiping={swiping}
                swipeHandlerProps={swipeHandlerProps}
                src={src}
            />
        )
    }

    const isItemLoadingFinished = itemLoadState === LOAD_STATES.LOADED;

    const galleryComponentJSX = isUsingDefaultProvider ? galleryComponentProvider({
        src,
        onLoad,
        onError,
        swipeHandlerProps,
        galleryItem
    }) : <div onLoad={onLoad} onError={onError} id={CUSTOM_MOUNT_POINT_ID} />;

    const baseClass = 'rt-lightbox__gallery-item-wrapper';
	const extClass = `
    ${isItemLoadingFinished ? ` ${baseClass}--visible` : ''}
    ${swiping === 'left' ? ` ${baseClass}--swiping-left` : ''}
    ${swiping === 'right' ? ` ${baseClass}--swiping-right` : ''}
    ${withoutBorder ? ` ${baseClass}--without-border` : ''}
    ${` ${baseClass}--${galleryItem.contentType}`}
`

    //
    // either show or start loading the image silently
	return <div className={`${baseClass}${extClass}`}>{galleryComponentJSX}</div>;
}

export default GalleryItem