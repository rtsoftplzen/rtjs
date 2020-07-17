import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { defaultOptions } from './options'
import Arrows from './arrows'
import Closer from './closer'
import Image from './image'
import Spinner from './spinner'
import Title from './title'
import './styles.scss'

const swipeTreshold = 20

const RTJS_lightbox = (selector, options) => {

    // lightbox react app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(false)
        const [selectedItem, setSelectedItem] = useState(0)
        const [loadedImages, setLoadedImages] = useState([])
        const [galleryItems, setGalleryItems] = useState(null)
        const swipeOriginX = useRef(null)
        const finalOptions = useRef(null)

        // lifecycle

        useEffect(() => {
            finalOptions.current = {...defaultOptions, ...options}
            setVisible(true)
            const dataset = element.dataset 
            const gallery = dataset.rtLightboxGallery
            const bigSrc = element.getAttribute('href')  || dataset.rtLightboxSrc
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
                        newGalleryItems.push({bigSrc, title})
                    })
                    setGalleryItems(newGalleryItems)
                } else {
                    setGalleryItems([{bigSrc, title}]) 
                }
            } else {
                setGalleryItems([{bigSrc, title}])
            }
        }, [])

        useEffect(() => {
            const wrapper = (document.getElementById('rt-lightbox-container').querySelector('.rt-lightbox'))
            if(wrapper && wrapper.classList.contains('rt-lightbox--swiping')){
                wrapper.classList.remove('rt-lightbox--swiping')
            }
        }, [selectedItem])

        // helpers

        const movePrev = () => {
            setSelectedItem(selectedItem ? selectedItem - 1 : galleryItems.length - 1)
        }

        const moveNext = () => {
            setSelectedItem(galleryItems.length === selectedItem + 1 ? 0 : selectedItem + 1)
        }

        // output

        const img = galleryItems ? galleryItems[selectedItem] : undefined
        const isLoaded = img ? loadedImages.includes(img.bigSrc) : undefined
        const isMultiple = galleryItems ? galleryItems.length > 1 : undefined

        // console.log(galleryItems, img, isLoaded)

        return visible ? <div className='rt-lightbox' onClick={(event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                setVisible(false)
            }
        }}>
            <Title showTitle={img} isItemLoaded={isLoaded} title={img.title} selectedItem={selectedItem} sum={galleryItems.length} />
            <Spinner showSpinner={!isLoaded} />
            <Image
                showImage={img}
                isItemLoaded={isLoaded}
                selectedItem={selectedItem}
                src={img.bigSrc} 
                onLoad={() => {
                    if(!isLoaded){
                        setTimeout(() => {
                            setLoadedImages([...loadedImages, img.bigSrc])
                        }, 500)
                    }
                }}
                onMouseDown={!isMultiple ? undefined : (event) => {
                    event.preventDefault()
                    if(event.button === 0){
                        swipeOriginX.current = event.clientX
                    }
                }} 
                onTouchstart={!isMultiple ? undefined : (event) => {
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
            <Closer showCloser={img} selectedItem={selectedItem} isItemLoaded={isLoaded} label={finalOptions.current.closeLabel} />
            <Arrows showArrows={finalOptions.current.showArrows && isMultiple && img} selectedItem={selectedItem} isItemLoaded={isLoaded} moveNext={moveNext} movePrev={movePrev} />
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