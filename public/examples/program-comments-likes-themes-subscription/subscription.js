const message = document.querySelector('.subscription-message');
const form = document.querySelector('.subscription');
const email = document.querySelector('.subscription-email');

form.onsubmit = function(evt) {
  evt.preventDefault();
  message.textContent = `Адрес ${email.value} добавлен в список получателей рассылки.`;
};
