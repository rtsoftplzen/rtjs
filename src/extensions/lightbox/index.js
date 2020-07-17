import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { defaultOptions } from './options'
import Arrows from './arrows'
import Closer from './closer'
import Image from './image'
import Spinner from './spinner'
import Title from './title'
import Thumbnails from './thumbnails'
import './styles.scss'

const swipeTreshold = 20

const RTJS_lightbox = (selector, options) => {

    const finalOptions = {...defaultOptions, ...options}

    // lightbox react app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(false)
        const [selectedItem, setSelectedItem] = useState(0)
        const [loadedImages, setLoadedImages] = useState([])
        const [galleryItems, setGalleryItems] = useState(null)
        const [forcedLoading, setForcedLoading] = useState(false)
        const swipeOriginX = useRef(null)

        // lifecycle

        useEffect(() => {
            setVisible(true)
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
            const wrapper = (document.getElementById('rt-lightbox-container').querySelector('.rt-lightbox'))
            if(wrapper && wrapper.classList.contains('rt-lightbox--swiping')){
                wrapper.classList.remove('rt-lightbox--swiping')
            }
            if(forcedLoading && loadedImages && galleryItems && loadedImages.includes(galleryItems[selectedItem].bigSrc)){
                setForcedLoading(false)
            }
        }, [selectedItem, loadedImages, galleryItems, forcedLoading])

        // helpers

        const movePrev = (delayed = false) => {
            setForcedLoading(true)
            setSelectedItem(selectedItem ? selectedItem - 1 : galleryItems.length - 1)   
        }

        const moveNext = (delayed = false) => {
            setForcedLoading(true)
            setSelectedItem(galleryItems.length === selectedItem + 1 ? 0 : selectedItem + 1)
        }

        const setItemByIndex = (index) => {
            setForcedLoading(true)
            setSelectedItem(index)
        }

        // output

        const img = galleryItems ? galleryItems[selectedItem] : undefined
        const isLoaded = img && loadedImages ? loadedImages.includes(img.bigSrc) : undefined
        const isMultiple = galleryItems ? galleryItems.length > 1 : undefined

        return visible ? <div className={`rt-lightbox`} onClick={(event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                setVisible(false)
            }
        }}>
            <Title key={`title-${selectedItem}`} showTitle={img} isItemLoaded={isLoaded && !forcedLoading} title={img.title} selectedItem={selectedItem} sum={galleryItems.length} />
            <Spinner showSpinner={!isLoaded || forcedLoading} />
            <Image
                errorText={finalOptions.imageErrorLabel}
                key={`image-${selectedItem}`}
                showImage={img}
                isItemLoaded={isLoaded && !forcedLoading}
                selectedItem={selectedItem}
                src={img.bigSrc} 
                onLoad={() => {
                    if(!isLoaded){
                        setTimeout(() => {
                            setLoadedImages([...loadedImages, img.bigSrc])
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
                        if(Math.abs(swipeOriginX.current - event.clientX) > swipeTreshold){
                            event.target.style.transform = swipeOriginX.current > event.clientX ? 'translateX(-100px)' : 'translateX(100px)'
                            event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping')
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
                        if(Math.abs(swipeOriginX.current - event.changedTouches[0].clientX) > swipeTreshold){
                            event.target.style.transform = swipeOriginX.current > event.changedTouches[0].clientX ? 'translateX(-100px)' : 'translateX(100px)'
                            event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping')
                        }
                    }
                }}
            />
            <Thumbnails key={`thumbs-${selectedItem}`} onClick={(index) => setItemByIndex(index)} selectedItem={selectedItem} showThumbnails={finalOptions.showThumbnails && img && isMultiple} isItemLoaded={isLoaded && !forcedLoading} galleryItems={galleryItems} />
            <Closer key={`closer-${selectedItem}`} showCloser={img} isItemLoaded={isLoaded && !forcedLoading} label={finalOptions.closeLabel} />
            <Arrows key={`arrows-${selectedItem}`} showArrows={finalOptions.showArrows && isMultiple && img} isItemLoaded={isLoaded && !forcedLoading} moveNext={moveNext} movePrev={movePrev} />
        </div> : null

    }

    document.body.querySelectorAll(selector).forEach(element => {
        element.addEventListener('click', (event) => {
            event.preventDefault()
            let checkContainer = document.getElementById('rt-lightbox-container')
            if(!checkContainer){
                const lightboxContainer = document.createElement('div')
                lightboxContainer.setAttribute('id', 'rt-lightbox-container')
                document.body.appendChild(lightboxContainer)
                checkContainer = lightboxContainer
            } 
            ReactDOM.unmountComponentAtNode(checkContainer);
            ReactDOM.render(<App element={element} />, checkContainer)
        })
    })

}

export default RTJS_lightbox