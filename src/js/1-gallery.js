import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const images = [
  {
    preview:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=300',
    original:
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1200&q=80',
    description: 'Mountain',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=300',
    original:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1200&q=80',
    description: 'Lake',
  },
  {
    preview:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=300',
    original:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80',
    description: 'River',
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