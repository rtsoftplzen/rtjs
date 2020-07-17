import React from 'react'

const Title = ({showTitle, isItemLoaded, title, selectedItem, sum}) => {
    return showTitle ? <div key={`title-${selectedItem}`} className={`rt-lightbox__title${isItemLoaded ? ' rt-lightbox__title--visible' : ''}`}><strong>{title || '...'}</strong>&nbsp;({`${selectedItem + 1}/${sum}`})</div> : null

}

export default Title