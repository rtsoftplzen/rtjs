import { CONTENT_TYPES, contentTypeExists } from "./content-types"
import { extractFullDataFromElement } from "./data-extraction"

let overflowSettingBackup

export const handlePageOverflow = (state) => {
    if (state === 'on'){
        overflowSettingBackup = window.getComputedStyle(document.body).overflow
        document.body.style.overflow = 'hidden'
    } else if (state === 'off' && overflowSettingBackup){
        document.body.style.overflow = overflowSettingBackup
    }
}


export const getAllElementsToPrepare = (element) => {
    const dataset = element.dataset;
    const galleryId = dataset.rtLightboxGallery;
    const hasGalleryId = galleryId !== undefined;

    // if galleryId is present, take all the items belonging to that gallery from the DOM (including this one)
    // otherwise, just take this one
    const galleryElements = hasGalleryId
        ? document.body.querySelectorAll('[data-rt-lightbox-gallery="' + galleryId + '"]')
        : [element];

    return galleryElements;
}

export const prepareGalleryItemsData = (options, element) => {

    // data was provided directly through a prop
    if(options.data && Array.isArray(options.data)){
        return {items: options.data, selectedItem: 0}
    }

    // data will need to be extracted from the DOM
    const galleryElements = getAllElementsToPrepare(element);

    let selectedItem = 0;
    const newGalleryItems = []

    galleryElements.forEach((item, index) => {
        if (item === element){
            selectedItem = index
        }
        
        const fullData = extractFullDataFromElement(item, options.customItemsProvider);
        newGalleryItems.push(fullData);
    })
    return {items: newGalleryItems, selectedItem}

    
}