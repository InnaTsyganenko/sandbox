const popup = document.querySelector('.modal');
const openPopupButton = document.querySelector('.button-open'); 
const closePopupButton = popup.querySelector('.button-close');

openPopupButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal--show');
});

closePopupButton.addEventListener('click', function () {
  popup.classList.remove('modal--show');
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove('modal--show');
  }
});

/* 
Запрограммируй всплывающее окно(попап) с контактами компании. Тебе нужен элемент с классом modal.

находим попап
находим кнопку, при клике на которую попап будет открываться
находим кнопку закрытия попапа
добавляем обработчик события на кнопку открытия
отменяем действие по умолчанию - переход по ссылке
добавляем класс показа окна
на кнопку закрытия добавляем обработчик события удаляющий класс закрытия попапа
на кнопку ESC добавим обработчик события удаляющий класс закрытия попапа
 */
