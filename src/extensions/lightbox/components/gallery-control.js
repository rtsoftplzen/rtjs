import React from "react";
import Arrow from "./arrow";

export const ARROW_PROPS = {
  ARROW_LEFT: {
    arrowClass: "prev",
    content: <>&lt;</>,
  },
  ARROW_RIGHT: {
    arrowClass: "next",
    content: <>&gt;</>,
  },
};

export const GalleryItemControlPanel = ({
  movePrev,
  moveNext,
  arrowsPosition,
  showArrows,
  usingCustomArrows,
}) => {


  const arrowsLeftJSX = (
    <Arrow
      onClick={movePrev}
      {...ARROW_PROPS.ARROW_LEFT}
      arrowPosition={arrowsPosition}
      usingCustomArrows={usingCustomArrows}
    />
  );

  const arrowsRightJSX = (
    <Arrow
      onClick={moveNext}
      {...ARROW_PROPS.ARROW_RIGHT}
      arrowPosition={arrowsPosition}
      usingCustomArrows={usingCustomArrows}
    />
  );

  if (!showArrows) {
    return null;
  }

  return <div className="rt-lightbox__arrow-controls">
    {arrowsLeftJSX}
    {arrowsRightJSX}
  </div>;
};
