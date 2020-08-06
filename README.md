# rtjs
Handy everyday library. More to come.

## Lightbox extension

### Install
```js
npm install @rtjs/rtjs
...
import {RTJS_lightbox} from '@rtsoft/rtjs'
```

or 

```html
<script src="https://unpkg.com/@rtsoft/rtjs@latest/lib/RTJS.js"></script> 
```

### Usage

* multile elements can be linked to one gallery by `data-rt-lightbox-gallery`
* path to image is determined by `href` | `data-rt-lightbox-src`
* title is determined by `title` | `data-rt-lightbox-title`
* path to thumbnail is determined by `data-rt-lightbox-thumbnail-src` | inner <img> `src`

```html
<div>
    <a href="[path_to_big_image]" class="lightbox" data-rt-lightbox-gallery="[gal_id]" data-rt-lightbox-title="[title]">
        <img src="[path_to_thumbnail]" />
    </a>
    <a href="[path_to_big_image]" class="lightbox" data-rt-lightbox-gallery="[gal_id]" title="[title]">
        no thumbnail
    </a>
    <a href="[path_to_big_image]" class="lightbox" data-rt-lightbox-gallery="[gal_id]" data-rt-lightbox-title="[title]">
        <img src="[path_to_thumbnail]" />
    </a>
</div>
```
```js
RTJS_lightbox('.lightbox', {
    closeLabel: 'close',
    showTitle: true,
    showArrows: true,
    showThumbnails: true,
    debug: false,
    imageErrorLabel: 'Image could not be loaded',
    onOpened: (index) => {
        console.log('opened', index)
    },
    onClosed: (index) => {
        console.log('closed', index)
    },
    onItemChanged: (index) => {
        console.log('changed', index)
    }
})
```

or data can be provided directly while initing

```html
<span id="data-lightbox">click me</span>
```
```js
RTJS_lightbox('#data-lightbox', {
    data: [
        {bigSrc: "[path_to_big_image]", title: "[title]", smallSrc: "[path_to_thumbnail]"},
        {bigSrc: "[path_to_big_image]", title: "[title]", smallSrc: "[path_to_thumbnail]"},
        {bigSrc: "[path_to_big_image]", title: "[title]", smallSrc: "[path_to_thumbnail]"},
    ]
})
```
