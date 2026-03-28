import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=400',
    original:
      'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=1600',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400',
    original:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1600',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
    original:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
    original:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400',
    original:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400',
    original:
      'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600',
    description: 'Lighthouse Coast Sea',
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

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});