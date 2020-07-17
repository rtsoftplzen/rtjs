import React from 'react'

const Title = ({showTitle, isItemLoaded, title, selectedItem, sum}) => {
    return showTitle ? <div className={`rt-lightbox__title${isItemLoaded ? ' rt-lightbox__title--visible' : ''}`}><strong>{title || '...'}</strong>{sum > 1 && <span>&nbsp;({`${selectedItem + 1}/${sum}`})</span>}</div> : null

}

export default Title