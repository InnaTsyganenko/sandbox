import React from 'react';

function NodeNpmBundlers() {

  return (
    <section className="conspect">
      <h1>Node.js, npm, webpack</h1>
      <h2>Node.js</h2>
      <p><a className="hl-8" href="https://dev.to/yougotwill/portable-nodejs-without-administrator-access-1elk" target="_blank" rel="noopener noreferrer">Portable NodeJS without administrator access</a></p>
      <p><a className="hl-9" href="https://medium.com/@arimgibson/supercharged-portable-vscode-with-git-and-node-js-34afad8f661b" target="_blank" rel="noopener noreferrer">Supercharged Portable VSCode (with Git and Node.js)</a></p>
      <p>Node.js это серверная платформа, что работает на движке Google Chrome – V8, который умеет компилировать JavaScript код в машинный код. В двух словах — Node.js это интерпретатор языка JavaScript. Сам по себе Node.js является C++ приложением, которое получает на входе JavaScript-код и выполняет его.</p>
      <p>Node.js использует событийно-ориентированную модель и неблокирующую ввод/вывод архитектуру, что делает его легковесным и эффективным. Это не фреймворк, и не библиотека, это среда выполнения JavaScript.</p>
      <p className="hl-10"><b>Non-blocking I/O</b></p>
      <ul>
        <li>Главный поток не будет блокироваться операциями ввода/вывода.</li>
        <li>Сервер будет продолжать обслуживать запросы.</li>
        <li>Нам придётся работать с <b>асинхронным</b> кодом.</li>
      </ul>
      <p>В наши дни платформа Node.js является одной из самых популярных платформ для построения эффективных и масштабируемых REST API&apos;s. Она так же подходит для построения гибридных мобильных приложений, десктопных программ и даже для IoT.</p>

      <h3>Цикл событий</h3>
      <p>Цикл событий — это магия, которая происходит внутри Node.js. Это буквально бесконечный цикл и на самом деле один поток. Libuv — C библиотека которая реализует этот паттерн и является частью ядра Node.js.</p>

      <h3>Node Version Manager - nvm</h3>
      <p>Это утилита, которая позволяет быстро менять версии Node.js.</p>
      <p><a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">Подключение и ипользование nvm.</a></p>

      <h2>Console (терминал)</h2>
      <p>Консоль (информатика) — интерфейс пользователя, окно для вывода системных сообщений и приёма команд; программное обеспечение для управления компьютером; программное обеспечение, реализующее текстовый интерфейс пользователя.</p>
      <h3>Команды</h3>
      <ul>
        <li>Справка по командам — help</li>
        <li>Очистить консоль — cls</li>
        <li>Информация о системе — systeminfo</li>
        <li>Информация о сетевых настройках — ipconfig</li>
        <li>Список запущенных процессов — tasklist</li>
        <li>Содержимое текущей папки — dir</li>
        <li>mkdir или md - создаёт папку.</li>
        <li>Удалить папку — rmdir или rd</li>
        <li>Удаление файла — del или erase</li>
        <li>Переименование файла — ren или rename</li>
        <li>pwd(printworkingdirectory) - полный путь до папки, в кот. мы находимся.</li>
        <li>cd - путешествие по папкам.</li>
        <li>Tab - дополняет назавание</li>
        <li>cd - - вернуться в предыдущую папку</li>
        <li>cd ~ - вернуться в домашнюю папку</li>
        <li>Домашняя папка обозначаетя ~, поэтому можно прямо так и написать - cd ~</li>
        <li>cd ../ - подняться на уровень выше. cd ../../ - подняться на 2 уровня выше</li>
        <li>ls - список, посмотреть в папке. ls -1 - посмотреть что в папке списком. </li>
        <li>ls -1 -a - в том числе скрытые</li>
        <li>start . - открыть текущую папку/файл в проводнике/программе по умолчанию. Точка - это текущая папка</li>
        <li>Показать дерево папок — tree</li>
      </ul>

      <h2>About npm</h2>
      <p><span className="hl-10">npm (node package manager)</span> -  это менеджер зависимостей, автоматически устанавливающийся вместе с Node.js. Он используется для скачивания пакетов из облачного сервера npm, либо для загрузки пакетов на эти сервера. Позволяет устанавливать пакеты как глобально, так и локально.</p>

      <h3>Файл package.json</h3>
      <p>Файл package.json содержит в себе информацию о вашем приложении: название, версия, зависимости и тому подобное. Любая директория, в которой есть этот файл, интерпретируется как Node.js-пакет, даже если вы не собираетесь публиковать его. Способ использования файла package.json зависит от того, собираетесь ли вы скачивать пакет или публиковать его.</p>
      <h4>Разница между тильдой(~) и крышкой(^) в package.json</h4>
      <p>Тильда(~) подбирает последнюю минорную версию пакета (последнюю цифру), например ~7.3.3 найдет последнюю 7.3.x, допустим 7.3.12 но не 7.4.0.</p>
      <p>Крышка(^) подбирает последнюю мажорную версию пакета (среднюю цифру), например ^7.3.3 найдет последнюю 7.x.x, допустим 7.4.0 но не 8.0.0.</p>

      <h3>JS: Настройка окружения - Зависимости для разработки</h3>
      <p>Чем отличается devdependencies от dependencies?</p>
      <p>У любого проекта есть как минимум два режима использования. Их обычно называют средами. Например, когда разработчик работает над проектом у себя на компьютере, то он запускает его в среде разработки <span className="hl-9">(development)</span>. Когда же проект попадает в то место, где им пользуются, то тогда среду называют продакшеном <span className="hl-9">(production)</span>.</p>
      <p>С одной стороны, эти среды всегда стараются делать похожими, чтобы избежать ошибок, связанных с особенностями конкретной среды, с другой, к ним, все же, предъявляются разные требования. Например, для разработки часто бывают нужны дополнительные пакеты, которые помогают самому процессу разработки, например, пакеты для автоматизированного тестирования кода. В продакшен среде эти пакеты ни к чему, но вот время и место на диске они занимают. А это мешает, так как для продакшен среды важно не тянуть за собой ненужных вещей. Это сильно влияет на скорость доставки кода на продакшен.</p>
      <p>Для решения этой задачи в проектах на JavaScript добавили возможность явно указывать зависимости, которые нужны только во время разработки. Делается это с помощью специального флага во время установки:</p>
      <pre>{`"devDependencies": {
  "jest": "^26.4.1"
}`}
      </pre>
      <p>С точки зрения использования, эти пакеты ничем не отличаются от пакетов устанавливаемых в dependencies. Разница только в том где их импортируют. Как правило для тестирования кода создается отдельная директория, внутри которой находится код тестов, которые запускаются только в среде разработки. Поэтому импорты этого кода не пересекаются с импортами кода самого проекта.</p>

      <h3>Флаг --production</h3>
      <p>Зависимости для разработки всегда устанавливаются при запуске npm install. Здесь разработчики исходили из того, что чаще всего эта команда вызывается во время разработки, поэтому самый короткий вариант был оставлен для среды разработки. Для продакшена нужно добавлять специальный флаг:</p>
      <pre>{`# Вот теперь зависимости из devDependencies устанавливаться не будут
$ npm install --production

# Продакшен режим можно задать и с помощью переменной окружения
$ NODE_ENV=production npm install`}
      </pre>
      <p>Когда же проект собирается для деплоя на сервер (например, через Github Actions), то флаг нужно применять с npm ci:</p>
      <pre>{'$ npm ci --production'}</pre>

      <h3>Скачивание пакетов</h3>
      <p>Если вы хотите скачать пакет вручную, вам необязательно использовать для этого package.json. Вы можете выполнить в терминале команду npm с названием нужного пакета в качестве аргумента команды, и пакет будет автоматически скачан в текущую директорию. Например:</p>
      <pre>{'$ npm install canvas-chart'}</pre>
      <p>Или прописать список пакетов(зависимостей) в package.json и выполнить команду <span className="hl-8">npm i</span></p>

      <h3>Публикация пакета</h3>
      <p>Чтобы опубликовать пакет, вам потребуется собрать все исходные коды и файл package.json в одной директории. В package.json должны быть указаны название, версия и зависимости пакета. Например:</p>
      <pre>{`{
  "name": "canvas-project",
  "version": "0.1.0",
  "devDependencies": {
    "canvas-chart": "~1.3.0"
  }
}`}
      </pre>
      <p>Посмотрев на этот код, мы можем сказать, что пакет «canvas-project» зависит от пакета «canvas-chart». Опубликовать пакет можно с помощью комадны <span className="hl-7">npm publish</span>.</p>

      <h2>Webpack</h2>
      <p><a href="https://doka.guide/tools/webpack/" target="_blank" rel="noopener noreferrer">Webpack: краткий обзор</a></p>
      <p>Вебпак — это сборщик модулей / бандлер. Он анализирует модули приложения, создает граф зависимостей, затем собирает модули в правильном порядке в один или более бандл (bundle), на который может ссылаться файл «index.html».</p>
      <p>Webpack используется в сложных проектах с высокими требованиями к конфигурируемости. Если проект небольшой, без особых требований, то лучше использовать Parcel.</p>
      <p>При необходимости можно заставить вебпак осуществить некоторые преобразования модулей перед их добавлением в бандл. Например, преобразование SASS/LESS в обычный CSS, или современного JavaScript в ES5 для старых браузеров.</p>
      <p>Source map(карта исходников). Формируется вебпаком из директории src обычно, на ней работает сайт. Чтобы запустить debugger нужно зайти в Source -&gt; облачко с названием нашего проекта -&gt; папка с точкой это наша директория с src. Физически этой директории не существует на сайте, сайт пользуется бандлом.</p>

      <h2>Установим webpack и webpack-cli (команды терминала) из npm</h2>
      <p>Версия пакета вводится после символа `@`. Например: </p>
      <pre>{`npm i &lt;package&gt;@&lt;version&gt; -E
npm i dayjs@1.9.5 -E // -E значит установить в dependencies
npm i eslint@7.13.0 -DE // -DE значит установить в devDependencies`}
      </pre>
      <p>Создадим файл настроек - webpack.config.js. Укажем точку входа (entry) и выходные данные (output):</p>
      <pre>{`const path = require('path');
module.exports = {  // Преобразования, которые необходимо выполнить
  entry: './src/main.js', // Точка входа приложения
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'), // Место, в которое следует
    // поместить сформированный бандл
  },
  devtool: 'source-map'
};`}
      </pre>

      <h3>Опишем скрипт build для сборки файлов в бандл</h3>
      <pre>{`package.json

"scripts": {
  "eslint": "eslint src/",
  "test": "npm run eslint",
  "build": "webpack --mode development"`}
      </pre>

      <h3>Добавим файл настроек webpack в игнор eslint - eslintignore</h3>
      <p>N.B. Теперь, если выполнить в терминале команду npm run build, в директории public/ должны появиться два файла: bundle.js и bundle.js.map</p>
      <p>N.B. На самом деле последний пункт не обязателен, потому что eslint в проекте не следит за файлами вне директории &quot;src&quot;, но, к сожалению, современные редакторы, вроде VS Code или WebStorm, оказывают медвежью услугу и проверяют все файлы в проекте, хотя их никто не просил. В том числе файл настроек webpack, где есть, например, require, который у нас под запретом</p>

      <h2>Настроим dev-сервер и добавим собранные файлы в игнор</h2>
      <h3>Установим пакет сервера webpack-dev-server - npm i webpack-dev-server</h3>
      <h3>Опишем скрипт start для запуска сервера локально</h3>
      <pre>{`package.json

"scripts": {
  "eslint": "eslint src/",
  "test": "npm run eslint",
  "build": "webpack --mode development",
  "start": "webpack-dev-server --open"`}
      </pre>

      <h3>Настроим сервер в файле настроек webpack</h3>
      <pre>{`const path = require('path');
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    watchContentBase: true,
  }
};`}
      </pre>

      <h3>Добавим собираемые файлы в Git-игнор</h3>
      <pre>{`gitignore

node_modules/

# Собранные файлы
public/bundle.js
public/bundle.js.map`}
      </pre>
      <p>N.B. Теперь, если выполнить в терминале команду npm run start, запустится локальный сервер для разработки. По умолчанию он будет доступен по адресу http://localhost:8080</p>
      <p>N.B. Хранить собранные файлы в репозитории нет никакого смысла, потому что здесь же хранятся исходные файлы, и в случае необходимости можно всегда выполнить <span className="hl-2">npm run build</span></p>
      <p><span className="hl-3"><i>npm start -watch</i></span> - запуск в режиме разработки.</p>
      <p><span className="hl-4"><i>Ctrl+c</i></span> - завершить выполнение пакетного файла (работу сервера).</p>
      <p><span className="hl-5"><i>npm run eject</i></span> - копирует все конфиги и транзитивные зависимости (Webpack, Babel, ESLint и т. д.) в ваш проект, чтобы вы могли их контролировать. Команды вроде npm start и npm run build не перестанут работать, но будут указывать на скопированные скрипты, чтобы их можно было модифицировать. create-react-app инкапсулирует все модули npm, которые он использует внутри, так что ваш package.json будет очень чистым и простым, и вам не придется беспокоиться об этом. Однако, если вы хотите начать делать более сложные вещи и устанавливать модули, которые могут взаимодействовать с модулями, используемыми create-react-app под капотом, эти новые модули должны знать, что доступно, а что нет, то есть вам нужно, чтобы create-react-app их не абстрагировал. Это, в сущности, и есть то, что делает react-scripts eject. Он перестанет скрывать то, что у него установлено под капотом, и вместо этого выбросит эти вещи в package.json вашего проекта, чтобы все видели.</p>
      <p className="hl-5">Примечание: это односторонняя операция. Как только вы выполните npm run eject, вы не можете вернуться!</p>

      <h2>Сборщик Parsel</h2>
      <p><a href="https://doka.guide/tools/bundlers/#kak-polzovatsya" target="_blank" rel="noopener noreferrer">Как пользоваться</a></p>
    </section>
  );
}
export default NodeNpmBundlers;
