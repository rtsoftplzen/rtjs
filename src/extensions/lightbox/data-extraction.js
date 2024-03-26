import { CONTENT_TYPES_DATA_EXTRACTORS, contentTypeExists, contentTypeExistsInCustomProvider, getContentTypeFromElement } from "./content-types";

export const extractCommonDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;
    const title = galleryElement.getAttribute("title") || dataset.rtLightboxTitle;

    const description = galleryElement.dataset.rtLightboxDescription;

    const smallSrc = getSmallSrc(galleryElement);

    // The dataset is to be used within custom components so that they
    // have unrestricted access to the underlying data
    // normally, the dataset is not used and the data is extracted into
    // specific fields so that it can be directly provided through props
    return { title, smallSrc, description, dataset };
};

export const extractIframeDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;
    const sourceUrl =
        galleryElement.getAttribute("href") || dataset.rtSourceUrl;

    // default values are handled in the iframe itself
    const allowFullscreen = galleryElement.dataset.rtAllowFullscreen !== undefined
      ? galleryElement.dataset.rtAllowFullscreen === "true"
      : undefined;

    const allow = galleryElement.dataset.rtIframeAllow;
    const frameborder = galleryElement.dataset.rtIframeFrameborder;

    return { sourceUrl, allowFullscreen, allow, frameborder };
};

export const extractImageDataFromElement = (galleryElement) => {
    const dataset = galleryElement.dataset;

    const bigSrc = galleryElement.getAttribute("href") || dataset.rtLightboxSrc;

    const infoElement = galleryElement.querySelector(".rt-lightbox-info-content");
    const lightboxInfo = infoElement?.innerHTML || galleryElement.dataset.rtLightboxInfo;
    
    return { bigSrc, lightboxInfo };
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