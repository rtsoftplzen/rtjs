import React, { useState } from 'react'

const Image = ({ showImage, selectedItem, isItemLoaded, src, onLoad, onMouseDown, onTouchStart, onMouseUp, onMouseMove, onTouchEnd, onTouchMove, errorText }) => {

	const [error, setError] = useState(false)

	return showImage && !error ?
		<img
			className={`rt-lightbox__image${isItemLoaded ? ' rt-lightbox__image--visible' : ''}`}
			src={src}
			onLoad={onLoad}
			onMouseDown={onMouseDown}
			onTouchstart={onTouchStart}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onTouchEnd={onTouchEnd}
			onTouchMove={onTouchMove}
			onError={(error) => {
				// console.log(error)
				setError(error)
				onLoad()
			}}
		/> : error ? <span 
			onMouseDown={onMouseDown}
			onTouchstart={onTouchStart}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onTouchEnd={onTouchEnd}
			onTouchMove={onTouchMove}
			className='rt-lightbox__image-error'
		>
			[url: "{src}"]<br/><br/>
			{errorText || '...'}
		</span> : null
}

export default Image