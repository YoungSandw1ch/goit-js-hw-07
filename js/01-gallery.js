import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector('.gallery');
const itemsMarkup = galleryItems.map(({ preview, original, description}) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join('');

galleryList.insertAdjacentHTML('afterbegin', itemsMarkup);
galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('gallery__image')) {
    return
  };

  const url = getOricinalImgUrl(event);
  const instance = createInstance(url);
  
  instance.show(window.addEventListener('keydown', onEscClick));
};

function createInstance(url) {
  return basicLightbox.create(`
    <img src="${url}">
  `,
    {
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscClick);
      }
    }
  );
};

function getOricinalImgUrl(e) {
  return e.target.dataset.source;
};

function closeInstanceByEsc(instance) {
  const isOpen = document.querySelector('.modal');
  if (isOpen) {
    e
  }
};

function onEscClick(e) {
  const isEsc = e.code !== 'Escape';

  if (isEsc) {
    return
  };

  console.log(`press esc`);
  instance.close();
}