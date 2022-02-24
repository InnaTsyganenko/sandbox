import React from 'react';

function HowToHide() {

  return (
    <section className="conspect">
      <h1>Как прятать</h1>
      <h2>display: none</h2>
      <p>элемент как будто вырубают из HTML. Его не видно на странице и соседние блоки про него ничего не знают, скринридеры игнорируют и не читают содержимое.</p>
      <p>Что интересно, несмотря на полное вырубание элемента, браузеры всё равно загружают картинку из img с display: none. Если же картинка указана фоном, то Chrome и Edge её тоже загружают, а Firefox и Safari — нет.</p>

      <h2>visibility: hidden</h2>
      <p>работает как кольцо всевластья: элемент вроде здесь и соседние блоки его чувствуют, но его не видно. И чем это отличается от opacity: 0? Opacity просто делает элемент прозрачным (или полупрозрачным), а visibility: hidden ещё не даёт с ним взаимодействовать: навести, кликнуть, сфокусировать.</p>
      <pre>{`/* Прячет */

.one-ring {
  visibility: hidden;
}

/* Не сработает */

.one-ring:hover {
  visibility: visible;
}`}
      </pre>
      <p>У visibility: hidden есть другая приятная особенность: свойство наследуется, а значит ребёнок невидимого родителя может сменить видимость на visible. Такой трюк не пройдёт ни с display: none, ни с opacity: 0. С ним удобно делать всплывающие меню и подказки.</p>

      <h2>паттерн «visually hidden»</h2>
      <pre>{`.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(100%);
          clip-path: inset(100%);
}`}
      </pre>
      <p className="hl-6">А вы знали, что любому элементу можно добавить атрибут hidden и он пропадёт? Теперь знаете! В современных браузерах на этот атрибут повешен тот самый display: none, который вырубает элемент. Он бинарный как required или checked, так что его удобно выставлять через JavaScript. Только не забудьте добавить в стили <code>[hidden]</code> &lbrace; display: none &rbrace; display: none &rbrace; для IE 10, Safari 5 и других старых браузеров.</p>
      <pre>{`<div hidden>
  Вырублен
</div>

// JS
div.hidden = true;`}
      </pre>
    </section>

  );
}
export default HowToHide;
