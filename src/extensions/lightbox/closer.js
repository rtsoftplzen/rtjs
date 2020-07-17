import React from 'react'

const Closer = ({showCloser, isItemLoaded, label}) => {
    return showCloser ? <div className={`rt-lightbox__closer${isItemLoaded ? ' rt-lightbox__closer--visible' : ''}`}>&times; {label}</div> : null

}

export default Closer