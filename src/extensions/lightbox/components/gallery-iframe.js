import React from "react";

const IFRAME_DEFAULTS = Object.freeze({
  ALLOW: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  FRAMEBORDER: "0",
});

const GalleryIframe = ({ title, iframeSrc, onLoad, onError, allowFullscreen = true, allow, frameborder }) => {
    return (
    <iframe
      src={iframeSrc}
      title={title}
      frameborder={frameborder || IFRAME_DEFAULTS.FRAMEBORDER}
      allow={allow || IFRAME_DEFAULTS.ALLOW}
      allowfullscreen={allowFullscreen}
      onLoad={onLoad}
      // currently onError will not be called for yt-videos
      // and the player will fail only after clicking the video icon s
      onError={onError}
      className="rt-lightbox__iframe"
    ></iframe>
  );
};

export default GalleryIframe;
