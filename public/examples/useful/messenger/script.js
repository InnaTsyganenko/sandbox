/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.
*/
var messageTemplate = document.querySelector('#message-template').content;
var newItemForm = document.querySelector('.chat-form');
var newItemTitle = newItemForm.querySelector('.chat-form-input');
var newItemTemplate = messageTemplate.querySelector('.chat-message');
var chat = document.querySelector('.chat-content');

 var addCheckHandler = function (item) {
  var clearButton = item.querySelector('.chat-message-button');
  clearButton.addEventListener('click', function () {
    item.remove();
  });
};

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var messageText = newItemTitle.value;
  var message = newItemTemplate.cloneNode(true);
  var messageDescription = message.querySelector('p');
  messageDescription.textContent = messageText;
  addCheckHandler(message);

  chat.appendChild(message);
  newItemTitle.value = '';

  
 
});



