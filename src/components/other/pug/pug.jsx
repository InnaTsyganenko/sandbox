import React from 'react';

function Pug() {

  return (
    <section className="conspect">
      <h1>Pug</h1>
      <h2>Создание проекта на Pug:</h2>
      <ul>
        <li>Настраиваем окружение - node.js, npm.</li>
        <li>Устанавливаем pug - npm install pug.</li>
        <li>
          <p>Устанавливаем глобально pugовский интерфейс командной строки (CLI - command line interface) - npm install pug-cli -g.</p>
          <p>Справку можно посмотреть командой - pug --help.</p>
        </li>
        <li>Создаём папку src, внутри создаём файл index.pug.</li>
        <li>Структуру-заготовку документа можно скопировать с <a href="https://github.com/pugjs/pug" target="_blank" rel="noopener noreferrer">github pug</a></li>
        <li>Команда для конвертирования .pug файлов в .html - pug index.pug. Команду выполнять из той же дирктории. Чтобы получить НЕ минифицированный вариант - pug index.pug -P</li>
        <li></li>
      </ul>
      <p>Можно запустить Live Server - кнопкой "Go Live" (внизу справа). Чтобы видеть сразу все изменения в .html - pug ./ -P -w (в корневой директории)</p>
      <p>При работе без сборщика gulp для конвертации scss файлов в css можно установить Watch SCSS. Сразу делает style.css и source-map.</p>
      <p>Для облегчения написания кода на pug лучше установить расширение Pug в VSCode.</p>
      <p>Расширение Path Intellisense - для автоподстановки путей.</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </section>
  );
}
export default Gulp;
