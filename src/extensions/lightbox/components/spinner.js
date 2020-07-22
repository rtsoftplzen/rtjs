import React from 'react'

const Spinner = ({showSpinner}) => {
    return showSpinner ? <div className="rt-lightbox__spinner" /> : null

}

export default Spinner