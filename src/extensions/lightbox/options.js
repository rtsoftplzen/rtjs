
export const ARROWS_POSITIONS = Object.freeze({
    SIDES: 'sides',
    UNDER_IMAGE: 'under-image'
})

export const defaultOptions = {
    closeLabel: 'close',
    showCloser: undefined,
    showCloserXSymbol: true,
    showTitle: true,
    showArrows: true,
    showThumbnails: true,
    debug: false,
    imageErrorLabel: 'obrázek se nepodařilo načíst',
    placeholderSrc: undefined,
    withoutBorder: false,
    titlePlacement: 'top',
    titleShowItemCounter: true,
    customItemsProvider: undefined,
    thumbnailsPlacement: 'bottom',
    arrowsPosition: ARROWS_POSITIONS.SIDES,
    usingCustomArrows: false,
}
