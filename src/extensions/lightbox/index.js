import React, { useState, useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { debounce } from 'throttle-debounce'
import { defaultOptions } from './options'
import { handlePageOverflow, prepareGalleryItemsData } from './helpers'
import Arrows from './components/arrows'
import Closer from './components/closer'
import Image from './components/image'
import Spinner from './components/spinner'
import Title from './components/title'
import Thumbnails from './components/thumbnails'
import './styles.scss'
import { usePrevious } from '../../hooks/usePrev'

const swipeTreshold = 20

const RTJS_lightbox = (selector, options = {}) => {

    const finalOptions = {...defaultOptions, ...options}

    // lightbox app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(null)
        const [selectedItem, setSelectedItem] = useState(null)
        const [loadedImages, setLoadedImages] = useState({})
        const [galleryItems, setGalleryItems] = useState(null)
        const [forcedLoading, setForcedLoading] = useState(false)
        const [swiping, setSwiping] = useState(false)
        const swipeOriginX = useRef(null)
        const prevSelectedItem = usePrevious(selectedItem)

        // lifecycle

        useEffect(() => {
            handlePageOverflow('on')
            setVisible(true)
            const preparedItems = prepareGalleryItemsData(options, element)
            setGalleryItems(preparedItems.items)
            setSelectedItem(preparedItems.selectedItem)
            
        }, [])

        useEffect(() => {
            if(forcedLoading && loadedImages && loadedImages['item-'+selectedItem]){
                setForcedLoading(false)
            }
        }, [selectedItem, loadedImages, forcedLoading])


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

            if(selectedItem && finalOptions.onItemChanged && prevSelectedItem !== null){
                finalOptions.onItemChanged(selectedItem)
            }
        }, [selectedItem])

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
            if(isMultiple && event.keyCode === 37){
                movePrev()
            } else if (isMultiple && event.keyCode === 39){
                moveNext()
            } else if (event.keyCode === 27) {
                handlePageOverflow('off')
                setVisible(false)
            }
        }), [galleryItems, selectedItem, visible])

        const movePrev = () => {
            setForcedLoading(true)
            setSelectedItem(selectedItem ? selectedItem - 1 : galleryItems.length - 1)
            if(swiping){
                setSwiping(false)
            } 
        }

        const moveNext = () => {
            setForcedLoading(true)
            setSelectedItem(galleryItems.length === selectedItem + 1 ? 0 : selectedItem + 1)
            if(swiping){
                setSwiping(false)
            }
        }

        const setItemByIndex = (index) => {
            setForcedLoading(true)
            setSelectedItem(index)
        }

        // output

        const img = galleryItems ? galleryItems[selectedItem] : undefined
        const isLoaded = img && loadedImages ? loadedImages['item-'+selectedItem] : undefined
        const isMultiple = galleryItems ? galleryItems.length > 1 : undefined
        const showTitleOnTop = finalOptions.showTitle === 'top';

        if(finalOptions.debug){
            console.log({selectedItem, galleryItems})
        }

        return visible ? <div className={`rt-lightbox${swiping ? ' rt-lightbox--swiping' : ''}`} onClick={(event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                handlePageOverflow('off')
                setVisible(false)
            }
        }}>
            {showTitleOnTop
                ? <Title 
                    key={`title-${selectedItem}`} 
                    showTitle={img && finalOptions.showTitle}
                    onlyPagination={img && finalOptions.onlyPagination}
                    isItemLoaded={isLoaded && !forcedLoading} 
                    title={img.title} 
                    selectedItem={selectedItem} 
                    sum={galleryItems.length}
                    description={img.description}
                />
                : <Closer 
                    key={`closer-${selectedItem}`} 
                    showCloser={img && (finalOptions.closeLabel || finalOptions.showEmptyCloser)} 
                    isItemLoaded={isLoaded && !forcedLoading} 
                    label={finalOptions.closeLabel}
                    wrapperClasses={finalOptions.wrapperClasses.closer}
                />
            }
            <Spinner 
                showSpinner={!isLoaded || forcedLoading} 
            />
            <Image
                errorText={finalOptions.imageErrorLabel}
                placeholderSrc={finalOptions.placeholderSrc}
                withoutBorder={finalOptions.withoutBorder}
                key={`image-${selectedItem}`}
                swiping={swiping}
                showImage={img}
                isItemLoaded={isLoaded && !forcedLoading ? isLoaded : undefined}
                selectedItem={selectedItem}
                src={img.bigSrc} 
                onLoad={() => {
                    if(!isLoaded){
                        setTimeout(() => {
                            setLoadedImages({...loadedImages, ['item-'+selectedItem]: {error: false}})
                        }, 200)
                    }
                }}
                onError={() => {
                    if(!isLoaded){
                        setTimeout(() => {
                            setLoadedImages({...loadedImages, ['item-'+selectedItem]: {error: true}})
                        }, 200)
                    }
                }}
                onMouseDown={!isMultiple ? undefined : (event) => {
                    event.preventDefault()
                    if(event.button === 0){
                        swipeOriginX.current = event.clientX
                    }
                }} 
                onTouchStart={!isMultiple ? undefined : (event) => {
                    event.preventDefault()
                    swipeOriginX.current = event.changedTouches[0].clientX
                }} 
                onMouseUp={!isMultiple ? undefined : (event) => {
                    event.preventDefault()
                    if(!swipeOriginX.current) return
                    if (swipeOriginX.current > event.clientX){
                        moveNext()
                    } else if (swipeOriginX.current < event.clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onMouseMove={!isMultiple ? undefined : (event) => {
                    if (swipeOriginX.current){
                        event.preventDefault()
                        if(!swiping && Math.abs(swipeOriginX.current - event.clientX) > swipeTreshold){
                            setSwiping(swipeOriginX.current > event.clientX ? 'left' : 'right')
                        }
                    }
                }}
                onTouchEnd={!isMultiple ? undefined : (event) => {
                    event.preventDefault()
                    if(!swipeOriginX.current) return
                    if (swipeOriginX.current > event.changedTouches[0].clientX){
                        moveNext() 
                    } else if (swipeOriginX.current < event.changedTouches[0].clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onTouchMove={!isMultiple ? undefined : (event) => {
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
                showThumbnails={finalOptions.showThumbnails && img && isMultiple} 
                showThumbnailsButton={finalOptions.showThumbnailsButton && img && isMultiple}
                thumbnailsButtonTitle={finalOptions.thumbnailsButtonTitle}
                isItemLoaded={isLoaded && !forcedLoading} 
                galleryItems={galleryItems}
                placeholderSrc={finalOptions.placeholderSrc}
                withoutBorder={finalOptions.withoutBorder}
            />
            {showTitleOnTop
                ? <Closer 
                    key={`closer-${selectedItem}`} 
                    showCloser={img && (finalOptions.closeLabel || finalOptions.showEmptyCloser)} 
                    isItemLoaded={isLoaded && !forcedLoading} 
                    label={finalOptions.closeLabel}
                    wrapperClasses={finalOptions.wrapperClasses.closer}
                />
                : <Title 
                    key={`title-${selectedItem}`} 
                    showTitle={img && finalOptions.showTitle}
                    onlyPagination={img && finalOptions.onlyPagination}
                    isItemLoaded={isLoaded && !forcedLoading} 
                    title={img.title} 
                    selectedItem={selectedItem} 
                    sum={galleryItems.length}
                    description={img.description}
                />
            }
            <Arrows 
                key={`arrows-${selectedItem}`} 
                showArrows={finalOptions.showArrows && isMultiple && img}
                arrowsTitle={finalOptions.arrowsTitle}
                isItemLoaded={isLoaded && !forcedLoading} 
                moveNext={moveNext} 
                movePrev={movePrev}
                wrapperClasses={finalOptions.wrapperClasses.arrows}
            />
        </div> : null

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