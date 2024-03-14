import React from "react";
import GalleryIframe from "./components/gallery-iframe";
import GalleryImage from "./components/gallery-image";
import { extractIframeDataFromElement, extractImageDataFromElement } from "./data-extraction";
import { getThumbnailURLFromYoutubeEmbedLink, isYoutubeEmbedLink } from "./iframe-thumbnails";

export const CONTENT_TYPES = Object.freeze({
    IMAGE: 'image',
    IFRAME: 'iframe' 
});

export const contentTypeExists = (contentType) => {
    return Object.values(CONTENT_TYPES).includes(contentType);
}

export const CONTENT_TYPES_DATA_EXTRACTORS = Object.freeze({
    [CONTENT_TYPES.IMAGE]: extractImageDataFromElement,
    [CONTENT_TYPES.IFRAME]: extractIframeDataFromElement
});

export const contentTypeExistsInCustomProvider = (
  contentType,
  customItemsProvider
) => {
  if (!customItemsProvider) {
    return false;
  }
  
  return customItemsProvider.some((item) => item.contentType === contentType);
};



export const getContentTypeFromElement = (element) => {
    const dataset = element.dataset;

    const contentType = dataset.rtContentType;
    const hasContentType = contentType !== undefined;

    // implicitly use image when not specified
    if(!hasContentType)
    {
        return CONTENT_TYPES.IMAGE;
    }

    return contentType;
}

export const CONTENT_TYPES_TO_COMPONENTS = Object.freeze({
  [CONTENT_TYPES.IMAGE]: (values) => (
    <GalleryImage
      src={values.src}
      onLoad={values.onLoad}
      onError={values.onError}
      swipeHandlerProps={values.swipeHandlerProps}
    />
  ),
  [CONTENT_TYPES.IFRAME]: (values) => (
    <GalleryIframe
      iframeSrc={values.galleryItem.sourceUrl}
      iframeWidth={values.galleryItem.iframeWidth}
      allow={values.galleryItem.allow}
      allowFullscreen={values.galleryItem.allowFullscreen}
      frameborder={values.galleryItem.frameborder}
      onLoad={values.onLoad}
      onError={values.onError}
    />
  ),
});

export const CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS = Object.freeze({
  [CONTENT_TYPES.IMAGE]: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxOTAuMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIgd2lkdGg9IjE5OS41IiB4PSIxNTYuMyIgeT0iMTYwLjkiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIgICAxNTYuMywzMTUuNyAyMTkuNywyNTYgMjc1LjcsMzE1LjcgMzA0LjcsMjg1LjggMzU1LjcsMzUxLjEgICIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjMwMy45IiBjeT0iMjIyLjYiIGZpbGw9Im5vbmUiIHI9IjI2LjIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9zdmc+",
  [CONTENT_TYPES.IFRAME]: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMwMDAwMDAiIHZpZXdCb3g9Ii01IC01IDM0IDM0Ij4KICA8ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGc+CiAgICAgIDxwb2x5Z29uIHBvaW50cz0iOS41LDcuNSA5LjUsMTYuNSAxNi41LDEyIi8+CiAgICAgIDxwYXRoIGQ9Ik0yMCw0SDRDMi45LDQsMiw0LjksMiw2djEyYzAsMS4xLDAuOSwyLDIsMmgxNmMxLjEsMCwyLTAuOSwyLTJWNkMyMiw0LjksMjEuMSw0LDIwLDR6IE0yMCwxOC4wMUg0VjUuOTloMTZWMTguMDF6Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
});

export const getContentTypeDefaultPlaceholder = (contentType) => {
    return CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS[contentType];
}

export const getImageThumbnailSrc = (item, placeholderSrc) => {

    if(item.smallSrc)
    {
        return item.smallSrc;
    }

    const contentType = item.contentType;
    const defaultPlaceholder = getContentTypeDefaultPlaceholder(contentType);

    if(contentType === CONTENT_TYPES.IFRAME && isYoutubeEmbedLink(item.sourceUrl))
    {
        return getThumbnailURLFromYoutubeEmbedLink(item.sourceUrl);
    }

    return placeholderSrc || defaultPlaceholder;

}


