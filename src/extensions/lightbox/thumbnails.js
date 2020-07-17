import React from 'react'

const Thumbnails = ({showThumbnails, galleryItems, isItemLoaded, selectedItem, onClick}) => {



    return showThumbnails && galleryItems && galleryItems.length ? <div className={`rt-lightbox__thumbnails${isItemLoaded ? ' rt-lightbox__thumbnails--visible' : ''}`}>
        {galleryItems.map((item, index) => {
            return <img 
                src={item.smallSrc || 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxOTAuMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIgd2lkdGg9IjE5OS41IiB4PSIxNTYuMyIgeT0iMTYwLjkiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIgICAxNTYuMywzMTUuNyAyMTkuNywyNTYgMjc1LjcsMzE1LjcgMzA0LjcsMjg1LjggMzU1LjcsMzUxLjEgICIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjMwMy45IiBjeT0iMjIyLjYiIGZpbGw9Im5vbmUiIHI9IjI2LjIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9zdmc+'} 
                alt={item.title || '...'} 
                className={`rt-lightbox__thumbnail${index === selectedItem ? ' rt-lightbox__thumbnail--active' : ''}`}
                onClick={(event) => {
                    event.preventDefault()
                    onClick(index)
                }}
                onError={(event) => {
                    event.target.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHdpZHRoPSI1MTJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHJlY3QgZmlsbD0ibm9uZSIgaGVpZ2h0PSIxOTAuMyIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIgd2lkdGg9IjE5OS41IiB4PSIxNTYuMyIgeT0iMTYwLjkiLz48cG9seWxpbmUgZmlsbD0ibm9uZSIgcG9pbnRzPSIgICAxNTYuMywzMTUuNyAyMTkuNywyNTYgMjc1LjcsMzE1LjcgMzA0LjcsMjg1LjggMzU1LjcsMzUxLjEgICIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxMCIvPjxjaXJjbGUgY3g9IjMwMy45IiBjeT0iMjIyLjYiIGZpbGw9Im5vbmUiIHI9IjI2LjIiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PC9zdmc+'
                }}
            />
        })}
    </div> : null

}

export default Thumbnails