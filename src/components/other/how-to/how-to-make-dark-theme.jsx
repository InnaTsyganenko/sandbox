import React from 'react';

function HowToMakeDarkTheme() {

  return (
    <section className="conspect">
      <h1>Как сделать переключение тем на сайте</h1>
      <h2>Вариант &quot;как раньше&quot;</h2>
      <p><a href="examples/dark-theme/index.html" target="_blank" rel="noopener noreferrer">Пример на чистом JS</a></p>
      <p>Пишем кнопку в html, пишем две портянки кода на CSS(отдельно для светлой и для тёмной тем), пишем код на JS для переключения тем, типа такого:</p>
      <pre>{`HTML:
<button className="theme-button" type="button"
onClickCapture={handleChangeThemeButtonClick}>Изменить тему</button>

CSS:
.light-theme {...}
.dark-theme {...}

JS:
const handleChangeThemeButtonClick = () => {
  const page = document.querySelector('.page');
  const themeButton = document.querySelector('.theme-button');
  themeButton.onclick = function () {
    page.classList.toggle('dark-theme');
    page.classList.toggle('light-theme');
  };
};`}
      </pre>

      <h2>Вариант с React</h2>
      <p>Будем инвертировать цвета с помощью CSS-свойства filter. Оно обычно ассоциируется с изображениями, хотя на самом деле применимо к любому элементу, в то числе <code>&lt;html&gt;</code>.</p>
      <p>C filter одна проблема: он инвертирует только явно указанные цвета. Поэтому, если элемент не имеет фонового цвета, то цвет текста изменится, а вот фон останется прежним (белым). Это легко исправить, указав background-color.</p>
      <p>Однако проблема может повториться с дочерними элементами, также не имеющими фона. В этом случае на помощь приходит значение inherit. На первый взгляд, это неаккуратное решение, но причин для беспокойства нет: селектор * имеет очень низкую специфичность, а значит свойство сработает только для элементов без background-color.</p>

      <p className="hl-8">Преимущества переключателя как компонента React - максимальная переиспользуемость. Компонент подойдет любому из ваших проектов на React.</p>
      <p>Кроме того, мы будем придерживаться принципа прогрессивного улучшения и проследим, чтобы компонент применялся только для браузеров с поддержкой filter: invert(100%).</p>
      <p>Создаём компонент, пишем логику переключения в нём, подключаем к приложению (сайту). Например в компонент <code>&lt;Header /&gt;</code></p>
      <pre>{`import React, {useState} from 'react';

function ThemeSwitch() {

  const [state, setState] = useState({
    activeItem: {
      active: 'false',
    },
  });

  const isActive = () => state.active === 'true';
  const toggle = () => {
    setState({
      active: isActive() ? 'false' : 'true',
    });
  };

  // JSX не позволяет вставить CSS напрямую
  // Поэтому сохраним его в переменную и будем использовать динамически

  const css = 'html {
    filter: invert(100%);
    background: #fefefe; }
      * { background-color: inherit }
    img:not([src*=".svg"]),           // исключаем растровые картинки,
                                      // оставляя svg в инверсии
    video { filter: invert(100%)
    }';

    // К сожалению, применение стилей простым изменением media="none" на media="screen" работает не во всех браузерах
    // Чтобы страница была перерисована, необходимо изменить содержимое тега <style>
    // Простейшее из найденных для этого решений — метод trim()
    // Забавно, что, кажется, только Chrome нуждается во всех этих манипуляциях

  return (
    <div>
      <button aria-pressed={isActive() ? 'true' : 'false'} onClick={toggle}>
        тёмная тема:
        <span aria-hidden="true">{isActive() ? 'вкл' : 'выкл'}</span>
      </button>
      <style media={isActive() ? 'screen' : 'none'}>
        {isActive() ? css.trim() : css}
      </style>
    </div>
  );
}

export default ThemeSwitch;
`}
      </pre>
      <p>Сохранять настройки текущей темы можно либо с помощью API localStorage, либо с Redux.</p>
      <p>Здесь я застопорилась, надо изучить это позже. Далее не переваренный контент.</p>

      <h3>Прячем от браузеров без поддержки</h3>
      <p>Определим поддержку с помощью функции invertSupported и сохраним результат в состояние supported.</p>
      <pre>{`invertSupported (property, value) {
  var prop = property + ':',
      el = document.createElement('test'),
      mStyle = el.style;
  el.style.cssText = prop + value;
  return mStyle[property];
}
componentDidMount() {
  if (this.store) {
    this.setState({
      supported: this.invertSupported('filter', 'invert(100%)'),
      active: this.store.getItem('ThemeSwitch') || 'false'
    });
  }
}`}
      </pre>
      <p>В JSX состояние supported поможет принять решение о скрытии компонента. Само скрытие реализуем свойством hidden.</p>
      <pre>{`<div hidden={!this.state.supported}>
  <!-- Здесь содержимое компонента -->
</div>`}
      </pre>
      <p>В современных браузерах hidden скроет компонент и сделает его недоступным для фокуса при навигации с клавиатуры, в том числе во вспомогательных программах, вроде скринридеров. Что касается старых браузеров, для них добавьте такой код:</p>
      <pre>{`[hidden] {
  display: none;
}`}
      </pre>
      <p>Другой вариант — не рендерить содержимое компонента вовсе. Для этого потребуется несколько экстравагантный тернарный оператор внутри JSX:</p>
      <pre>{`return (
  <div>
    {
      (this.state.supported)
      ? <div>
          <button aria-pressed={this.isActive() ? 'true' : 'false'} onClick={this.toggle}>
            dark theme:
            <span aria-hidden="true">{this.isActive() ? 'on' : 'off'}</span>
          </button>
          <style media={this.isActive() ? 'screen' : 'none'}>
            {this.isActive() ? this.css.trim() : this.css}
          </style>
        </div>
      : ''
    }
  </div>
);`}
      </pre>

      <h3>Режим высокой контрастности Windows</h3>
      <p>Windows предлагает ряд высококонтрастных режимов (WHCM) на уровне операционной системы. Среди них — белый текст на черном фоне, как наша тема. Так что, думаю, важно обеспечить максимальную поддержку WHCM нашим компонентом. И вот несколько советов по этому поводу:</p>
      <ul>
        <li>Не делайте контентные изображения фоновыми. Наша «ночная» тема их инвертирует, а в случае с WHCM они и вовсе будут невидны. Для важных смыслообразующих изображений используйте элементы <code>&lt;img&gt;</code> с описанием в атрибуте alt.</li>
        <li>Для инлайновых SVG значения fill и stroke задавайте через currentColor. Тогда при активации высококонтрастного режима цвет иконки будет меняться соответственно цвету текста вокруг.</li>
        <li>Любые другие, специальные изменения для WHCM можно сделать с помощью медиавыражения:</li>
      </ul>
      <pre>{`@media (-ms-high-contrast: active) {
  /* Здесь код, специфичный для WHCM */
}`}
      </pre>

      <h3>Свойство preserveRasters</h3>
      <p>Пропсы (свойства компонента) — стандартный способ настройки компонента. Такой компонент более гибок, может использоваться в большем числе ситуаций и проектов, а значит он более доступный.</p>
      <p>Почему бы не предусмотреть выбор и в нашем случае — будут растровые изображения инвертированы, как все другие элементы, или нет. Я добавил свойство preserveRasters со значением true или false. В коде оно выглядит так:</p>
      <pre>{'<ThemeSwitch preserveRasters="false"></ThemeSwitch>'}</pre>
      <p>В месте, где определяется CSS, добавим условие, что изображения должны быть инвертированы обратно, только при preserveRasters === &quot;true&quot;.</p>
      <p>this.css = &grave;<br />html &lcub; filter: invert(100%); background: #fefefe; &rcub;<br />* &lcub; background-color: inherit &rcub;<br />&dollar;&lcub;this.props.preserveRasters === &apos;true&apos; ? &grave;img:not([src*=&quot;.svg&quot;]), video &lcub; filter: invert(100%) &rcub;&grave; : &grave;&grave;&rcub;&grave;</p>
      <p>Чтобы добавить компоненту надежности, но в тоже время оставить разработчику возможность настройки, предусмотрим значение по умолчанию — defaultProp. Для этого, после определения класса компонента добавим в код строку:</p>
      <pre>{'ThemeSwitch.defaultProps = { preserveRasters: true }'}</pre>
      <p>Всё, что осталось — это решить, в каком месте документа расположить компонент. Как правило, элементы-утилиты, вроде переключателей тем, должны находиться внутри смыслового блока с ARIA-атрибутом role, но не внутри <code>&lt;main&gt;</code>. Дело в том, что пользователи скринридеров ожидают, что содержимое <code>&lt;main&gt;</code> меняется от страницы к странице. Что касается <code>&lt;header&gt;</code> (role=&quot;banner&quot;) и <code>&lt;footer&gt;</code> (role=&quot;contentinfo&quot;), то оба они подходят.</p>
      <p>Оставляйте переключатель в одном и том же месте на всех страницах сайта, чтобы пользователь мог всегда без труда найти его, воспользовавшись однажды. Обратите внимание на принцип инклюзивного дизайна «будь последователен», он применяется и здесь.</p>

      <h2>Чеклист</h2>
      <p>Добавляйте интересные фичи, только если они не замедляют интерфейс и не усложняют работу с сайтом значительно.</p>
      <p>Показывайте интерфейсы только для работающих возможностей, определяйте поддержку заранее.</p>
      <p>Используйте семантическую разметку для компонентов на React. Да, здесь она тоже работает!</p>
      <p>Делайте компоненты настраиваемыми и готовыми к повторному использованию, для этого отлично подходят props.</p>
    </section>

  );
}
export default HowToMakeDarkTheme;
