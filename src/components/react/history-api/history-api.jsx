import React from 'react';

function HistoryAPI() {

  return (
    <section className="conspect">
      <h1>History API</h1>
      <p>To check out the features of this API it’s as simple as heading into the Developer Tools and typing <code> history</code> into the console.</p>
      <p><a href="https://habr.com/ru/post/123106/" target="_blank" rel="noopener noreferrer">веб файловый менеджер, который позволит вам найти URI выбранного изображения</a></p>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/API/History_API"  target="_blank" rel="noopener noreferrer">MDN. History API</a></p>
      <p>The HTML5 History API gives developers the ability to modify a website’s URL without a full page refresh.</p>
      <p>Here’s an example. Let’s say a person navigates from the homepage of a site to the Help page. We’re loading the content of that Help page with Ajax. That user then heads off to the Products page which we again load and swap out content with Ajax. Then they want to share the URL (Uniform Resource Locator). With the History API, we could have been changing the URL of the page right along with the user as they navigate, so the URL they see (and thus share or save) is relevant and correct.</p>
      <ul>
        <li>window.history.back()</li>
        <li>window.history.forward()</li>
        <li>window.history.go(2), где 2 — количество шагов</li>
        <li>window.history.pushState(state, title, url), где state — состояние, title — заголовок, url — адрес</li>
      </ul>
      <p>Каждый элемент истории состоит из URL и/или объекта состояния (state object, может иметь заголовок (title), Document object, данные форм, позиция скролла и другую информацию, связанную со страницей.</p>
      <p>Основные методы объекта History:</p>
      <ul>
        <li>window.history.length: Количество записей в текущей сессии истории</li>
        <li>window.history.state: Возвращает текущий объект истории</li>
        <li>window.history.go(n): Метод, позволяющий гулять по истории. В качестве аргумента передается смещение, относительно текущей позиции. Если передан 0, то будет обновлена текущая страница. Если индекс выходит за пределы истории, то ничего не произойдет.</li>
        <li>window.history.back(): Метод, идентичный вызову go(-1)</li>
        <li>window.history.forward(): Метод, идентичный вызову go(1)</li>
        <li>window.history.pushState(data, title [, url]): Добавляет элемент истории.
          <code>history.pushState(&lcub;foo: &apos;bar&apos;&rcub;, &apos;Title&apos;, &apos;/baz.html&apos;)</code>
        </li>
        <li>window.history.replaceState(data, title [, url]): Обновляет текущий элемент истории
          <code>history.replaceState(&lcub;foo: &apos;bat&apos;&rcub;, &apos;New Title&apos;)</code>
        </li>
      </ul>
      <p>Посмотрим, как работают методы <span className="hl-10">pushState</span> и <span className="hl-10">replaceState</span>. Напишите в консоли:</p>
      <code>history.replaceState(null, null, &apos;hello&apos;);</code>
      <p>метод replaceState отключает URL-адрес в адресной строке с помощью «/ hello», несмотря на то, что ресурсы не запрашиваются, а окно остается на той же странице. Но здесь есть проблема. Нажав кнопку «Назад», мы обнаружим, что не вернемся к URL-адресу этой статьи, а вернемся к той странице, на которой находились раньше. Это связано с тем, что replaceState не управляет историей браузера, а просто <span className="hl-8">заменяет текущий URL-адрес в адресной строке</span>.</p>
      <p>Чинится это с помощью метода pushState:</p>
      <code>history.pushState(null, null, &apos;hello&apos;);</code>
      <p>Теперь кнопка &quot;Назад&quot; работает, как мы того хотели. pushState изменил нашу историю, чтобы включить в нее любой URL, который мы только что передали в нее.</p>
      <p>А что будет если мы сделаем pushState на другую страницу в интернете?</p>
      <code>history.pushState(null, null, &apos;https://twitter.com/hello&apos;);</code>
      <p>Это выбросит исключение, потому что URL-адрес должен бфть таким же, что и текущий, в противном случае мы можем потерять безопасность и дать разработчикам возможность обмануть людей, заставив их поверить, что они  находятся на другом веб-сайте.</p>
      <p>Вернёмся к тем другим параметрам, которые передаются в этот метод, мы можем резюмировать их следующим образом:</p>
      <code>history.pushState([data], [title], [url]);</code>
      <ol>
        <li>[data] - это данные, которые нам понадобятся, если состояние веб-страницы меняется, например, когда кто-то нажимает кнопку «назад» или «вперед» в своем браузере. Обратите внимание, что в Firefox эти данные ограничены 640 КБ символов.</li>
        <li>[title] - второй параметр, который может быть строкой, но на момент написания каждый браузер просто игнорирует его.</li>
        <li>[url] - это URL-адрес, который мы хотим отображать в адресной строке</li>
      </ol>

      <p>Самое важное history API - то, что они не перезагружают страницу. Раньше единственным способом изменить URL-адрес было изменить window.location, который всегда перезагружал страницу. За исключением случаев, когда все, что вы изменили, - это хеш (например, нажатие на &lt;a href=&quot;#target&quot;&gt; ссылку &lt;/a&gt; не перезагружает страницу).</p>
      <p><a href="https://css-tricks.com/using-the-html5-history-api/hello#an-example-using-pushstate-and-ajax" target="_blank" rel="noopener noreferrer">An example using pushState and Ajax</a></p>
    </section>
  );
}
export default HistoryAPI;
