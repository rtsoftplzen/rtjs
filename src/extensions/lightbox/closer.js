import React from 'react'

const Closer = ({showCloser, selectedItem, isItemLoaded, label}) => {
    return showCloser ? <div key={`closer-${selectedItem}`} className={`rt-lightbox__closer${isItemLoaded ? ' rt-lightbox__closer--visible' : ''}`}>&times; {label}</div> : null

}

export default Closer