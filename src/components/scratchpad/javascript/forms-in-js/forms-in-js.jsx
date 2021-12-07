import React from 'react';

function FormsInJS() {

  return (
    <section className="conspect">
      <h1>Работа с формами в JS</h1>
      <p><a href="https://htmlacademy.ru/blog/boost/frontend/form-validation-techniques" target="_blank" rel="noopener noreferrer">Техники валидации форм</a></p>
      <p><a href="https://ireade.github.io/form-validation-realtime/" target="_blank" rel="noopener noreferrer">Валидация формы в режиме реального времени, пример.</a></p>
      <h2>multiselect</h2>
      <p><a href="https://gomakethings.com/how-to-work-with-multiselect-elements-in-vanilla-js/" target="_blank" rel="noopener noreferrer">How to work with multiselect elements in vanilla JS</a></p>
      <p><a href="https://codepen.io/wearebold/pen/YOyvqY" target="_blank" rel="noopener noreferrer">Isotope - filtering with multiple selects - vanilla js</a></p>

      <h2>Методы</h2>
      <p>HTMLFormElement.reset() - восстанавливает стандартные значения всем элементам формы. Данный метод выполняет действие идентичное нажатию кнопки имеющей тип reset.</p>

      <h2>Валидация форм</h2>
      <h3>Вот несколько ошибок, которые не позволяют форме быть подтверждённой:</h3>
      <ul>
        <li>badInput (en-US),</li>
        <li>patternMismatch (en-US),</li>
        <li>rangeOverflow (en-US) or rangeUnderflow (en-US),</li>
        <li>stepMismatch (en-US),</li>
        <li>tooLong (en-US) or tooShort (en-US),</li>
        <li>typeMismatch (en-US),</li>
        <li>valueMissing, or a</li>
        <li>customError.</li>
      </ul>
    </section>
  );
}
export default FormsInJS;
