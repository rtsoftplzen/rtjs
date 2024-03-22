import React, { useEffect } from 'react'
import ErrorDisplay from './error-display';
import { CONTENT_TYPES_TO_COMPONENTS } from '../content-types';
import { LOAD_STATES } from '../load-states';
import { ARROW_PROPS, GalleryItemControlPanel } from './gallery-control';
import { ARROWS_POSITIONS } from '../options';
import GalleryContent from './gallery-content';

const CUSTOM_MOUNT_POINT_ID = "rt-gallery-item";

const GalleryItem = ({
    galleryItem,
    selectedItem,
    itemLoadState,
    src,
    swiping,
    placeholderSrc,
    onLoad,
    onError,
    onMouseDown,
    onTouchStart,
    onMouseUp,
    onMouseMove,
    onTouchEnd,
    onTouchMove,
    errorText,
    withoutBorder,
    // arrows
    moveNext,
    movePrev,
    showArrows,
    arrowsPosition,
    usingCustomArrows,
    titleJSX,
    showTitleOnTop,
    closerJSX,
}) => {
    
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

    const galleryContentProps = {
        swiping,
        withoutBorder,
        // arrows
        moveNext,
        movePrev,
        showArrows,
        arrowsPosition,
        usingCustomArrows,
        titleJSX,
        showTitleOnTop,
        closerJSX,
        itemLoadState,
    }

    if (hasErrorToShow) {
      return (
        <GalleryContent {...galleryContentProps}
        visibilityFinishedState={LOAD_STATES.ERROR}
        contentJSX={
            <ErrorDisplay
            itemContentType={galleryItem.contentType}
            errorText={errorText}
            placeholderSrc={placeholderSrc}
            swiping={swiping}
            swipeHandlerProps={swipeHandlerProps}
            src={src}
            />
        } />
      );
    }

    const galleryComponentJSX = isUsingDefaultProvider ? galleryComponentProvider({
        src,
        onLoad,
        onError,
        swipeHandlerProps,
        galleryItem
    }) : <div onLoad={onLoad} onError={onError} id={CUSTOM_MOUNT_POINT_ID} />;


    const extraContentProps = {
        ...galleryContentProps,
        galleryItem
    };
    
    // either show or start loading the image silently
	return (
        <GalleryContent
            {...extraContentProps}
            visibilityFinishedState={LOAD_STATES.LOADED}
            contentJSX={galleryComponentJSX}
        />
    );
}

export default GalleryItem