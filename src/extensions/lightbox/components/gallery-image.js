import React from 'react'

const GalleryImage = ({ src, onLoad, onError, swipeHandlerProps }) => {

	return (
		<img
			className={`rt-lightbox__image`}
			src={src || '...'}
			onLoad={onLoad}
			onError={onError}
			{...swipeHandlerProps}
		/>
	);
}

export default GalleryImage