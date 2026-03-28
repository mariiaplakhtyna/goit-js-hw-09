import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/23/57/coffee-4204217_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/23/57/coffee-4204217_1280.jpg',
    description: 'Aerial Shot of Green Grass Field',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/15/00/26/hut-4204459_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/00/26/hut-4204459_1280.jpg',
    description: 'Wooden Hut in Green Meadow',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/23/17/fruits-4203814_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/23/17/fruits-4203814_1280.jpg',
    description: 'Assorted Fruits on White Ceramic Plate',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/23/17/fruits-4203815_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/23/17/fruits-4203815_1280.jpg',
    description: 'Frozen Treats on White Ceramic Bowl',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/15/00/26/green-4204458_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/00/26/green-4204458_1280.jpg',
    description: 'Green Leafed Plant',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/15/00/27/lighthouse-4204460_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/00/27/lighthouse-4204460_1280.jpg',
    description: 'Lighthouse During Golden Hour',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/15/00/28/pier-4204461_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/15/00/28/pier-4204461_1280.jpg',
    description: 'Aerial View of Seashore',
  },
];

const gallery = document.querySelector('.gallery');

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});