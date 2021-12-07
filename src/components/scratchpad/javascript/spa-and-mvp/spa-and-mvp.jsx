import React from 'react';

function SPAAndMVP() {

  return (
    <section className="conspect">
      <h1>Single-Page Application (SPA)</h1>
      <h2>Когда применять SPA</h2>
      <p>Одностраничное приложение (SPA) — это веб-приложение, которое использует один HTML-документ. Страницы формируются динамически, прямо на клиенте.</p>
      <p>Абстрактное мышление - мышление при помощи обобщенных терминов</p>
      <p>SPA —для приложений. Если вам требуется сделать веб-приложение (именно приложение), тогда SPA отличный выбор.</p>

      <h2>SPA — забота фронтендера</h2>
      <p>Бизнес-логика, взаимодействие внутри приложения, инфраструктура… об этом всём в SPA думает фронтендер</p>
      <img src="img/spa-1.png" width="600" height="400" alt="" />
      <img src="img/spa-2.png" width="600" height="400" alt="" />
      <img src="img/spa-3.png" width="600" height="400" alt="" />
      <img src="img/spa-4.png" width="600" height="400" alt="" />

      <h2>MVP (Model-View-Presenter)</h2>
      <p>Модель. Представление. Презентер. Архитектурный паттерн проектирования. Хорошо подходит для проектирования UI</p>
      <p>Архитектура - совокупность важнейших решений об организации программы</p>
      <p>Model (Модель). Данные для отображения, бизнес-логика. Например, код для обработки данных или текст в карточках</p>
      <p>View (Представление). Непосредственное отображение данных (компоненты, шаблоны или модули блоков проекта - markup). Например, функции(getElement) для получения и обработки template или карточки для текста.</p>
      <p>Presenter (Презентер). «Дирижёр», посредник между View и Model. </p>
      <p>Зачем отделять данные от шаблона - данные абстрактны и подходят под разные способы отображения: информация не изменится, если её показывать по-разному. Например, чтобы отображать новости и в виде списка и в виде плитки - не надо верстать 2 отдельных шаблона, можно переключать шаблоны, а данные будут подстраиваться.</p>
      <p>Интерполяция - прокидывание переменных в шаблоны <code>(&dollar;&lcub;description.join(&apos; &apos;)&rcub;)</code></p>
      <ul>
        <li>view - это шаблоны и логика шаблона</li>
        <li>mock - функции по генерации данных в шаблонах</li>
        <li>main - логика отрисовки и сама отрисовка</li>
      </ul>

      <h3>Моки</h3>
      <p>Моки необходимы на этапе разработке и тестирования приложения - это просто данные. Моки это не Model. <span className="hl-5">Основная задача моков: подготовить View к работе с данными</span></p>

      <h2>Circular Dependency Plugin</h2>
      <p>Плагин для webpack, позволяющий обнаружить циклические зависимости.</p>
      <img src="img/mvp.png" width="600" height="400" alt="" />
      <img src="img/mvp-2.png" width="600" height="400" alt="" />

      <h4>Проектирование структуры, 2 принципа от общего к частному или от частного к общему</h4>
      <p>выделить отдельные сущности</p>
      <p>выявить свойства и методы сущностей и подобрать оптимальную структурудля каждой из них</p>
      <p>определиться, как сущности связаны между собой</p>
      <img src="img/str-1.png" width="600" height="400" alt="" />

      Разработка по шаблонам:
      <ul>
        <li>Разбиваем на компоненты: меню, фильтры, список объектов, форма редактирования, форма создания и т.д.</li>
        <li>Компоненты превращаем в шаблоны</li>
        <li>Изымем из шаблонов данные</li>
        <li>Эти данные переварим в моки</li>
        <li>Настроим в приложении связь, чтобы на основе данных рисовались шаблоны и в итоге компоненты ожили</li>
      </ul>

      <h2>Взаимодействие между структурами</h2>
      <p>Структур может быть несколько</p>
      <p>Некоторые из них могут быть связаны, например по ключу</p>
      <img src="img/str-2.png" width={600} height={270} alt="" />
      <img src="img/str-3.png" width={600} height={400} alt="" />
      <img src="img/str-4.png" width={800} height={400} alt="" />


      <h3>Паттерн «Адаптер»</h3>
      <p>Адаптер — структурный паттерн проектирования. Позволяет объектам с несовместимыми интерфейсами работать вместе.</p>
      <p>Пример из жизни. Переходники для мониторов.</p>
    </section>
  );
}
export default SPAAndMVP;
