import React from 'react'

const Arrows = ({showArrows, isItemLoaded, moveNext, movePrev}) => {
    return <>
        {showArrows && <div onClick={() => {
            movePrev()
        }} className={`rt-lightbox__prev${isItemLoaded ? ' rt-lightbox__prev--visible' : ''}`}>&lt;</div>}
        {showArrows && <div onClick={() => {
            moveNext()
        }} className={`rt-lightbox__next${isItemLoaded ? ' rt-lightbox__next--visible' : ''}`}>&gt;</div>}
    </>
}

export default Arrows