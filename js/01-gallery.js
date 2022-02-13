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
  
  instance.show();
  closeInstanceByEsc();
};

function createInstance(url) {
  return basicLightbox.create(`
    <div class="modal">
      <img src="${url}" width="800" height="600">
    </div>
  `, {
    onShow: (instance) => {
      instance.element().querySelector('img').onclick = instance.close
    }
  });
};

function getOricinalImgUrl(e) {
  return e.target.dataset.source;
};

function closeInstanceByEsc() {
  const isOpen = document.querySelector('.modal');
  
  if (isOpen) {
    window.addEventListener('keydown', onEscClick)
  } else {
    window.removeEventListener('keydown', onEscClick);
  }
};

function onEscClick(e, instance) {
  const isEsc = e.code === 'Escape';
  console.log(`before if `, e.code);
  if (isEsc) {
    console.log(`inside if `, e.code);
    return
  };

  instance.close();
}