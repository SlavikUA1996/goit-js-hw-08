// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryCreate = document.querySelector('.gallery');

const galleryEl = galleryItems.map(({ preview, description, original }) =>
    `<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image" src ="${preview}" data-source="${original}" alt = "${description}" />
</a>
</div>`
).join('');

galleryCreate.insertAdjacentHTML('beforeend', galleryEl);

const lightboxCreate = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, captionPosition: "bottom", });

console.log(galleryItems);
