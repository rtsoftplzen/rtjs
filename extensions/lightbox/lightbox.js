import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import './styles.scss'

const RTJS_lightbox = (selector) => {

    // lightbox react app

    const App = ({ element }) => {

        // state

        const [visible, setVisible] = useState(false)
        // const [imgsLoaded, setsImgLoaded] = useState(null)
        const [selectedItem, setSelectedItem] = useState(0)
        const [loadedImages, setLoadedImages] = useState([])
        const [galleryItems, setGalleryItems] = useState(null)
        const swipeOriginX = useRef(null)

        // lifecycle

        useEffect(() => {
            setVisible(true)
            const dataset = element.dataset 
            const gallery = dataset.rtLightboxGallery
            const bigSrc = dataset.rtLightboxSrc
            const title = element.dataset.rtLightboxTitle
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

        return visible ? <div className='rt-lightbox' onClick={(event) => {
            if (event.target.classList.contains('rt-lightbox') || event.target.classList.contains('rt-lightbox__closer')) {
                setVisible(false)
            }
        }}>
            {img && <div key={`title-${selectedItem}`} className={`rt-lightbox__title${isLoaded ? ' rt-lightbox__title--visible' : ''}`}><strong>{img.title || '...'}</strong>&nbsp;({`${selectedItem + 1}/${galleryItems.length}`})</div>}
            {!isLoaded && <div className="rt-lightbox__spinner" />}
            {img && <img 
                className={`rt-lightbox__image${isLoaded ? ' rt-lightbox__image--visible' : ''}`} 
                key={`img-${selectedItem}`} 
                src={img.bigSrc} 
                onLoad={() => {
                    if(!isLoaded){
                        setTimeout(() => {
                            setLoadedImages([...loadedImages, img.bigSrc])
                        }, 500)
                    }
                }}
                onMouseDown={(event) => {
                    event.preventDefault()
                    swipeOriginX.current = event.clientX
                }} 
                onTouchstart={(event) => {
                    event.preventDefault()
                    swipeOriginX.current = event.changedTouches[0].clientX
                }} 
                onMouseUp={(event) => {
                    event.preventDefault()
                    if (swipeOriginX.current > event.clientX){
                        moveNext() 
                    } else if (swipeOriginX.current < event.clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onMouseMove={(event) => {
                    if (swipeOriginX.current){
                        event.preventDefault()
                        event.target.style.transform = swipeOriginX.current > event.clientX ? 'translateX(-100px)' : 'translateX(100px)'
                        event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping')
                    }
                }}
                onTouchEnd={(event) => {
                    event.preventDefault()
                    if (swipeOriginX.current > event.changedTouches[0].clientX){
                        moveNext() 
                    } else if (swipeOriginX.current < event.changedTouches[0].clientX) {
                        movePrev() 
                    }
                    swipeOriginX.current = null
                }} 
                onTouchMove={(event) => {
                    if (swipeOriginX.current){
                        event.preventDefault()
                        event.target.style.transform = swipeOriginX.current > event.changedTouches[0].clientX ? 'translateX(-100px)' : 'translateX(100px)'
                        event.target.closest('.rt-lightbox').classList.add('rt-lightbox--swiping')
                    }
                }}
            />}
            {img && <div key={`closer-${selectedItem}`} className={`rt-lightbox__closer${isLoaded ? ' rt-lightbox__closer--visible' : ''}`}>&times; zavřít</div>}
            {galleryItems.length > 1 && img && <div key={`prev-${selectedItem}`} onClick={() => {
                movePrev()
            }} className={`rt-lightbox__prev${isLoaded ? ' rt-lightbox__prev--visible' : ''}`}>&lt;</div>}
            {galleryItems.length > 1 && img && <div key={`next-${selectedItem}`} onClick={() => {
                moveNext()
            }} className={`rt-lightbox__next${isLoaded ? ' rt-lightbox__next--visible' : ''}`}>&gt;</div>}
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