import React from 'react';

function BasicReact() {

  return (
    <section className="conspect">
      <h1>React</h1>
      <p>React - это библиотека, НЕ фреймворк. Её легче встроить в существующий проект(чем Angular, Vue...)</p>
      <p>React нужен для:</p>
      <ul>
        <li>Отрисовки компонентов(более простой чем отрисовка функциями)</li>
        <li>Упрощает управление интерфейсом</li>
        <li>Отлично подходит для проектов с динамическим контентом</li>
      </ul>
      <p>Возможности React:</p>
      <ul>
        <li><abbr data-title="синтаксис React, язык описания компонентов в React">JSX</abbr></li>
        <li>Компонентный подход</li>
        <li>Virtual DOM(паттерн для обновления интерфейса)</li>
        <li>В аббревиатуре MV*, React === View</li>
        <li>Применяется как на стороне клиента, так и на стороне сервера</li>
      </ul>
      <p><a href="https://habr.com/ru/post/461541/" target="_blank" rel="noopener noreferrer">Введение в React - Хабр</a></p>
      <p><a href="https://medium.com/@jmuse/%D0%BF%D0%B5%D1%80%D0%B5%D0%B4%D0%B0%D1%87%D0%B0-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85-%D0%BC%D0%B5%D0%B6%D0%B4%D1%83-%D0%BA%D0%BE%D0%BC%D0%BF%D0%BE%D0%BD%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-react-d86394da2b50" target="_blank" rel="noopener noreferrer">Передача данных между компонентами в React</a></p>
    </section>
  );
}
export default BasicReact;
