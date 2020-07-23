let overflowSettingBackup

export const handlePageOverflow = (state) => {
    if (state === 'on'){
        overflowSettingBackup = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
    } else if (state === 'off' && overflowSettingBackup){
        document.body.style.overflow = overflowSettingBackup
    }
}

export const prepareGalleryItemsData = (options, element) => {

    if(options.data && Array.isArray(options.data)){
        return {items: options.data, selectedItem: 0}
    }
    
    const dataset = element.dataset 
    const gallery = dataset.rtLightboxGallery
    const bigSrc = element.getAttribute('href')  || dataset.rtLightboxSrc
    const smallSrc = element.querySelector('img') ? element.querySelector('img').getAttribute('src') : dataset.rtLightboxThumbnailSrc
    const title = element.getAttribute('title') || dataset.rtLightboxTitle
    let selectedItem = 0
    if(gallery){
        const galleryElements = document.body.querySelectorAll('[data-rt-lightbox-gallery="' + gallery + '"]')
        if (galleryElements.length > 1){
            const newGalleryItems = []
            galleryElements.forEach((item, index) => {
                if (item === element){
                    selectedItem = index
                }
                const bigSrc = item.getAttribute('href') || item.dataset.rtLightboxSrc
                const title = item.getAttribute('title') || item.dataset.rtLightboxTitle
                const smallSrc = item.querySelector('img') ? item.querySelector('img').getAttribute('src') : item.dataset.rtLightboxThumbnailSrc
                newGalleryItems.push({bigSrc, title, smallSrc})
            })
            return {items: newGalleryItems, selectedItem}
        } else {
            return {items: [{bigSrc, title, smallSrc}], selectedItem}
        }
    } else {
        return {items: [{bigSrc, title, smallSrc}], selectedItem}
    }
}