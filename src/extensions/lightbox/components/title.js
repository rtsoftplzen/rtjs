import React from 'react'

const Title = ({showTitle, showItemCounter, isItemLoaded, title, selectedItem, sum, description}) => {
    if (!showTitle) {
        return;
    }

    const showCounter = sum > 1 && showItemCounter;

    return <div className={`rt-lightbox__title-wrapper${isItemLoaded ? ' rt-lightbox__title-wrapper--visible' : ''}`}>
        <div className='rt-lightbox__title'>
            <strong>{(title || '...')}</strong> {showCounter && <span>&nbsp;({`${selectedItem + 1}/${sum}`})</span>}
        </div>

        {description ? <div className='rt-lightbox__description'>{description}</div> : null}
    </div>

}

export default Title