import React from 'react';

function Favicon() {

  return (
    <section className="conspect">
      <h1>Иконка сайта</h1>
      <p><a href="https://realfavicongenerator.net/" target="_blank" rel="noopener noreferrer">Favicon Generator. For real.</a></p>
      <p>Фавиконка — это favorite icon, то есть иконка для избранного.</p>
      <p>Спецификация <a href="https://www.w3.org/TR/appmanifest/" target="_blank" rel="noopener noreferrer">Web App Manifest</a> описывает простой JSON-файл, в котором можно указать не только все иконки, их размеры и форматы, но и полностью описать ваш сайт или приложение. Фирменный цвет, цвет фона, язык и направление письма, полное и краткое название, ориентация, режим запуска и другое. Вы подключаете его с помощью <code>&lt;link rel=&quot;manifest&quot;&gt;</code> на каждую страницу и браузер сразу всё знает. Хороший инспектор манифеста есть во вкладке Application отладчика Chrome.</p>
      <pre>{`{
  "name": "My App",
  "icons": [{
    "src": "64.png",
    "sizes": "64x64"
  }, {
    "src": "128.png",
    "sizes": "128x128"
  }],
  "display": "fullscreen",
  "orientation": "landscape",
  "theme_color": "green",
  "background_color": "cornflowerblue"
}`}
      </pre>
      <p>Как правильно подключать <i>favicon</i>:</p>
      <p>Для начала, забудьте про ICO, если только вам не нужен IE10. Подключите линком PNG-иконки: простую на 16 и 32 для ретины, чтобы было красиво в браузерной строке и закладках. Дальше подключите линком из корня сайта apple-touch-icon.png размером 180 × 180. Потом подключите веб-манифест, в котором указана иконка на 192 для Андроида. Ну и можно там же упомянуть 16, 32, вектор, цвета и название.</p>
    </section>
  );
}

export default Favicon;
