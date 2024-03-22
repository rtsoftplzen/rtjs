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
    const galleryElementsArray = Array.from(galleryElements);

    const newGalleryItems = galleryElementsArray.map((item) => {
        const fullData = extractFullDataFromElement(item, options.customItemsProvider);
        return fullData;
    })

    const selectedItem = galleryElementsArray.findIndex(item => item === element);

    return {items: newGalleryItems, selectedItem};
}

/**
 * Removes all non digit characters from a string and returns the result as an integer.
 */
export const extractDigitsFromString = (str) => {
    if(str === null || str === undefined)
    {
        return null;
    }
    
    return parseInt(str.replace(/\D/g, ''))
}