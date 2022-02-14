import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const itemsMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <li>
      <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `
}).join('');
console.log(itemsMarkup);