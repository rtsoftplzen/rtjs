import React from "react";

const Title = ({
  showTitle,
  onlyPagination,
  isItemLoaded,
  title,
  selectedItem,
  sum,
  description,
}) => {
  if (!showTitle) {
    return;
  }

  if (onlyPagination) {
    return (
      <div
        className={`rt-lightbox__title-wrapper${
          isItemLoaded ? " rt-lightbox__title-wrapper--visible" : ""
        }`}
      >
        <div className="rt-lightbox__title">
          {sum > 1 && <span>{`${selectedItem + 1}/${sum}`}</span>}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rt-lightbox__title-wrapper${
        isItemLoaded ? " rt-lightbox__title-wrapper--visible" : ""
      }`}
    >
      <div className="rt-lightbox__title">
        <strong>{!onlyPagination && (title || "...")}</strong>{" "}
        {sum > 1 && <span>&nbsp;({`${selectedItem + 1}/${sum}`})</span>}
      </div>

      {description ? (
        <div className="rt-lightbox__description">{description}</div>
      ) : null}
    </div>
  );
};

export default Title;
