import React from 'react'

const Image = ({ showImage, selectedItem, isItemLoaded, src, swiping, placeholderSrc, onLoad, onError, onMouseDown, onTouchStart, onMouseUp, onMouseMove, onTouchEnd, onTouchMove, errorText }) => {

	const extClass = `${isItemLoaded && !isItemLoaded.error ? ' rt-lightbox__image--visible' : ''}${swiping === 'left' ? ' rt-lightbox__image--swiping-left' : ''}${swiping === 'right' ? ' rt-lightbox__image--swiping-right' : ''}`
	const extClassError = `${swiping === 'left' ? ' rt-lightbox__image-error--swiping-left' : ''}${swiping === 'right' ? ' rt-lightbox__image-error--swiping-right' : ''}`

	return showImage ? (!isItemLoaded || !isItemLoaded.error ?
		<img
			className={`rt-lightbox__image${extClass}`}
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
			className={`rt-lightbox__image-error${extClassError}`}
		>	<img src={placeholderSrc} alt={errorText || '...'} />
			[url: "{src}"]<br/><br/>
			{errorText || '...'}
		</span> : null)) : null
}

export default Image