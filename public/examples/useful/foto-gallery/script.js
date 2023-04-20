var photos = [
  'img/preview-1.jpg',
  'img/preview-2.jpg',
  'img/preview-3.jpg',
  'img/preview-4.jpg',
  'img/preview-5.jpg'
];

var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
  thumbnail.addEventListener('click', function () {
    fullPhoto.src = photo;
  });
};

for (var i = 0; i < thumbnails.length; i++) {
  addThumbnailClickHandler(thumbnails[i], photos[i]);
}
