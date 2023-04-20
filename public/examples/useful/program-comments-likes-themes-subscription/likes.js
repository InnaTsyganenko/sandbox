const heart = document.querySelector('.heart');
const likesNumber = document.querySelector('.likes-number');

heart.onclick = function () {
  if (heart.classList.contains('added')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  heart.classList.toggle('added');
};
