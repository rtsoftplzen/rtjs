import React from "react";

const GalleryIframe = ({ title, iframeSrc, iframeWidth, onLoad, onError }) => {
    return (
    <iframe
      src={iframeSrc}
      title={title}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
      onLoad={onLoad}
      // currently onError will not be called for yt-videos
      // and the player will fail only after clicking the video icon s
      onError={onError}
      className="rt-lightbox__iframe"
      style={iframeWidth && {width: iframeWidth}}
    ></iframe>
  );
};

export default GalleryIframe;
