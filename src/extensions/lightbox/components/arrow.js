import React from "react";
import { ARROWS_POSITIONS } from "../options";

const ARROW_COMMON_CLASS = "rt-lightbox__arrow";

const ARROW_CLASSES_BY_POSITION = Object.freeze({
    [ARROWS_POSITIONS.SIDES]: "--sides",
    [ARROWS_POSITIONS.UNDER_IMAGE]: "--under-image",
});

const Arrow = ({ onClick, arrowClass, content, arrowPosition, usingCustomArrows }) => {
  const arrowClassFull = `rt-lightbox__${arrowClass}`;
  const visibilityClass = `${arrowClassFull}--visible`;

  const positionClassFull = `${ARROW_COMMON_CLASS}${ARROW_CLASSES_BY_POSITION[arrowPosition]}`;
  const positionClassWithNextPrev = `${ARROW_COMMON_CLASS}${ARROW_CLASSES_BY_POSITION[arrowPosition]}__${arrowClass}`;
  

  return (
    <div
      onClick={onClick}
      className={`${ARROW_COMMON_CLASS} ${arrowClassFull} ${visibilityClass} ${positionClassFull} ${positionClassWithNextPrev}`}
    >
      {!usingCustomArrows ? content : ''}
    </div>
  );
};

export default Arrow;
