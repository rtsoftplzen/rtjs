import React, { useState, useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { debounce } from 'throttle-debounce'
import { defaultOptions } from './options'
import { handlePageOverflow, prepareGalleryItemsData } from './helpers'
import Arrows from './components/arrows'
import Closer from './components/closer'
import Spinner from './components/spinner'
import Title from './components/title'
import Thumbnails from './components/thumbnails'
import './styles.scss'
import { usePrevious } from '../../hooks/usePrev'
import GalleryItem from './components/gallery-item'
import { getCustomItemProviderByContentType } from './custom-items'
import { LOAD_STATES, isLoadingFinished } from './load-states'

const swipeTreshold = 20

const KEYCODES = Object.freeze({
    ARROW_LEFT: 37,
    ARROW_RIGHT: 39,
    ESCAPE: 27
});

const RTJS_lightbox = (selector, options = {}) => {

    const finalOptions = {...defaultOptions, ...options}

    // lightbox app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(null)
        
        // selectedItem is the index of the currently displayed item
        const [selectedItem, setSelectedItem] = useState(null)

        const [itemLoadState, setItemLoadState] = useState(LOAD_STATES.PENDING);

        const [galleryItems, setGalleryItems] = useState(null)

        const galleryItem = galleryItems ? galleryItems[selectedItem] : undefined;
        const prevGalleryItem = usePrevious(galleryItem);

        const [forcedLoading, setForcedLoading] = useState(false)
        const [swiping, setSwiping] = useState(false)
        const swipeOriginX = useRef(null)
        const prevSelectedItem = usePrevious(selectedItem)

        const customItemsProvider = finalOptions.customItemsProvider;
        
        // lifecycle

        const openLightbox = () => {
            handlePageOverflow('on');
            setVisible(true);
        }

        const closeLightbox = () => {
            handlePageOverflow('off');
            setVisible(false);
        }

        useEffect(() => {
            openLightbox();
            const preparedItems = prepareGalleryItemsData(options, element);
            
            setGalleryItems(preparedItems.items)
            setSelectedItem(preparedItems.selectedItem)
            
        }, [])

        useEffect(() => {
            if(forcedLoading && isLoadingFinished(itemLoadState)){
                setForcedLoading(false);
            }
        }, [selectedItem, itemLoadState, forcedLoading])

        useEffect(() => {

            // onOpened / onClosed

            if (visible && finalOptions.onOpened) {
                finalOptions.onOpened(selectedItem)
            } else if (visible === false && finalOptions.onClosed){
                finalOptions.onClosed(selectedItem)
            }
        }, [visible])
        
        useEffect(() => {

            // onItemChanged
            if(selectedItem !== null && finalOptions.onItemChanged && prevSelectedItem !== null){
                finalOptions.onItemChanged(selectedItem)
            }
        }, [selectedItem])
        
        // custom component mount
        useEffect(() => {

            if(!galleryItem)
            {
                return;
            }

            const singleProvider = getCustomItemProviderByContentType(galleryItem.contentType, customItemsProvider);
            const lastProvider = getCustomItemProviderByContentType(prevGalleryItem?.contentType, customItemsProvider);

            if(!singleProvider && !lastProvider)
            {
                return;
            }

            // either opening or changing items
            const mounted = visible;
            if(mounted && singleProvider && singleProvider.onItemMount)
            {
                singleProvider.onItemMount(selectedItem, galleryItem);
            }

            // either closing or moving away from the item
            if(!visible || lastProvider && lastProvider.onItemUnmount)
            {
                lastProvider.onItemUnmount(selectedItem, galleryItem);
            }
            

        }, [visible, selectedItem, galleryItem])


        useEffect(() => {
            if(visible){
                window.addEventListener('keydown', handleKeyPress)
            } else {
                window.removeEventListener('keydown', handleKeyPress)
            }
            return () => {
                window.removeEventListener('keydown', handleKeyPress)
            }
        }, [galleryItems, selectedItem, visible])

        // helpers

        const handleKeyPress = useCallback(debounce(100, (event) => {
            const isMultiple = galleryItems && galleryItems.length > 1
            if(isMultiple && event.keyCode === KEYCODES.ARROW_LEFT){
                movePrev()
            } else if (isMultiple && event.keyCode === KEYCODES.ARROW_RIGHT){
                moveNext()
            } else if (event.keyCode === KEYCODES.ESCAPE) {
                closeLightbox();
            }
        }), [galleryItems, selectedItem, visible])

        const movePrev = () => {
            setItemLoadState(LOAD_STATES.PENDING);
            setForcedLoading(true);

            setSelectedItem(selectedItem ? selectedItem - 1 : galleryItems.length - 1)
            if(swiping){
                setSwiping(false)
            } 
        }

        const moveNext = () => {
            setItemLoadState(LOAD_STATES.PENDING);
            setForcedLoading(true);
            
            setSelectedItem(galleryItems.length === selectedItem + 1 ? 0 : selectedItem + 1)
            if(swiping){
                setSwiping(false)
            }
        }

        const setItemByIndex = (index) => {
            if(index === selectedItem)
            {
                return;
            }


            setItemLoadState(LOAD_STATES.PENDING);
            setForcedLoading(true);

            setSelectedItem(index)
        }

        // output

        const isLoadingDone = galleryItem && isLoadingFinished(itemLoadState);
        
        const hasMultipleGalleryItems = galleryItems ? galleryItems.length > 1 : undefined
        
        const showTitleOnTop = finalOptions.showTitle === 'top';

        if(finalOptions.debug){
            console.log({selectedItem, galleryItems})
        }

        if(!visible) 
        {
            return null;
        }

        const titleJSX = (
            <Title 
                key={`title-${selectedItem}`} 
                showTitle={galleryItem && finalOptions.showTitle} 
                isItemLoaded={isLoadingDone} 
                title={galleryItem && galleryItem.title} 
                selectedItem={selectedItem} 
                sum={galleryItems.length}
                description={galleryItem && galleryItem.description}
            />
        );

        const closerJSX = (
            <Closer 
                key={`closer-${selectedItem}`} 
                showCloser={galleryItem && finalOptions.closeLabel} 
                isItemLoaded={isLoadingDone} 
                label={finalOptions.closeLabel}
            />
        );

        const handleLightboxClick = (event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                closeLightbox();
            }
        }

        const handleImageLoadingFinished = (error) => {
            setItemLoadState(
                error ? LOAD_STATES.ERROR : LOAD_STATES.LOADED,
            );
        }

        const showSpinner = !isLoadingDone || forcedLoading;
        
        const galleryItemKey = `gallery-item-${selectedItem}`;

        return <div className={`rt-lightbox${swiping ? ' rt-lightbox--swiping' : ''}`} onClick={handleLightboxClick}>
            {showTitleOnTop
                ? titleJSX
                : closerJSX
            }
            <Spinner 
                showSpinner={showSpinner} 
            />
            <GalleryItem
                errorText={finalOptions.imageErrorLabel}
                placeholderSrc={finalOptions.placeholderSrc}
                withoutBorder={finalOptions.withoutBorder}
                key={galleryItemKey}
                swiping={swiping}
                galleryItem={galleryItem}
                itemLoadState={itemLoadState}
                selectedItem={selectedItem}
                src={galleryItem.bigSrc}
                customItemsProvider={finalOptions.customItemsProvider}
                onLoad={() => {
                    handleImageLoadingFinished(false);
                }}
                onError={() => {
                    handleImageLoadingFinished(true);
                }}
                onMouseDown={!hasMultipleGalleryItems ? undefined : (event) => {
                    event.preventDefault()
                    if(event.button === 0){
                        swipeOriginX.current = event.clientX
                    }
                }} 
                onTouchStart={!hasMultipleGalleryItems ? undefined : (event) => {
                    event.preventDefault()
                    swipeOriginX.current = event.changedTouches[0].clientX
                }} 
                onMouseUp={!hasMultipleGalleryItems ? undefined : (event) => {
                    event.preventDefault()
                    if(!swipeOriginX.current) return
                    if (swipeOriginX.current > event.clientX){
                        moveNext()
                    } else if (swipeOriginX.current < event.clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onMouseMove={!hasMultipleGalleryItems ? undefined : (event) => {
                    if (swipeOriginX.current){
                        event.preventDefault()
                        if(!swiping && Math.abs(swipeOriginX.current - event.clientX) > swipeTreshold){
                            setSwiping(swipeOriginX.current > event.clientX ? 'left' : 'right')
                        }
                    }
                }}
                onTouchEnd={!hasMultipleGalleryItems ? undefined : (event) => {
                    event.preventDefault()
                    if(!swipeOriginX.current) return
                    if (swipeOriginX.current > event.changedTouches[0].clientX){
                        moveNext() 
                    } else if (swipeOriginX.current < event.changedTouches[0].clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onTouchMove={!hasMultipleGalleryItems ? undefined : (event) => {
                    if (swipeOriginX.current){
                        event.preventDefault()
                        if(!swiping && Math.abs(swipeOriginX.current - event.changedTouches[0].clientX) > swipeTreshold){
                            setSwiping(swipeOriginX.current > event.changedTouches[0].clientX ? 'left' : 'right')
                        }
                    }
                }}
            />
            <Thumbnails 
                onClick={(index) => setItemByIndex(index)} 
                selectedItem={selectedItem} 
                showThumbnails={finalOptions.showThumbnails && galleryItem && hasMultipleGalleryItems} 
                isItemLoaded={isLoadingDone && !forcedLoading} 
                galleryItems={galleryItems}
                placeholderSrc={finalOptions.placeholderSrc}
                withoutBorder={finalOptions.withoutBorder}
            />
            {showTitleOnTop
                ? closerJSX
                : titleJSX
            }
            <Arrows 
                key={`arrows-${selectedItem}`} 
                showArrows={finalOptions.showArrows && hasMultipleGalleryItems && galleryItem} 
                isItemLoaded={isLoadingDone && !forcedLoading} 
                moveNext={moveNext} 
                movePrev={movePrev} 
            />
        </div>

    }

    // container

    let checkContainer = document.getElementById('rt-lightbox-container')
    if(!checkContainer){
        const lightboxContainer = document.createElement('div')
        lightboxContainer.setAttribute('id', 'rt-lightbox-container')
        document.body.appendChild(lightboxContainer)
        checkContainer = lightboxContainer
    } 

    // mounting 

    document.body.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            ReactDOM.unmountComponentAtNode(checkContainer);
            ReactDOM.render(<App element={element} />, checkContainer)
        })
    })

}

export default RTJS_lightbox