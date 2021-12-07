import React from 'react';

function WorldWideWeb() {

  return (
    <section className="conspect">
      <h1>The World Wide Web, API and other...</h1>
      <h2>The World Wide Web</h2>
      <p>WWW можно представить как огромную сеть связанных серверов, на которых и хранится каждая страница. Обычный ноутбук можно превратить в сервер, способный обслуживать целый сайт в сети, а локальные серверы разработчики используют для создания сайтов перед тем, как открыть их для широкого круга пользователей.</p>
      <p>При введении в адресную строку браузера www.facebook.com на удалённый сервер Facebook отправляется соответствующий запрос. Как только браузер получает ответ, то интерпретирует код и отображает страницу.</p>
      <p>Каждый раз, когда пользователь посещает какую-либо страницу в сети, он взаимодействует с API удалённого сервера. API — это составляющая часть сервера, которая получает запросы и отправляет ответы.</p>

      <h2>API как способ обслуживания клиентов</h2>
      <p>Многие компании предлагают API как готовый продукт. Например, Weather Underground продаёт доступ к своему API для получения метеорологических данных.</p>
      <p><b>Сценарий использования:</b>на сайте небольшой компании есть форма для записи клиентов на приём. Компания хочет встроить в него Google Календарь, чтобы дать клиентам возможность автоматически создавать событие и вносить детали о предстоящей встрече.</p>
      <p><b>Применение API:</b>цель — сервер сайта должен напрямую обращаться к серверу Google с запросом на создание события с указанными деталями, получать ответ Google, обрабатывать его, и передавать соответствующую информацию в браузер, например, сообщение с запросом на подтверждение пользователю.</p>
      <p>В качестве альтернативы браузер может сделать запрос к API сервера Google, минуя сервер компании.</p>

      <h3>Чем API Google Календаря отличается от API любого другого удалённого сервера в сети?</h3>
      <p>Технически, разница в формате запроса и ответа. Чтобы сгенерировать полную веб-страницу, браузер ожидает ответ на языке разметки HTML, в то время как API Google Календаря вернёт просто данные в формате вроде JSON.</p>
      <p>Если запрос к API делает сервер веб-сайта компании, то он и является клиентом (так же, как клиентом выступает браузер, когда пользователь открывает веб-сайт).</p>
      <p>Пользователь благодаря API получает возможность совершить действие, не покидая сайт компании.</p>
      <p>Большинство современных сайтов используют по крайней мере несколько сторонних API. Многие задачи уже имеют готовые решения, предлагаемые сторонними разработчиками, будь то библиотека или услуга. Зачастую проще и надёжнее прибегнуть именно к уже готовому решению.</p>
      <p>Многие разработчики разносят приложение на несколько серверов, которые взаимодействуют между собой при помощи API. Серверы, которые выполняют вспомогательную функцию по отношению к главному серверу приложения, называются <a href="https://microservices.io/patterns/microservices.html" target="_blank" rel="noopener noreferrer">микросервисами</a>. </p>
      <p><span className="hl-8">Таким образом, когда компания предлагает своим пользователям API, это просто означает, что она создала ряд специальных URL, которые в качестве ответа возвращают только данные.</span></p>
      <p>Такие запросы часто можно отправлять через браузер. Так как передача данных по протоколу HTTP происходит в текстовом виде, браузер всегда сможет отобразить ответ. Например, через браузер можно напрямую обратиться к API GitHub (https://api.github.com/users/petrgazarov), причём без маркера доступа, и получить вот такой ответ в формате JSON:</p>
      <pre>{`{
  "login": "petrgazarov",
  "id": 5581195,
  "node_id": "MDQ6VXNlcjU1ODExOTU=",
  "avatar_url": "https://avatars.githubusercontent.com/u/5581195?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/petrgazarov",
  "html_url": "https://github.com/petrgazarov",
  "followers_url": "https://api.github.com/users/petrgazarov/followers",
  "following_url": "https://api.github.com/users/petrgazarov/following{/other_user}",
  "gists_url": "https://api.github.com/users/petrgazarov/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/petrgazarov/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/petrgazarov/subscriptions",
  "organizations_url": "https://api.github.com/users/petrgazarov/orgs",
  "repos_url": "https://api.github.com/users/petrgazarov/repos",
  "events_url": "https://api.github.com/users/petrgazarov/events{/privacy}",
  "received_events_url": "https://api.github.com/users/petrgazarov/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Petr Gazarov",
  "company": null,
  "blog": "https://twitter.com/PetrGazarov",
  "location": "California",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 43,
  "public_gists": 1,
  "followers": 144,
  "following": 70,
  "created_at": "2013-10-01T00:33:23Z",
  "updated_at": "2021-09-14T15:47:50Z"
}`}
      </pre>
      <p>Браузер отлично отображает JSON-ответ, который вполне можно вставлять в код. Из такого текста достаточно просто извлечь данные, чтобы использовать их по своему усмотрению.</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </section>

  );
}
export default WorldWideWeb;
