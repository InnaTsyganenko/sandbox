import React from 'react';

function ReactRouter() {

  return (
    <section className="conspect">
      <h1>React Router</h1>
      <p>React Router v4 был разбит на 3 пакета:</p>
      <ul>
        <li>react-router</li>
        <li>router-dom</li>
        <li>react-router-native</li>
      </ul>

      <h2>Маршрутизация</h2>
      <img src="img/databinding.png" width="500" height="200" alt="databinding" />
      <h3>Состояние приложения</h3>
      <p>Состояние устойчиво… до тех пор, пока над объектом не будет произведено действие. После этого состояние может измениться</p>

      <h2>Адресная строка</h2>
      <ul>
        <li>может сохранить текущее состояние</li>
        <li>помогает воспроизвести иное состояние</li>
        <li>дополнительный инструмент взаимодействия</li>
      </ul>

      <h3>Location API</h3>
      <p>Адресная строка со стороны JavaScript (URL)</p>
      <a href="https://developer.mozilla.org/ru/docs/Web/API/Location" target="_blank" rel="noopener noreferrer">MDN. Location API</a>
      <img src="img/location-api.png" width="550" height="350" alt="location-api" />
      <p>You can use the <span className="hl-9">window.location.href</span> property to get the entire URL of the current page.</p>
      <p>Similarly, you can use other properties of the location object such as protocol, hostname, port, pathname, search, etc. to obtain different part of the URL.</p>
      <p>You can use the assign() method of the location object i.e. window.location.assign() to load another resource from a URL provided as parameter, for example:</p>
      <pre>{`<script>
function loadHomePage() {
  window.location.assign("https://www.tutorialrepublic.com");
}
</script>

<button type="button" onclick="loadHomePage();">Load Home Page</button>

You can also use the replace() method to load new document.
The difference is that it doesn't create an entry in the browser's history,
meaning the user won't be able to use the back button to navigate to it.
Here's an example:

<script>
function loadHomePage() {
  window.location.replace("https://www.tutorialrepublic.com");
}
</script>

<button type="button" onclick="loadHomePage();">Load Home Page</button>

Alternatively, you can use the window.location.href
property to load new document in the window.
It produce the same effect as using assign() method:

window.location.href = "https://www.tutorialrepublic.com";`}
      </pre>

      <h4>Reloading the Page Dynamically</h4>
      <p>The reload() method can be used to reload the current page dynamically.</p>
      <p>You can optionally specify a Boolean parameter true or false. If the parameter is true, the method will force the browser to reload the page from the server. If it is false or not specified, the browser may reload the page from its cache.</p>

      <h3>History API</h3>
      <p>Позволяет эмулировать перемещение по страницам приложения - <a href="history-api.html" target="_blank" rel="noopener noreferrer"> подробнее</a>.</p>

      <h2>React Router - это отдельный пакет(как ReactDOM)</h2>
      <h3>Взаимодействие через адресную строку</h3>
      <ul>
        <li>Изменение состояния компонент вызывает изменения адреса</li>
        <li>Компоненты, в свою очередь, реагируют на изменение адреса</li>
        <li>Связующим звеном выступает React Router</li>
      </ul>
      <p>Главный компонент - app.jsx. Работать с маршрутизацией мы будем именно в этом компоненте.</p>
      <p>Подключаем 3 компонента - BrowserRouter, Route, Switch. Вот такой структурой они выглядят:</p>
      <pre>{`export default () => {
return (
<BrowserRouter>
  <Switch>
    <Route path="/">
      <Main />
    </Route>
    <Route path="/about">
      <About />
    </Route>
  </Switch>
</BrowserRouter>
);
};`}
      </pre>
      <p>Switch - главный переключатель, маршрутизатор, в нём находятся все маршруты - Route. В path указывается маршрут к компоненту</p>
      <p>В Route содержится компонент, который необходимо отрисовать</p>

      <h2>React DevTools</h2>
      <ul>
        <li></li>
      </ul>

      <pre>{`
        <Route path="/about" exact>
          <About />
        </Route>
      `}
      </pre>
      <p>В примере выше, мы не можем передавать компоненту какие-либо пропсы. Но это не всегда и нужно.</p>
      <p>У компонента Route есть метод exact, который позволяет задать точное сравнение для адреса маршрута - / или /about.

      </p>
      <p>Маршрут без path and exact можно использовать для вывода &lt;h1&gt;Page not found&lt;/h1&gt;</p>
      <p>React.Fragment - сокращенная запись - Fragment.</p>
      <p>Компонент можно указывать прямо в Route:</p>
      <pre>{`
          export default () => {
              return (
                <BrowserRouter>
                  <Switch>
                    {/* 1 */}
                    <Route path="/" exact>
                      <Main />
                    </Route>
                    {/* 2 */}       // это комментарий в jsx
                    <Route path="/about" exact component={About} />
                  </Switch>
                </BrowserRouter>
              );
            };
      `}
      </pre>
      <p>При таком способе в компонент передаются пропсы и в этих пропах мы сможем получить доступ к обёртке над объектом hystory и над объектом location. Получить с них данные и как-то их использовать. Но не можем передать какие-то пропы другому компоненту. Ещё при таком способе минус производительности - компонент будет создаваться каждый раз заново и заново проходить весь свой жизненный цикл.</p>

      <p>Другой способ задать компонент при помощи паттерна - React.Pattern, например паттерн render prop, который принимает функцию, которая возвращает компонент.</p>
      <p>Плюсы этого способа: мы можем добиться большей гибкости, написать компонент с разметкой, передавать какие-то пропы другому компоненту. То есть мы получаем доступ к конфигурации, мы можем воспользоваться композицией и обернуть компонент About в другие компоненты. При таком способе плюс производительности - компонент юудет перерендериваться, он не будет создаваться каждый раз заново.</p>
      <pre>{`
export default () => {
return (
  <BrowserRouter>
<Switch>
  <Route path="/" exact>
    <Main />
  </Route>
  <Route path="/about/:year:name" exact component={About} />
  // таким способом мы можем передавать изменяемые параметры
  // прямо в url (а путь с параметрами это <span class="hl-9">динамичный путь</span>span>)
  // в консоли они будут доступны в свойстве params
  // year - первый параметр, name - второй параметр
  // опциональный параметр (с вопросом) должен быть последним из всех параметров
  <Route
    render={props => (
      // console.log('404 props', props);
      <Fragment>
        <h1>
          404.
          <br />
          <small>Page not found</small>
        </h1>
        <Link to="/">Go to main page</Link>
      </Fragment>
    )}
  />
</Switch>
</BrowserRouter>
);
};
      `}
      </pre>
      <h3>Как делить компоненты в приложении: сначала на большие(экраны), потом выносим повторяющийся код в отдельные компоненты</h3>
      <p>Для компонента-ссылки нужно использовать специальный компонент React - компонент Link. Предназначен для перемещения только внутри приложения.</p>
      <pre>{`
        function Logo() {
          return (
            <Link className="game__back" to="/">
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
            </Link>
          );
        }`}
      </pre>

      <h3>опциональные параметры</h3>
      <code>&lt;Route path=&apos;/about/:year?&apos;&gt;</code>
      <p>Просто пишем знак вопроса, и если параметр не пердаётся, отобразится просто страница About</p>
      <p>Компонент с параметрами нужно указывать после компонента без параметров</p>
      <p>С &quot;/about&quot; мы разобрались, но что делать, если у нас может быть страница второго уровня с постоянным адресом? Например, &quot;/about/secret&quot;. Да, ситуация крайне редкая. Сейчас &quot;secret&quot; в адресной строке React Router считает параметром &quot;:year&quot;, а не частью целого адреса &quot;/about/secret&quot;. Решим эту проблему в app-8.jsx...</p>
      <p>Решается она похожим образом с 404 страницей - перестановкой Route местами, чтобы пути располагались от более конкретного к менее.</p>
      <p>Да, помнить о порядке, пример не лучшего UX. Но мы с вами пишем на  JavaScript, который также выполняется сверху-вниз по порядку</p>
    </section>
  );
}
export default ReactRouter;
