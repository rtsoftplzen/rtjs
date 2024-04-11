import React from "react";
import { CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS } from "../content-types";


const ErrorDisplay = ({ itemContentType, src, errorText, placeholderSrc, swiping, swipeHandlerProps }) => {

  const usedPlaceholderSrc = placeholderSrc || CONTENT_TYPES_TO_THUMBNAIL_PLACEHOLDERS[itemContentType];

  const extClassError = `${
    swiping === "left" ? " rt-lightbox__image-error--swiping-left" : ""
  }${swiping === "right" ? " rt-lightbox__image-error--swiping-right" : ""}`;

  return (
    <span
      {...swipeHandlerProps}
      className={`rt-lightbox__image-error${extClassError}`}
    >
      {" "}
      <img src={usedPlaceholderSrc} alt={errorText || "..."} />
      [url: "{src}"]
      <br />
      <br />
      {errorText || "..."}
    </span>
  );
};

export default ErrorDisplay;