import React from "react";

const Arrows = ({
  showArrows,
  arrowsTitle,
  isItemLoaded,
  moveNext,
  movePrev,
  wrapperClasses,
}) => {
  return (
    <>
      {showArrows && (
        <div
          onClick={() => {
            movePrev();
          }}
          className={`rt-lightbox__prev${
            isItemLoaded ? " rt-lightbox__prev--visible" : ""
          }${wrapperClasses.left ? " " + wrapperClasses.left : ""}`}
        >
          {arrowsTitle.left ? (
            arrowsTitle.left
          ) : (
            <div className="rt-lightbox__next__inner"></div>
          )}
        </div>
      )}
      {showArrows && (
        <div
          onClick={() => {
            moveNext();
          }}
          className={`rt-lightbox__next${
            isItemLoaded ? " rt-lightbox__next--visible" : ""
          }${wrapperClasses.right ? " " + wrapperClasses.right : ""}`}
        >
          {arrowsTitle.right ? (
            arrowsTitle.right
          ) : (
            <div className="rt-lightbox__next__inner"></div>
          )}
        </div>
      )}
    </>
  );
};

export default Arrows;
