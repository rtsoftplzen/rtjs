import React, { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { extractDigitsFromString } from '../helpers';

const GalleryImage = ({ src, onLoad, onError, swipeHandlerProps, infoText }) => {

	const hasInfoText = !!infoText;
	
	const [infoModalOpen, setInfoModalOpen] = useState(false);

	const handleInfoBubbleClick = (e) => {
		e.stopPropagation();
		setInfoModalOpen(true);
	}

	const handleCloserClick = (e) => {
		e.stopPropagation();
		setInfoModalOpen(false);
	}

	const imgRef = useRef(null);
	const infoBubbleRef = useRef(null);

	const modalRef = useRef(null);

	const [bubbleOgOffsetX, setBubbleOgOffsetX] = useState(null);
	const [bubbleOgOffsetY, setBubbleOgOffsetY] = useState(null);

	const getOffsetsXY = () => {

		if(!imgRef.current)
		{
			return;
		}

		const parent = imgRef.current.parentElement;

		const parentPosX = parent.getBoundingClientRect().left;
		const imgPosX = imgRef.current.getBoundingClientRect().left;

		const parentPosY = parent.getBoundingClientRect().bottom;
		const imgPosY = imgRef.current.getBoundingClientRect().bottom;

		const imgOffsetX = imgPosX - parentPosX;
		const imgOffsetY = parentPosY - imgPosY;

		return {imgOffsetX, imgOffsetY};
	}

	const [internalLoaded, setInternalLoaded] = useState(false);

	const handleLoaded = () => {
		setInternalLoaded(true);
		onLoad();
	}

	useLayoutEffect(() => {

		if(!imgRef.current || !infoBubbleRef.current)
		{
			return;
		}

		
		if(bubbleOgOffsetX === null)
		{
			const left = getComputedStyle(infoBubbleRef.current).getPropertyValue('left');
			setBubbleOgOffsetX(extractDigitsFromString(left));
		}

		if(bubbleOgOffsetY === null)
		{
			const bottom = getComputedStyle(infoBubbleRef.current).getPropertyValue('bottom');
			setBubbleOgOffsetY(extractDigitsFromString(bottom));
		}
		

		const recalcPosition = () => {

			if(!infoBubbleRef.current)
			{
				return;
			}

			const { imgOffsetX, imgOffsetY } = getOffsetsXY();

			infoBubbleRef.current.style.left = `${imgOffsetX + bubbleOgOffsetX || 0}px`;
			infoBubbleRef.current.style.bottom = `${imgOffsetY + bubbleOgOffsetY || 0}px`;
		}

		recalcPosition();
		
		const onResize = () => {
			recalcPosition();
		}

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		}

	}, [imgRef, infoBubbleRef, bubbleOgOffsetX, bubbleOgOffsetY, infoModalOpen, internalLoaded]);
	
	useLayoutEffect(() => {

		if(!modalRef.current || !imgRef.current)
		{
			return;
		}

		const recalcPosition = () => {
			const { imgOffsetX, imgOffsetY } = getOffsetsXY();

			modalRef.current.style.left = `${imgOffsetX}px`;
			modalRef.current.style.bottom = `${imgOffsetY}px`;

			modalRef.current.style.width = `${imgRef.current.offsetWidth}px`;
			modalRef.current.style.maxHeight = `${imgRef.current.offsetHeight}px`;
		}

		recalcPosition();

		const onResize = () => {
			recalcPosition();
		}

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		}


	}, [modalRef, imgRef, infoModalOpen]);
	
	return (
		<>
			<img
				ref={imgRef}
				className={`rt-lightbox__image`}
				src={src}
				onLoad={handleLoaded}
				onError={onError}
				{...swipeHandlerProps}
			/>
			{hasInfoText && !infoModalOpen && <div ref={infoBubbleRef} className='rt-lightbox__info-bubble' onClick={handleInfoBubbleClick} />}
			
			<div className='rt-lightbox__info-bubble__modal' style={{display: infoModalOpen ? "block" : "none"}} ref={modalRef}>
				<div dangerouslySetInnerHTML={{__html: infoText}} />
				<div className='rt-lightbox__info-bubble__modal__closer' onClick={handleCloserClick} />
			</div>
		</>
	);
}

export default GalleryImage