import React from "react";
import { GalleryItemControlPanel } from "./gallery-control";

const GalleryContent = ({
  contentJSX,
  withoutBorder,
  itemLoadState,
  swiping,
  galleryItem,
  visibilityFinishedState,

  // title
  titleJSX,
  showTitleOnTop,

  // closer
  closerJSX,
  
  // arrows
  moveNext,
  movePrev,
  showArrows,
  arrowsPosition,
  usingCustomArrows,
}) => {
  const isItemLoadingFinished = itemLoadState === visibilityFinishedState;

  const baseClass = "rt-lightbox__gallery-item-wrapper";

  const extClass = `
    ${isItemLoadingFinished ? ` ${baseClass}--visible` : ""}
    ${swiping === "left" ? ` ${baseClass}--swiping-left` : ""}
    ${swiping === "right" ? ` ${baseClass}--swiping-right` : ""}
    ${withoutBorder ? ` ${baseClass}--without-border` : ""}
    ${galleryItem ? ` ${baseClass}--${galleryItem.contentType}` : ""}
`;

  return (
    <div className={`${baseClass}__outer`}>
      {showTitleOnTop ? titleJSX : closerJSX}
      <div className={`${baseClass}${extClass}`}>
        {contentJSX}
      </div>
      {!showTitleOnTop ? titleJSX : closerJSX}
      <GalleryItemControlPanel
        moveNext={moveNext}
        movePrev={movePrev}
        arrowsPosition={arrowsPosition}
        showArrows={showArrows}
        usingCustomArrows={usingCustomArrows}
      />
    </div>
  );
};

export default GalleryContent;
