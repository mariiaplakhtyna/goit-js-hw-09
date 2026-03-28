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
    description: 'Aerial View of Seashore',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/16/19/17/plant-4278666_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/16/19/17/plant-4278666_1280.jpg',
    description: 'Green Leafed Plant',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/04/03/13/macro-4250571_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/04/03/13/macro-4250571_1280.jpg',
    description: 'Ladybug',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/14/14/11/raspberries-4273404_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/14/14/11/raspberries-4273404_1280.jpg',
    description: 'Raspberries',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/17/19/24/strawberry-4280604_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/17/19/24/strawberry-4280604_1280.jpg',
    description: 'Strawberry',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/09/06/55/peonies-4263107_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/09/06/55/peonies-4263107_1280.jpg',
    description: 'Peonies',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/08/11/18/green-4260795_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/08/11/18/green-4260795_1280.jpg',
    description: 'Green Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/06/09/10/10/animal-4264059_340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/06/09/10/10/animal-4264059_1280.jpg',
    description: 'Animal',
  },
];

const gallery = document.querySelector('.gallery');

const markup = images
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

gallery.innerHTML = markup;

document.querySelectorAll('.gallery-image').forEach(img => {
  img.addEventListener('error', () => {
    img.src = img.closest('.gallery-link').href;
  });
});

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});