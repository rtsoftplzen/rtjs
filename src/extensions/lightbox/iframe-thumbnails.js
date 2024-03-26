

export const YT_THUMBNAIL_BASE_URL = 'https://img.youtube.com/vi/';
export const YT_THUMBNAIL_QUALITY = "maxresdefault.jpg";

const EMBED_REGEX = /^(?:https?\:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.?be)\/embed\/(.+)/;

export const isYoutubeEmbedLink = (url) => {
    return url.match(EMBED_REGEX);
}

export const getThumbnailURLFromYoutubeEmbedLink = (url) => {
    const videoId = url.match(EMBED_REGEX)[1];
    return `${YT_THUMBNAIL_BASE_URL}${videoId}/${YT_THUMBNAIL_QUALITY}`;
}