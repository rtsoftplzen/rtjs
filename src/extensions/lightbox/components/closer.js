import React from "react";

const Closer = ({ showCloser, isItemLoaded, label, wrapperClasses }) => {
  return showCloser ? (
    <div
      className={`rt-lightbox__closer${
        isItemLoaded ? " rt-lightbox__closer--visible" : ""
      }${wrapperClasses ? " " + wrapperClasses : ""}`}
    >
      {label ? (
        <>&times;{label}</>
      ) : (
        <div className="rt-lightbox__closer__inner"></div>
      )}
    </div>
  ) : null;
};

export default Closer;
