import React from 'react';

function Memo() {

  return (
    <section className="conspect">
      <h1>Мемоизация</h1>
      <p><span className="hl-1">Мемоизация</span> -  (запоминание, от англ. memoization) — в программировании сохранение результатов выполнения функций для предотвращения повторных вычислений</p>
      <p>Но нам нужно сделать так, чтобы повторный вызов функции с тем же аргументом не вызывал функцию повторно, а сразу возвращал результат.</p>
      <p>Что должно быть в memo для корректной работы? Некое хранилище результатов. Используем для этого Map и замыкания.</p>
      <p>Далее нужно реализовать следующую логику:</p>
      <ul>
        <li>Если оригинальная функция уже вызывалась, вернуть сохранённый результат.</li>
        <li>Если не вызывалась, то вызвать, сохранить результат и вернуть его.</li>
      </ul>
      <p>Обратите внимание, вызываем мы memorizedIncrement дважды, результат получаем дважды, а индикация о вызове оригинальной функции increment — одна. Мемоизация в деле!</p>
      <p>И неважно, сколько раз будет вызвана мемоизованная функция, оригинальная — только один раз.</p>
      <p></p>
    </section>
  );
}
export default Memo;
