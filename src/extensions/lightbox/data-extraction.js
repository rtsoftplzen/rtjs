import { CONTENT_TYPES_DATA_EXTRACTORS, contentTypeExists, contentTypeExistsInCustomProvider, getContentTypeFromElement } from "./content-types";

export const extractCommonDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;
    const title = galleryElement.getAttribute("title") || dataset.rtLightboxTitle;

    const description = galleryElement.dataset.rtLightboxDescription;

    const smallSrc = getSmallSrc(galleryElement);

    return { title, smallSrc, description };
};

export const extractIframeDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;
    const sourceUrl =
        galleryElement.getAttribute("href") || dataset.rtSourceUrl;

    const iframeWidth = galleryElement.dataset.rtIframeWidth;

    // default values are handled in the iframe itself
    const allowFullscreen = galleryElement.dataset.rtAllowFullscreen !== undefined
      ? galleryElement.dataset.rtAllowFullscreen === "true"
      : undefined;

    const allow = galleryElement.dataset.rtIframeAllow;
    const frameborder = galleryElement.dataset.rtIframeFrameborder;

    return { sourceUrl, iframeWidth, allowFullscreen, allow, frameborder };
};

export const extractImageDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;

    const bigSrc = galleryElement.getAttribute("href") || dataset.rtLightboxSrc;

    return { bigSrc };
};

export const tryGetSmallSrcFromImage = (galleryElement) => {
    const imageElement = galleryElement.querySelector("img");
    const smallSrc = imageElement ? imageElement.getAttribute("src") : undefined;

    return smallSrc;
}

export const getSmallSrc = (galleryElement) => {

    const datasetThumbnail = galleryElement.dataset?.rtLightboxThumbnailSrc;

    // if the dataset has a thumbnail, use it before
    // the image tag, even if it is an empty string
    if(datasetThumbnail !== undefined)
    {
        return datasetThumbnail;
    }

    const smallSrc = tryGetSmallSrcFromImage(galleryElement);

    return smallSrc;
}

export const extractFullDataFromElement = (galleryElement, customItemsProvider) => {
    const contentType = getContentTypeFromElement(galleryElement);

    const commonData = extractCommonDataFromElement(galleryElement);

    if(!contentTypeExists(contentType)){
        if(!contentTypeExistsInCustomProvider(contentType, customItemsProvider))
        {
            throw new Error(`Invalid content type ${contentType}. Please provide a valid content type or a custom provider.`)
        }

        return { contentType, ...commonData };
    }

    const extractorFunction = CONTENT_TYPES_DATA_EXTRACTORS[contentType];
    const specificData = extractorFunction(galleryElement);
    
    return { contentType, ...commonData, ...specificData };
}