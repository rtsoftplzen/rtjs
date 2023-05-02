import React, { useRef, useEffect, useLayoutEffect, useState } from "react";

const Thumbnails = ({
  showThumbnails,
  showThumbnailsButton,
  thumbnailsButtonTitle,
  galleryItems,
  isItemLoaded,
  selectedItem,
  onClick,
  placeholderSrc,
  withoutBorder,
}) => {
  if (!showThumbnails) {
    return;
  }

  const settledThumbs = useRef({});
  const wrapper = useRef(null);
  const scrollPosition = useRef({ item: null, scroll: null });
  const [settledAll, setSettledAll] = useState(false);
  const [thumbnailsHidden, setThumbnailsHidden] = useState(false);

  useEffect(() => {
    if (!showThumbnails || !wrapper.current) return;
    const handleScroll = (event) => {
      scrollPosition.current = event.target.scrollLeft;
    };
    wrapper.current.addEventListener("scroll", handleScroll);
    return () => {
      wrapper.current.removeEventListener("scroll", handleScroll);
    };
  }, [showThumbnails]);

  useLayoutEffect(() => {
    if (!showThumbnails || !wrapper.current) return;

    if (scrollPosition.current) {
      wrapper.current.scrollLeft = scrollPosition.current;
    }

    if (settledAll) {
      const wrapperPos = wrapper.current.getBoundingClientRect();
      const itemPos =
        wrapper.current.children[selectedItem].getBoundingClientRect();
      const itemRightDiff = wrapperPos.right - itemPos.right;
      const itemLeftDiff = wrapperPos.left - itemPos.left;
      if (itemRightDiff < -1) {
        wrapper.current.scrollLeft += Math.abs(itemRightDiff);
        scrollPosition.current = wrapper.current.scrollLeft;
      } else if (itemLeftDiff > 1) {
        wrapper.current.scrollLeft -= Math.abs(itemLeftDiff);
        scrollPosition.current = wrapper.current.scrollLeft;
      }
    }
  });

  const toggleHideButton = () => {
    setThumbnailsHidden(!thumbnailsHidden);
  };

  return (
    <div className={`rt-lightbox__thumbnails rt-lightbox__thumbnails--visible`}>
      {showThumbnailsButton && (
        <button
          className={`rt-lightbox__thumbnails__button${
            thumbnailsHidden ? " rt-lightbox__thumbnails__button--hidden" : ""
          }`}
          type="button"
          onClick={toggleHideButton}
        >
          {thumbnailsHidden
            ? thumbnailsButtonTitle.hide
            : thumbnailsButtonTitle.show}
        </button>
      )}
      {!thumbnailsHidden && (
        <div ref={wrapper} className="rt-lightbox__thumbnails__wrapper">
          <div className="rt-lightbox__thumbnails__scroll">
            {galleryItems.map((item, index) => {
              return (
                <img
                  src={item.smallSrc || placeholderSrc}
                  alt={item.title || "..."}
                  className={`
                      rt-lightbox__thumbnail
                      ${
                        settledThumbs.current["item-" + index]
                          ? " rt-lightbox__thumbnail--settled"
                          : ""
                      }
                      ${
                        index === selectedItem
                          ? " rt-lightbox__thumbnail--active"
                          : ""
                      }
                      ${
                        withoutBorder
                          ? " rt-lightbox__thumbnail--without-border"
                          : ""
                      }
                  `}
                  onClick={(event) => {
                    event.preventDefault();
                    onClick(index);
                  }}
                  onLoad={(event) => {
                    settledThumbs.current["item-" + index] = true;
                    event.target.classList.add(
                      "rt-lightbox__thumbnail--settled"
                    );
                    if (
                      Object.keys(settledThumbs.current).length ===
                      galleryItems.length
                    ) {
                      setSettledAll(true);
                    }
                  }}
                  onError={(event) => {
                    settledThumbs.current["item-" + index] = true;
                    event.target.src = placeholderSrc;
                    event.target.classList.add(
                      "rt-lightbox__thumbnail--settled"
                    );
                    if (
                      Object.keys(settledThumbs.current).length ===
                      galleryItems.length
                    ) {
                      setSettledAll(true);
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Thumbnails;
