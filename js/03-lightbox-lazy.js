import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');
const itemsMarkup = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img loading="lazy" class="gallery__image" src="${preview}" alt="${description}" width="510" height="340"/>
    </a>
  `
}).join('');

const itemsMarkupWithDataSrc = galleryItems.map(({ preview, original, description }) => {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image lazyload" data-src="${preview}" alt="${description}" width="510" height="340"/>
    </a>
  `
}).join('');

//==========================browser feature detection===============================
  if ('loading' in HTMLImageElement.prototype) {
    galleryList.innerHTML = itemsMarkup;
  } else {
    galleryList.innerHTML = itemsMarkupWithDataSrc;

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    script.integrity = 'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ==';
    script.crossorigin = 'anonymous';
    script.referrerpolicy = 'no-referrer';

    document.body.appendChild(script);
  }
//===================================================================================

let newGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log('фото на большом расстоянии чтоб проверить работу lazyload');