// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const images = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', images);

const lightbox = new simpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 2500,
});