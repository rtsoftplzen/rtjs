import React, { useState, useEffect, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import { debounce } from 'throttle-debounce'
import { defaultOptions } from './options'
import { handlePageOverflow } from './helpers'
import Arrows from './components/arrows'
import Closer from './components/closer'
import Image from './components/image'
import Spinner from './components/spinner'
import Title from './components/title'
import Thumbnails from './components/thumbnails'
import './styles.scss'

const swipeTreshold = 20

const RTJS_lightbox = (selector, options = {}) => {

    const finalOptions = {...defaultOptions, ...options}

    // lightbox app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(null)
        const [selectedItem, setSelectedItem] = useState(0)
        const [loadedImages, setLoadedImages] = useState({})
        const [galleryItems, setGalleryItems] = useState(null)
        const [forcedLoading, setForcedLoading] = useState(false)
        const [swiping, setSwiping] = useState(false)
        const swipeOriginX = useRef(null)

        // lifecycle

        useEffect(() => {
            handlePageOverflow('on')
            setVisible(true)
            if(options.data && Array.isArray(options.data)){
                setGalleryItems(options.data)
                return
            }
            const dataset = element.dataset 
            const gallery = dataset.rtLightboxGallery
            const bigSrc = element.getAttribute('href')  || dataset.rtLightboxSrc
            const smallSrc = element.querySelector('img') ? element.querySelector('img').getAttribute('src') : dataset.rtLightboxThumbnailSrc
            const title = element.getAttribute('title') || dataset.rtLightboxTitle
            if(gallery){
                const galleryElements = document.body.querySelectorAll('[data-rt-lightbox-gallery="' + gallery + '"]')
                if (galleryElements.length > 1){
                    const newGalleryItems = []
                    galleryElements.forEach((item, index) => {
                        if (item === element){
                            setSelectedItem(index)
                        }
                        const bigSrc = item.getAttribute('href') || item.dataset.rtLightboxSrc
                        const title = item.getAttribute('title') || item.dataset.rtLightboxTitle
                        const smallSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : item.dataset.rtLightboxThumbnailSrc
                        newGalleryItems.push({bigSrc, title, smallSrc})
                    })
                    setGalleryItems(newGalleryItems)
                } else {
                    setGalleryItems([{bigSrc, title, smallSrc}]) 
                }
            } else {
                setGalleryItems([{bigSrc, title, smallSrc}])
            }
            
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

        if(finalOptions.debug){
            console.log(galleryItems)
        }

        return visible ? <div className={`rt-lightbox${swiping ? ' rt-lightbox--swiping' : ''}`} onClick={(event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                handlePageOverflow('off')
                setVisible(false)
            }
        }}>
            <Title 
                key={`title-${selectedItem}`} 
                showTitle={img && finalOptions.showTitle} 
                isItemLoaded={isLoaded && !forcedLoading} 
                title={img.title} 
                selectedItem={selectedItem} 
                sum={galleryItems.length} 
            />
            <Spinner 
                showSpinner={!isLoaded || forcedLoading} 
            />
            <Image
                errorText={finalOptions.imageErrorLabel}
                placeholderSrc={finalOptions.placeholderSrc} 
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
                isItemLoaded={isLoaded && !forcedLoading} 
                galleryItems={galleryItems}
                placeholderSrc={finalOptions.placeholderSrc} 
            />
            <Closer 
                key={`closer-${selectedItem}`} 
                showCloser={img && finalOptions.closeLabel} 
                isItemLoaded={isLoaded && !forcedLoading} 
                label={finalOptions.closeLabel} />
            <Arrows 
                key={`arrows-${selectedItem}`} 
                showArrows={finalOptions.showArrows && isMultiple && img} 
                isItemLoaded={isLoaded && !forcedLoading} 
                moveNext={moveNext} 
                movePrev={movePrev} 
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