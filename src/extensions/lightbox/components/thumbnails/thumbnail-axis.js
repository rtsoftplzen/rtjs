
export const THUMBNAIL_POSITION = Object.freeze({
    BOTTOM: 'bottom',
    RIGHT: 'right'
})

export const THUMBNAIL_AXIS = Object.freeze({
    ROW: 'row',
    COLUMN: 'column'
})

export const THUMBNAIL_POSITION_TO_AXIS = Object.freeze({
    [THUMBNAIL_POSITION.BOTTOM]: THUMBNAIL_AXIS.ROW,
    [THUMBNAIL_POSITION.RIGHT]: THUMBNAIL_AXIS.COLUMN
})

export const THUMBNAIL_CLASSES_BY_POSITION = Object.freeze({
    [THUMBNAIL_POSITION.BOTTOM]: '--bottom-position',
    [THUMBNAIL_POSITION.RIGHT]: '--right-position'
})

export const THUMBNAILS_CLASSES_BY_AXIS = Object.freeze({
    [THUMBNAIL_AXIS.ROW]: '--row-axis',
    [THUMBNAIL_AXIS.COLUMN]: '--column-axis'
})

export const getPositionClasses = (baseClass, placement) => {

    const classByPosition = THUMBNAIL_CLASSES_BY_POSITION[placement];

    const axis = THUMBNAIL_POSITION_TO_AXIS[placement];

    const axisClassByPosition = THUMBNAILS_CLASSES_BY_AXIS[axis];

    return `${baseClass}${classByPosition} ${baseClass}${axisClassByPosition}`;

}
