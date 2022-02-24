import React from 'react';

function HowToPushTheFooterDown() {

  return (
    <section className="conspect">
      <h2>Как изменить цвет выделения текста на сайте с помощью CSS</h2>
      <p>Для использования ::selection достаточно воспользоваться следующей конструкцией:</p>
      <pre>{`p::selection {
   color: #fff;
   background-color: #000;
}`}
      </pre>
      <p>Псевдоэлемент ::selection поддерживает только свойства color, background и text-shadow.</p>
      <pre>{`p::selection {
   color: #fff;
   background-color: #000;
   text-shadow: #eee;
}`}
      </pre>

      <h3>Настройка собственных эффектов выделения</h3>
      <h4>Половинное выделение:</h4>
      <p className="selection-1" data-title="This is some text.">This is some text.</p>
      <h4>Выделение с длинными тенями:</h4>
      <p className="selection-2">This is also some kind of text</p>
      <h4>Эффект контурного текста:</h4>
      <p className="selection-3">This is some other text</p>
      <h4>Эффект размытия:</h4>
      <p className="selection-4">And this is also text</p>
    </section>

  );
}
export default HowToPushTheFooterDown;
