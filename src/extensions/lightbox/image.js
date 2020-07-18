import React from 'react'

const Image = ({ showImage, selectedItem, isItemLoaded, src, onLoad, onError, onMouseDown, onTouchStart, onMouseUp, onMouseMove, onTouchEnd, onTouchMove, errorText }) => {

	return showImage ? (!isItemLoaded || !isItemLoaded.error ?
		<img
			className={`rt-lightbox__image${isItemLoaded && !isItemLoaded.error ? ' rt-lightbox__image--visible' : ''}`}
			src={src}
			onLoad={onLoad}
			onMouseDown={onMouseDown}
			onTouchstart={onTouchStart}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onTouchEnd={onTouchEnd}
			onTouchMove={onTouchMove}
			onError={onError}
		/> : (isItemLoaded.error ? <span 
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
		</span> : null)) : null
}

export default Image