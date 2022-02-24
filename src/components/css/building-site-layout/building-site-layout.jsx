import React from 'react';

function BuildingSiteLayout() {

  return (
    <section className="conspect">
      <h1>Подробное описание построения макета страницы</h1>
      <p>При построении модульных сеток в классической газетной и журнальной вёрстке используется подход «от общего к частному». Метод состоит в том, что сначала создаётся каркас страницы. Затем добавляются следующие в иерархии блоки и элементы. После этого снова идёт уточнение, доработка, детализация. И в завершении на странице появляются отдельные элементы.</p>
      <p>Таким образом, вначале прорабатываем общую композицию и самые крупные элементы. Затем — уточняем, дорабатываем, детализируем. Для этого нам понадобится нарисовать серию черновых эскизов. Только после детальной проработки идеи сайта с помощью карандаша и бумаги наконец-то садимся за компьютер.</p>
      <p>При проектировании сетки нужно сразу определить, что за интерфейс мы делаем. Будет ли он стараться поместиться в экран браузера по высоте целиком, как будто это браузерное приложение? Или же мы имеем дело с обычным контентным сайтом, который не ограничен по высоте, и в браузере может появляться полоса прокрутки при большом объёме контента?</p>
      <p>Распределяем информацию по блокам, группируем контент. Например, на сайте BBC практически у каждой группы контента есть название, которое отражается в категориях меню навигации. Названия блоков служат визуальными якорями, позволяющими бегло просматривать веб-страницу, а также помогающими понять, к какой категории материалов относится та или иная новость.</p>
      <p>Гриды позволяют легко создавать раскладки. Но это не значит, что их можно использовать только для крупных сеток. Технология гридов подходит и для вложенных сеток разделов, сеток отдельных элементов и микросеток: например, для формы, для раздела сайта, для небольших декоративных элементов страницы.</p>
      <p>Очень сложные сетки, с перекрытиями и весьма неочевидными «плиточными» дизайнами, делаются на гридах довольно прозрачно и легко, ведут себя абсолютно предсказуемо, не требуют решения задач по визуальному отображению, которые по сути своей являются фронтендными, на бэкенде или с использованием тяжёлых JS- или CSS-фреймворков — потому что сами гриды являются своего рода фреймворком, лёгким и быстрым.</p>
      <p>В методике мы рассмотрим алгоритм построения сеток, который подойдёт для вёрстки типового макета сайта с фиксированной шириной.</p>

      <h2>Шаг 1. Создание общего контейнера для сетки</h2>
      <p>В обоих случаях (приложение или контентный сайт) нам нужно первым делом создать общий контейнер, который будет ограничивать сетку по ширине и размещать её по центру страницы.</p>

      <h3>Раскладка приложения</h3>
      <p>В случае приложения, которое старается уместиться в доступную высоту экрана, мы будем делать один общий контейнер-центровщик. Им может выступать <code>&lt;div&gt;</code>, который идёт первым в <code>&lt;body&gt;</code> и оборачивает всю остальную разметку, или же сам <code>&lt;body&gt;</code> может выступать в роли такого контейнера-центровщика.</p>
      <pre>{`<body class="container">
  …
</body>

.container {
  width: 1440;
  margin: 0 auto;
}`}
      </pre>
      <p>Веб-страница с отцентрованным основным содержимым сайта,контейнер-центровщик ограничивает размер «рабочей области»:</p>
      <img src="img/layout/layout-1.png" alt="Веб-страница с отцентрованным основным содержимым сайта" width="800" />

      <h3>Раскладка контентной страницы</h3>
      <p>На контентной странице в <code>&lt;body&gt;</code> могут находиться секции и разделы документа, а контейнеры-центровщики будут располагаться внутри каждого из разделов.</p>
      <pre>{`<body>
  <header>
    <div class="container"></div>
  </header>

  <main>
    <div class="container"></div>
  </main>

  <footer>
    <div class="container"></div>
  </footer>
</body>
.container {
  width: 1440;
  margin: 0 auto;
}`}
      </pre>
      <img src="img/layout/layout-2.png" alt="Веб-страница с отцентрованным основным содержимым сайта" width="800" />
      <p>Схематичное изображение сайта с контейнерами-центровщиками для хедера, футера и основного содержимого. Контейнеры-центровщики для каждого смыслового раздела ограничивают ширину блоков</p>
      <p>Рассмотрим пример. Содержимое в шапке, в блоке бестселлеров, в промо-блоке и в блоке категорий товаров имеет фиксированную ширину и выровнено по центру. Реализуем такое поведение с помощью контейнера-центровщика.</p>
      <img src="img/flex/grid-2.png" alt="Центровка блоков" width="800" />
      <p>Добавим в разметку контейнер-центровщик — <code>&lt;div&gt;</code> с классом <span className="hl-1">container</span>. Зададим ему фиксированную ширину, центровку с помощью внешних отступов и небольшие внутренние отступы. При определении размеров руководствуемся макетом.</p>
      <pre>{`.container {
  width: 1170px;
  margin: 0 auto;
  padding: 0 28px;
}`}
      </pre>

      <h2>Шаг 2. Строим сетку для блоков первого уровня</h2>
      <p>Выстраиваем по сетке крупные блоки первого уровня: шапка, подвал, основной контент.</p>
      <p>Как правило, тип отображения для этих блоков не меняют. Блоки идут друг под другом и display: block для этого подходит идеально.</p>
      <div className="note">Для фиксированной сетки желательно задать ширину, при которой сайт нормально смотрится на минимальной для макета ширине. Как правило, для этого устанавливают свойство min-width у тега <code>&lt;body&gt;</code>. Значение для свойства можно получить из макета.</div>
      <pre>{`body {
  margin: 0;
  padding: 0;
  min-width: 1200px;
/* … */
}`}
      </pre>
      <h3>Раскладка приложения</h3>
      <p>Первый типовой вариант крупной сетки — это так называемая раскладка Holy Grail Layout.</p>
      <p>«Святой Грааль» — это сетка, которая включает в себя пять разделов — хедер, футер, основное содержимое и две боковых колонки, по одной с каждой стороны. Раскладка выполнена по следующим правилам:</p>
      <ul>
        <li>«плавающая» ширина центральной части и фиксированная ширина боковых колонок;</li>
        <li>центральная часть в разметке должна идти раньше, чем две боковые колонки (но после хедера);</li>
        <li>все три колонки должны быть одинаковой высоты, вне зависимости от содержимого;</li>
        <li>футер должен быть всегда прижат к низу, даже если контент не заполняет всю высоту окна браузера. Добавим всей странице высоту в 100%. Это нужно, чтобы при нехватке контента подвал прижимался к нижней части страницы.</li>
      </ul>
      <p>Так выглядит макет:</p>
      <img src="img/layout/layout-3.png" alt="Типичый сайт в раскладке Holy Grail" width="800" />
      <p>Раскладка сайта типа святой грааль с хедером, футером и контентом в три колонки. Типичый сайт в раскладке Holy Grail</p>
      <p>Разметка для описанного макета может выглядеть так:</p>
      <pre>{`<body class="hg container">
  <header class="hg-header">
    Title
  </header>

  <nav class="hg-menu">
    Menu
  </nav>

  <main class="hg-main">
    Content
  </main>

  <aside class="hg-aside">
    Ads
  </aside>

  <footer class="hg-footer">
    Footer
  </footer>
</body>`}
      </pre>
      <p>Первый вариант стилей, с указанием нумерованных грид-линий в свойстве grid-column:</p>
      <pre>{`.container {
  width: 1200px;
  margin: 0 auto;
}

.hg {
  display: grid;
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows:
    100px
    1fr
    30px;
  grid-gap: 10px;
  min-height: 100vh;
}

.hg-header {
  grid-column: 1 / 4;

  /* или вариант через отрицательное значение */
  /* grid-column: 1 / -1; */

  /* или вариант через ключевое слово span */
  /* указываем первый столбец в качестве начала
     и количество дорожек, которое будет охватывать грид-элемент */
  /* grid-column: 1 / span 3; */
}

.hg-footer {
  grid-column: 1 / 4;
}`}
      </pre>
      <p>Про минимальную высоту: Чтобы сетка занимала всю доступную высоту окна браузера, в качестве значения свойства min-height для грид-контейнера мы используем величину 100vh. Единица изменения vh эквивалентна 1% высоты окна браузера. В отличие от %, единица измерения vh не требует установки значений по цепочке родительских элементов, так как её значение вычисляется напрямую относительно окна браузера. И величина 100vh всегда составляет всю высоту окна браузера.</p>
      <p>Второй вариант стилей, с именованием грид-областей:</p>
      <pre>{`.container {
  width: 1200px;
  margin: 0 auto;
}

.hg {
  display: grid;
  grid-template-areas:
    "header header header"
    "navigation main ads"
    "footer footer footer";
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows:
    100px
    1fr
    30px;
  grid-gap: 10px;
  min-height: 100vh;
}

.hg-header {
  grid-area: header;
}

.hg-footer {
  grid-area: footer;
}

.hg-main {
  grid-area: main;
}

.hg-menu {
  grid-area: navigation;
}

.hg-aside {
  grid-area: ads;
}`}
      </pre>
      <img src="img/layout/layout-4.png" alt="Как это выглядит в браузере" width="800" />
      <p>Такой способ более наглядный и гибкий. Для перестроения блоков достаточно поменять количество столбцов и рядов в grid-template-columns/grid-template-rows и указать другой порядок областей в значении свойства grid-template-areas, при этом не меняя разметку.</p>
      <p>Для «перестроенного» варианта раскладки нужно поправить стили:</p>
      <pre>{`.hg {
  …

  grid-template-areas:
    "header header"
    "navigation navigation"
    "main ads"
    "footer footer";
  grid-template-columns: 1fr 150px;
  grid-template-rows:
    100px
    auto
    1fr
    30px;
}`}
      </pre>
      <p>Раскладка сайта с заголовком, меню и футером на всю ширину страницы и основным содержимым в две колонки</p>
      <img src="img/layout/layout-5.png" alt="Как это выглядит в браузере" width="800" />

      <h3>Раскладка контентной страницы</h3>
      <p>Этот вариант каркаса сайта обычно используется в статьях, где объём текста может меняться. Главным требованием к раскладке является прикрепление подвала сайта к низу браузерного окна при недостаточном объёме контента. В случае, если статья не помещается по высоте окна браузера, появляется полоса прокрутки.</p>
      <p>Макет контентной страницы с прикреплённым к низу браузером и небольшим объёмом контента</p>
      <img src="img/layout/layout-6.png" alt="Как это выглядит в браузере" width="800" />
      <p>Вид страницы при большем объёме контента</p>
      <p>Разметка страницы:</p>
      <pre>{`<body class="lg">
  <header class="lg-header">
    <div class="container">
      header
    </div>
  </header>
  <main class="lg-content">
    <div class="container">
      <p>Искусство, конечно, реально творит неоднозначный интеллект. Смысл
      жизни рефлектирует трансцендентальный язык образов. Гедонизм
      амбивалентно дискредитирует из ряда вон выходящий закон внешнего
      мира.</p>
      <p>Апостериори, интеллект абстрактен. Апперцепция, как следует из
      вышесказанного, творит язык образов.</p>
    </div>
  </main>
  <footer class="lg-footer">
    <div class="container">
      footer
    </div>
  </footer>
</body>
Стили:

.container {
  width: 1200px;
  margin: 0 auto;
}

.lg {
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-columns: 1fr;
  grid-template-rows:
    100px
    1fr
    30px;
  grid-gap: 10px;
  min-height: 100vh;
}

.lg-header {
  grid-area: header;
  background-color: #fcfdaf;
}

.lg-footer {
  grid-area: footer;
  background-color: #fcfdaf;
}

.lg-content {
  grid-area: content;
  background-color: #b0affd;
}

.lg-content p {
  width: 500px;
  margin: 0 auto;
}`}
      </pre>
      <p>Гибридная раскладка: каталог товаров с панелью фильтров. Разберём, как построить типовой макет каталога товаров на гридах.</p>
      <p>Каркас страницы состоит из шапки, боковой колонки с фильтрами, центральной колонки с основным содержимым — отфильтрованными карточками товаров, внизу страницы расположен футер.</p>
      <p>Усложним задачу: страница должна отображаться на всю высоту окна браузера, при этом футер должен быть прижат к низу окна даже в случае небольшого количества карточек товаров.</p>
      <p>Рассмотрим пример макета. В выборку попали всего три товара, подвал сайта прижат к низу.</p>
      <img src="img/layout/layout-7.png" alt="Макет страницы с тремя карточками и фильтром" width="800" />
      <p>В случае, если отображается большое количество карточек, которое не помещается по высоте окна браузера, добавляется вертикальная прокрутка.</p>
      <img src="img/layout/layout-8.png" alt="Макет страницы с большим количеством карточек, появилась полоса прокрутки" width="800" />
      <p>Мысленно разделим макет на предполагаемые ряды и столбцы грида. Получилось шесть грид-ячеек: по две у хедера и футера, и в отдельных ячейках блок с фильтрами и блок с карточками товаров. Грид-элемент со списком карточек тоже в свою очередь может быть трёхколоночным грид-контейнером.</p>
      <img src="img/layout/layout-9.png" alt="Макет страницы с выведенными грид-линиями" width="800" />
      <p>Разметка:</p>
      <pre>{`<body class="catalog container">
  <header class="catalog-header">
    <h1>Товары первой необходимости рядом с вами</h1>
  </header>

  <section class="catalog-filters">
    <h2>Категория товара</h2>
  </section>

  <main class="catalog-content">
    <section class="catalog-results">
      <article class="card">
      </article>
      <article class="card">
      </article>
      <article class="card">
      </article>
      <!--
      <article class="card">
      </article>
      <article class="card">
      </article>
      <article class="card">
      </article>
      -->
    </section>
  </main>

  <footer class="catalog-footer">
    <p> class="copyright">© «Производство России», 2008—2020</p>
  </footer>
</body>
Сеточные стили:

.container {
  width: 1200px;
  margin: 0 auto;
}

.catalog {
  display: grid;
  grid-template-areas:
    "header header"
    "filters results"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows:
    100px
    1fr
    30px;
  grid-gap: 10px;
  min-height: 100vh;
}

.catalog-header {
  grid-area: header;
}

.catalog-filters {
  grid-area: filters;
}

.catalog-footer {
  grid-area: footer;
}

.catalog-content {
  grid-area: results;
}

.catalog-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
}

.card {
  min-height: 350px;
}`}
      </pre>
      <p>Получившаяся структура грида:</p>
      <img src="img/layout/layout-10.png" alt="Схема грида" width="800" />

      <h2>Шаг 3. Выстраиваем отдельные разделы и блоки</h2>
      <p>Рассмотрим наиболее часто встречающиеся варианты использования сеток для разделов и отдельных элементов интерфейса.</p>
      <h3>Раскладка графического интерфейса</h3>
      <p>Грид можно использовать для построения сетки небольшого графического интерфейса программы (GUI). В качестве наглядного примера выберем приложение Калькулятор. Экран с результатом и кнопки расположены по сетке, в которой требуется выравнивание по обеим осям. Это подходящий вариант использования для CSS Grid Layout.</p>
      <p>Рассмотрим макет интерфейса:</p>
      <img src="img/layout/layout-11.png" alt="Макет приложения калькулятора. Так выглядит макет" width="800" />
      <p>Представим, как этот макет можно расложить по двухмерной сетке. Получилось четыре равномерных столбца и шесть рядов. Текстовый контент в грид-элементах предсказуемый, поэтому допустимо зафиксировать их по высоте. Между ячейками есть равномерный грид-интервал.</p>
      <img src="img/layout/layout-12.png" alt="Макет приложения калькулятора с модульной сеткой. Так выглядит макет с выведенными направляющими" width="800" />
      <p>Разметка:</p>
      <pre>{`<div class="calculator">
  <p class="screen">0</p>

  <button type="button">+</button>
  <button type="button">-</button>
  <button type="button">?</button>
  <button type="button">?</button>

  <button type="button">7</button>
  <button type="button">8</button>
  <button type="button">9</button>

  <button type="button">4</button>
  <button type="button">5</button>
  <button type="button">6</button>

  <button type="button">1</button>
  <button type="button">2</button>
  <button type="button">3</button>

  <button type="button">0</button>
  <button type="button">.</button>
  <button type="button">AC</button>

  <button class="equal-sign" type="button">=</button>
</div>
Стили:

.calculator {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  width: 400px;
  padding: 20px;

  box-sizing: border-box;
}

.screen {
  grid-column: 1 / span 4;

  width: 100%;
  height: 80px;
  margin: 0;
  padding-right: 20px;
  padding-left: 10px;
  box-sizing: border-box;
}

button {
  height: 60px;
}

.equal-sign {
  grid-area: 3 / 4 / 7 / 5;

  /* или более подробная запись */
  /* grid-column: 4 / 5; */
  /* grid-row: 3 / 7; */

  height: 100%;
}`}
      </pre>
      <p>Схематический макет приложения с грид-линиями, грид-интервалами, грид-ячейками и областями</p>
      <img src="img/layout/layout-13.png" alt="Схематический макет приложения с грид-линиями, грид-интервалами, грид-ячейками и областями" width="800" />
      <p>Раскладка статьи с выносными элементами</p>
      <p>Грид может использоваться для вёрстки текстовых статей. В этой ситуации грид-контейнером становится контейнер статьи. Затем для всех грид-элементов задаются одинаковые координаты по столбцам. После чего для отдельных элементов с особенным расположением (например, боковая врезка) координаты переопределяются по каскаду.</p>
      <p>Макет статьи про жидкого волчка</p>
      <img src="img/layout/layout-14.png" alt="Макет страницы со статьёй" width="800" />
      <p>Мы вывели направляющие, чтобы была очевидной сетка, по которой мы будем верстать</p>
      <img src="img/layout/layout-15.png" alt="Макет статьи с направляющими" width="800" />
      <p>Структура грида в результате будет довольно простой. Отдельные элементы, например, цитата специально «выпадает» из сетки с помощью отступов.</p>
      <img src="img/layout/layout-16.png" alt="Схематическое изображение макета, каким он будет в гриде" width="800" />
      <p>Разметка:</p>
      <pre>{`<body>
  <article class="article container">
    <h1>«Жидкий волчок: предпосылки и развитие»</h1>

    <p class="aside">Какие-то слова, но не очень много</p>

    <p>Основание, несмотря на внешние воздействия, абсолютно
    переворачивает динамический вектор угловой скорости.
    В самом общем случае уравнение малых колебаний огромно.
    Внешнее кольцо, в соответствии с основным законом динамики,
    заставляет перейти к более сложной системе дифференциальных уравнений,
    если добавить кинетический момент. Крен требует перейти
    к поступательно перемещающейся системе координат,
    чем и характеризуется лазерный успокоитель качки.
    Дифференциальное уравнение активно.</p>

    <blockquote>Крен требует перейти к поступательно перемещающейся
    системе координат</blockquote>

    <p>Инерциальная навигация связывает курс. Следует отметить, что
    гироскопический маятник методически заставляет перейти к более сложной
    системе дифференциальных уравнений, если добавить прецессирующий
    альтиметр. Механическая природа даёт более простую систему
    дифференциальных уравнений, если исключить газообразный крен до
    полного прекращения вращения. Малое колебание мгновенно.</p>

    <figure>
      <img src="picture.jpg" alt="Фотография месяца">
      <figcaption>Бабушка говорила, что если приставить палочку к месяцу
      и получится буква <kbd>Р</kbd>, то это луна растёт,
      а если месяц в форме буквы <kbd>С</kbd> — то стареет</figcaption>
    </figure>

    <p>Классическое уравнение движения не зависит от скорости вращения
    внутреннего кольца подвеса, что не кажется странным, если вспомнить о
    том, что мы не исключили из рассмотрения прецессионный момент силы
    трения. Объект очевиден. Прецессионная теория гироскопов зависима.
    Исходя из уравнения Эйлера, угловая скорость вертикально определяет
    жидкий угол курса.</p>
  </article>
</body>
Стили:

.container {
  width: 800px;
  margin: 0 auto;
}

.article {
  display: grid;
  grid-template-columns: 150px 1fr 100px;
}

.article > * {
  grid-column: 2;
}

.article > img {
  width: 100%;
}

.article figure {
  grid-column: 1 / -1;
}

.article figcaption {
  font-size: 12px;
  font-style: italic;
}

.article img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.aside {
  grid-column: 1;
  padding: 40px 20px;

  font-style: italic;
}

.article blockquote {
  grid-column: 1 / -1;
  padding: 0 50px;

  font-size: 24px;
  font-weight: bold;
}`}
      </pre>
      <p>У боковых элементов, оформленных таким образом, есть нюанс. Представьте, что боковая врезка стала занимать в высоту больше места, чем абзац в соседней ячейке. В таком случае ряд грида, в котором находятся параграф и «врезка», растянется по высоте, чтобы поместился весь контент. И поэтому визуально после абзаца появится отступ.</p>
      <img src="img/layout/layout-17.png" alt="Макет статьи с крупной боковой врезкой, которая отталкивает абзац ниже. Боковая врезка больше, чем позволяет абзац в основном тексте" width="800" />

      <h2>Панель инструментов</h2>
      <p>Панель инструментов можно реализовать с помощью inline-block или flex, но грид делает эту реализацию проще. В частности упрощается реализация системы отступов между элементами, не нужно заботиться о том, чтобы сбрасывать отступ у последнего элемента в колонке, свойство grid-gap сделает всё за вас.</p>
      <p>Макет панели инструментов в визуальном текстовом редакторе</p>
      <img src="img/layout/layout-18.png" alt="Макет с панелью инструментов в визуальном текстовом редакторе" width="800" />
      <p>Макет с панелью инструментов в визуальном текстовом редакторе</p>
      <img src="img/layout/layout-19.png" alt="Та же панель инструментов с выведенными направляющими линиями" width="800" />
      <p>Та же панель инструментов с выведенными направляющими линиями</p>
      <img src="img/layout/layout-20.png" alt="Каким будет грид панели инструментов в визуальном текстовом редакторе" width="800" />
      <p>Разметка:</p>
      <pre>{`<div class="toolbar">
  <button class="button button-bold" type="button">…</button>

  <button class="button button-italic" type="button">…</button>

  <button class="button button-strike" type="button">…</button>

  <button class="button button-underline" type="button">…</button>

  <button class="button button-text-left" type="button">…</button>

  <button class="button button-text-center" type="button">…</button>

  <button class="button button-text-right" type="button">…</button>

  <button class="button button-text-justify" type="button">…</button>

  <button class="button button-o-list" type="button">…</button>

  <button class="button button-u-list" type="button">…</button>

  <button class="button button-pre" type="button">…</button>

  <button class="button button-quote" type="button">…</button>
</div>
Стили:

.toolbar {
  display: grid;
  grid-template-columns: repeat(12, 40px);
  grid-gap: 10px;
width: 590px;
}

.button {
width: 40px;
height: 40px;
}

…
`}
      </pre>

      <h3>Раскладка списка определений</h3>
      <p>По умолчанию список определений <code>&lt;dl&gt;</code> отображается так:</p>
      <img src="img/layout/layout-21.png" alt="" width="800" />
      <p>Браузерные стили по умолчанию отображают термин (dt) и определение (dd) в отдельных строках и добавляют отступ слева перед определением. С помощью CSS Grid Layout это поведение можно изменить.</p>
      <p>Список определений, как мы хотим его видеть</p>
      <img src="img/layout/layout-22.png" alt="Список определений, макет с направляющими" width="800" />
      <p>Разметка:</p>
      <pre>{`<dl>
  <dt>Фирс</dt>
  <dd>Перед несчастьем тоже было: и сова кричала, и самовар гудел бесперечь.</dd>
  <dt>Гаев</dt>
  <dd>Перед каким несчастьем?</dd>
  <dt>Фирс</dt>
  <dd>Перед волей.</dd>
</dl>
Сеточные стили:

dl {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px 20px;
}`}
      </pre>
      <p>Заметьте, что мы описали только структуру столбцов грида и грид-элементы сами встроились в нужную структуру, так как идут в нужном порядке в разметке.</p>

      <h3>Раскладка карточки со списком определений</h3>
      <p>Ещё один вариант раскладки списка описаний <code>&lt;dl&gt;</code> можно применить в частом интерфейсном паттерне — карточке.</p>
      <p>Макет карточки товара</p>
      <img src="img/layout/layout-23.png" alt="Макет карточки товара Ford Mustang GT с фотографией и параметрами" width="800" />
      <p>Сама карточка — это обычный блочный элемент, в котором все внутренние элементы тоже блоки, идут друг под другом. А вот список описаний в конце карточки удобно реализовать с помощью грида. По раскладке определения dd идут перед терминами dt и занимают «первый ряд», а термины спускаются на «второй ряд».</p>
      <p>Представим список характеристик автомобиля их значений в виде сетки 2 ряда на 3 столбца:</p>
      <p>Макет карточки товара с направляющими линиями</p>
      <img src="img/layout/layout-24.png" alt="Макет карточки товара Ford Mustang GT с фотографией и параметрами, с выведенными направляющими и модульной сеткой" width="800" />
      <p>Разметка:</p>
      <pre>{`<div class="card">
  <img src="picture.jpg" alt="Фотография" width="320" height="220">

  <div class="card-content">
    <h3>Ford Mustang GT</h3>

    <p>Достойный наследник легенды</p>

    <dl>
      <dt>год выпуска</dt>
      <dd>2018</dd>
      <dt>V двигателя</dt>
      <dd>5,2 л</dd>
      <dt>макс. скорость</dt>
      <dd>320 км/ч</dd>
    </dl>
  </div>
</div>
Сеточные стили:

.card {
  width: 320px;
}

.card-content {
  padding: 0 24px;
}

.card-content dl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;

  margin-top: 20px;
  padding-top: 20px;
}

.card-content dd {
  grid-row: 1 / 2;
  margin: 0;
}`}
      </pre>

      <h3>Раскладка карточки в двух видах (ленточный и плиточный)</h3>
      <p>С помощью грида можно легко изменить отображение карточки с одной и той же разметкой. Мы взяли карточку, аналогичную предыдущему примеру, но на этот раз также сделали гридом всю карточку целиком.</p>
      <p>Это понадобится, когда мы будет «переключать» отображение карточки с плиточного в ленточный вид.</p>
      <p>Разберём вариант реализации.</p>
      <p>Макет одной карточки</p>
      <img src="img/layout/layout-25.png" alt="Карточка товара с фотографией, заголовком, описанием и списком терминов, содержащих технические характеристики" width="800" />
      <p>Мысленно разделим карточку на отдельные гридовые области:</p>
      <img src="img/layout/layout-26.png" alt="Карточка товара с фотографией, заголовком, описанием и списком терминов, содержащих технические характеристики, выведены направляющие линии для основного грида и для грида внутри, структурирующего список терминов" width="800" />
      <p>А вот какая будет структура у грида. Общий грид всей карточки будет состоять из четырёх рядов: первый — с фиксированной высотой (так как это изображение), а остальные ряды с автоматической высотой.</p>
      <p>Внутри третьего грид-элемента будет вложенный грид со списком определений похожий на тот, что мы уже разбирали раньше:</p>
      <p>Схема гридов для карточки товара</p>
      <img src="img/layout/layout-27.png" alt="Схема гридов этой карточки, основного и вложенного" width="800" />
      <p>Разметка:</p>
      <pre>{`<article class="card">
  <img class="card-image" src="picture.jpg" width="350" height="340"
  alt="Изображение товара">

  <div class="card-info">
    <h3>Черника свежая</h3>
    <p class="card-info-extra">Отличный товар по привлекательной цене!</p>
  </div>

  <dl class="card-stats">
    <dt>Категория</dt>
    <dd>Ягоды</dd>
    <dt>Вес нетто</dt>
    <dd>1 кг</dd>
    <dt>Стоимость</dt>
    <dd>1000 ?</dd>
  </dl>

  <div class="card-button">
    <a class="button" href="#">В корзину</a>
  </div>
</article>
Сеточные стили для плиточной раскладки:

.card {
  display: grid;
  grid-template-rows: 340px repeat(3, auto);
  grid-gap: 10px;
  max-width: 350px;
}

.card-image {
  width: 350px;
  height: 340px;
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr;

  margin-left: 20px;
  margin-right: 20px;
}

.card-info {
  margin-left: 20px;
  margin-right: 20px;
}

.card-stats dt {
  grid-row: 1 / 2;
}

.card-stats dd {
  margin: 0;
}

.button {
  display: block;
  padding: 10px 20px;
  margin: 20px;
}
Добавим для элемента <article class="card"> класс card-table.

<article class="card card-table">
  …
</article>`}
      </pre>
      <p>После добавления класса и изменения раскладки для него карточка должна выглядеть уже так:</p>
      <img src="img/layout/layout-28.png" alt="Карточка товара с фотографией, заголовком, описанием и списком терминов, содержащих технические характеристики" width="800" />
      <p>Вот такие сеточные стили напишем для табличной раскладки карточки. Теперь в гриде три столбца: первый — с фиксированной шириной, второй — занимает всю оставшееся место, а третий — занимает место по ширине своего контента:</p>
      <img src="img/layout/layout-29.png" alt="Макет той же карточки с выведенными направляющими для построения грида" width="800" />
      <pre>{`…

.card-table {
  grid-template-columns: 350px 1fr auto;
  grid-template-rows: repeat(2, auto);
  max-width: 900px;
}

.card-table .card-image {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  width: 350px;
  height: 250px;
}

.card-table .card-info {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

.card-table .card-stats {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.card-table .card-button {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
}`}
      </pre>
      <p>Вот такая получилась структура грида:</p>
      <img src="img/layout/layout-30.png" alt="Схема гридов этой карточки в табличной раскладке" width="800" />
      <p>Без внесения в разметку изменений (кроме добавления дополнительного класса самой карточке), только за счёт изменения структуры сетки мы получили новый вид карточки.</p>

      <h3>Раскладка формы</h3>
      <p>Применение сеток на гридах для форм начнём с простого примера. Нужно реализовать форму, в которой есть поле для ввода электронной почты и кнопку для отправки формы.</p>
      <img src="img/layout/layout-31.png" alt=">Макет поля для ввода электронного адреса" width="800" />
      <p>Макет поля с выведенными направляющими для построения грида</p>
      <img src="img/layout/layout-32.png" alt="Макет поля с выведенными направляющими для построения грида" width="800" />
      <p>Разметка:</p>
      <pre>{`<form class="form" action="#">
  <input type="email" placeholder="Ваш email, например, abc@gmail.com">
  <button type="submit">
    …
  </button>
</form>
Стили:

.form {
  display: grid;
  grid-template-columns: 1fr auto;
width: 500px;
box-sizing: border-box;
}

.form input {
/* стили поля ввода */
}

.form button {
/* стили кнопки */
}`}
      </pre>
      <p>В примере используется простая сетка, которую можно легко реализовать и другими способами. Но в нашей реализации поле для ввода и кнопка являются грид-элементами, и поэтому высота поля для ввода подстраивается под высоту кнопки, как бы она ни увеличивалась.</p>
      <p>Второй пример сетки для формы. На этот раз это форма-анкета для посетителя конференции. Макет более объёмной формы ниже:</p>
      <img src="img/layout/layout-33.png" alt="Макет формы с выведенными направляющими для построения грида" width="800" />
      <p>Макет формы</p>
      <img src="img/layout/layout-34.png" alt="" width="800" />
      <p>Область для заполнения данных можно разделить на шесть колонок и шесть строк. Первую и вторую колонку занимает область с фотографией участника. Поля Фамилия, О себе и подпись Ваша должность занимают по четыре колонки. Поля Instagram и Twitter — две колонки. Переключатели в поле Ваша должность — по одной колонке. Схематично макет формы можно представить в виде:</p>
      <p>Схема грида для формы</p>
      <img src="img/layout/layout-35.png" alt="Схема грида для формы" width="800" />
      <p>Разметка формы:</p>
      <pre>{`<section class="profile">
  <h2>Анкета посетителя конференции</h2>

  <form class="profile-form" action="#">
    <div class="photo">
      Тут будет фото
    </div>

    <div class="name">
      <label for="name">Имя и фамилия</label>
      <input type="text" class="input" name="name" id="name">
    </div>

    <div class="job">
      <label for="job">Место работы</label>
      <input type="text" class="input" name="job" id="job">
    </div>

    <div class="city">
      <label for="city">Город</label>
      <input type="text" class="input" name="city" id="city">
    </div>

    <div class="twitter">
      <label for="twitter">Twitter</label>
      <input type="text" class="input" name="twitter" id="twitter">
    </div>

    <div class="instagram">
      <label for="instagram">Instagram</label>
      <input type="text" class="input" name="instagram" id="instagram">
    </div>

    <div class="about">
      <label for="about">О себе</label>
      <textarea> rows="4" class="input" name="about" id="about"></textarea>
    </div>

    <div class="post">
      <labelВаша должность</label>
    </div>

    <div class="checkbox-1">
      <label for="design">
        <input id="design" name="post" type="checkbox" value="1" checked="checked">
        Дизайнер
      </label>
    </div>

    <div class="checkbox-2">
      <label for="front-end">
        <input id="front-end" name="post" type="checkbox" value="2">
        Разработчик
      </label>
    </div>

    <div class="checkbox-3">
      <label for="manager">
        <input id="manager" name="post" type="checkbox" value="3">
        Менеджер
      </label>
    </div>

    <div class="checkbox-4">
      <label for="other">
        <input id="other" name="post" type="checkbox" value="4">
        Другая
      </label>
    </div>
  </form>
</section>
Сеточные стили для формы:

.profile {
  width: 950px;
}

.profile-form {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  grid-template-rows: repeat(6, auto);
  grid-template-areas:
    "photo name name name name"
    "photo job job city city"
    "photo twitter twitter instagram instagram"
    "photo about about about about"
    "photo post post post post"
    "photo checkbox-1 checkbox-2 checkbox-3 checkbox-4";
  grid-gap: 15px;

  padding: 15px;
}

.photo {
  grid-area: photo;

  display: flex;
  justify-content: center;
  align-items: center;
}

.name {
  grid-area: name;
}

.job {
  grid-area: job;
}

.city {
  grid-area: city;
}

.twitter {
  grid-area: twitter;
}

.instagram {
  grid-area: instagram;
}

.about {
  grid-area: about;
}

.post {
  grid-area: post;
}

.checkbox-1 {
  grid-area: checkbox-1;
}

.checkbox-2 {
  grid-area: checkbox-2;
}

.checkbox-3 {
  grid-area: checkbox-3;
}

.checkbox-4 {
  grid-area: checkbox-4;
}

.input {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
}`}
      </pre>
      <p>Раскладка блоков с декоративным наложением друг на друга</p>
      <p>За счёт того, что грид-элементы накладываются друг на друга, можно получать интересные эффекты.</p>
      <p>Вот пример типичного раздела страницы лендинга, в котором дизайнер использует многослойность:</p>
      <ul>
        <li>изображение наслаивается на область с текстовым описанием;</li>
        <li>панель управления слайдером расположена поверх изображения.</li>
      </ul>
      <p>Макет страницы лендинга</p>
      <img src="img/layout/layout-36.png" alt="Макет страницы о фонде, с наложением элементов один на другой" width="800" />
      <p>Макет страницы о фонде с выведенными направляющими для построения грида</p>
      <img src="img/layout/layout-37.png" alt="Макет страницы о фонде с выведенными направляющими для построения грида" width="800" />
      <p>Схема грида для макета страницы</p>
      <img src="img/layout/layout-38.png" alt="Схема грида для макета страницы" width="800" />
      <p>Многослойность легко реализовать с помощью размещения грид-элементов в одной и тоже ячейке сетки. Разберём, как это можно сделать. Для начала создадим разметку для раздела.</p>
      <pre>{`<section class="about container">
  <h2 class="about-tag">О фонде</h2>

  <p class="about-lead">Под защитой государства</p>

  <ul class="about-list">
    <li class="about-item">Защита и восстановление прав покупателей жилья</li>
    <li class="about-item">Финансирование завершения строительства объектов</li>
  </ul>

  <p class="about-desc">Наша миссия — исключить риск для граждан РФ,
  покупающих квартиру в строящемся доме. В случае банкротства застройщика мы
  поможем дольщикам, выплатив компенсацию или достроив дом.</p>

  <ul class="about-info-block">
    <li class="about-info-block-item">
      <h3 class="about-subtitle">Безопасное сотрудничество</h3>

      <p class="about-text">Благодаря специально разработанным правилам для
      застройщиков на рынке недвижимости не останется недобросовестных компаний</p>
    </li>

    <li class="about-info-block-item">
      <h3 class="about-subtitle">Информационная открытость</h3>

      <p class="about-text"><a href="#">Единая информационная система жилищного
      строительства</a> позволяет всем получить полную информацию
      о строящемся жилье</p>
    </li>
  </ul>

  <div class="about-button">
    <a href="#" class="button">Схема взаимодействия с фондом</a>
  </div>

  <div class="about-img-container">
    <img width="300" height="400" class="about-img" src="picture.jpg" alt="Фото">
  </div>

  <div class="slider-controls">
    <button class="slider-button" type="button">Назад</button>

    <button class="slider-button" type="button">Вперёд</button>

    <span class="slider-page">1 / 4</span>
  </div>
</section>

Сеточные стили:

.container {
  width: 800px;
  margin: 0 auto;
}

.about {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(5, auto);
}

.about-button {
  grid-area: 5 / 1 / 6 / 2;
  padding: 0 25px;
}

.about-tag {
  grid-area: 1 / 1 / 2 / 3;

  margin: 0;
  padding: 30px 25px;
}

.about-lead {
  grid-area: 2 / 1 / 3 / 2;

  padding-left: 25px;
}

.about-list {
  grid-area: 3 / 1 / 4 / 2;

  padding-left: 25px;
}

.about-desc {
  grid-area: 2 / 2 / 3 / 3;

  padding: 0 25px 20px 0;
}

.about-info-block {
  grid-area: 4 / 1 / 5 / 2;

  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 30px;
}

.about-img-container {
  grid-area: 3 / 2 / 6 / 3;
}

.slider-controls {
  /* грид-элемент является грид-контейнером для растяжения блока с кнопками
  слайдера по всей ширине доступной области */
  display: grid;

  grid-template-columns: auto auto 1fr;
  grid-area: 5 / 2 / 6 / 3;
}

.about-img {
  /* Оптимальные стили для картинки с кадрированием и автоматической
  высотой ячейки */
  display: block;
  width: 100%;
  height: 100%;

  object-fit: cover;
}`}
      </pre>
      <p className="note">Замечание: В примере выше мы обернули ссылку в тег <code>&lt;div class=&quot;about-button&quot;&gt;</code>. Дополнительную обёртку используем, чтобы не растягивать саму ссылку по всей ширине ячейки.</p>
      <p>Ещё один часто встречающийся кейс в макетах — это наложение текста на изображение. Это может быть блок со слайдером или промо-блок.</p>
      <p>Рассмотрим макет с промо-блоком, в котором текст наслаивается на изображение.</p>
      <p>Макет промо-блока с наложением текста на картинку:</p>
      <img src="img/layout/layout-39.png" alt="Загородные дома в аренду, описание, кнопка, картинка с домом" width="800" />
      <p>Макет промо-блока с выведенными направляющими для построения грида:</p>
      <img src="img/layout/layout-40.png" alt="Загородные дома в аренду с выведенными направляющими для построения грида" width="800" />
      <p>Обратите внимание, что сетка имеет двенадцать колонок. Изображение занимает 7 колонок справа, а текст — 6 колонок слева, но располагается начиная со второй колонки. Если два и более элемента размещаются в одной грид-области, то выше будет располагаться тот, который идёт следующим по разметке. Управлять расположением можно с помощью CSS-свойства z-index. Подробнее в углублённой теории о многослойности.</p>
      <p>Схема грида для промо-блока</p>
      <img src="img/layout/layout-41.png" alt="Схема грида для промо-блока" width="800" />
      <p>Разметка для блока:</p>
      <pre>{`<section class="promo">
  <p class="promo-city">Санкт-Петербург</p>
<h2>Загородные дома в аренду</h2>

<p class="promo-text">Отдохните от суеты мегаполиса в уютном тёплом доме
в окружении экологически чистых лесов, рек и озёр</p>

<a class="promo-button" href="#">Арендовать дом</a>

<img class="promo-img" src="picture.jpg" alt="Фото" width="795" height="496">
</section>

Стили для блока:

.promo {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 24px;
}

.promo-city {
  grid-area: 1 / 2 / 2 / 8;
}

.promo h2 {
  grid-area: 2 / 2 / 3 / 8;
  z-index: 1; /* «поднимаем» заголовок над картинкой */
}

.promo-text {
  grid-area: 3 / 2 / 4 / 8;
  z-index: 1; /* «поднимаем» текст над картинкой */
}

.promo-button {
  grid-area: 4 / 2 / 5 / 4;
}

.promo-img {
  grid-area: 1 / 6 / -1 / -1;
}`}
      </pre>
      <p>В примере мы воспользовались CSS-свойством z-index: 1;, чтобы заголовок и текст «наслоить» на изображение.</p>

      <h3>Раскладка с изображением и текстом напротив</h3>
      <p>Без дополнительных обёрток можно построить сетку для элемента такого вида:</p>
      <img src="img/layout/layout-42.png" alt="Макет промо-блока туров по городам Италии с описанием, кнопкой и картинкой" width="800" />
      <p>Получившися грид состоит из двух столбцов и трёх рядов. Все ряды в первом столбце занимает изображение:</p>
      <img src="img/layout/layout-43.png" alt="Макет с выведенными направляющими для построения грида" width="800" />
      <p>Схема грида для макета</p>
      <img src="img/layout/layout-44.png" alt="Схема грида для макета" width="800" />
      <p>Разметка:</p>
      <pre>{`<div class="simple-grid">
  <img class="simple-grid-img" src="picture.jpg" width="100" height="100"
  alt="Фото">

  <h2 class="simple-grid-name">Тур по городам Италии</h2>

  <p class="simple-grid-subject">Незабываемое путешествие, знакомство с местной
  кухней и развлечениями</p>

  <div class="simple-grid-button">
    <a href="/">Узнать стоимость</a>
  </div>
</div>
Стили:

.simple-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "img name"
    "img subject"
    "img button";
  grid-column-gap: 10px;
  max-width: 340px;
}

.simple-grid-img {
  grid-area: img;
}

.simple-grid-name {
  grid-area: name;
  margin: 0;
}

.simple-grid-subject {
  grid-area: subject;
  margin: 0;
}

.simple-grid-button {
  grid-area: button;
}`}
      </pre>

      <h3>Раскладка блока с текстом и иконкой</h3>
      <p>С помощью грида можно легко создавать раскладки с небольшими декоративными элементами: например, с изображением телефона для элемента с телефоном горячей линии, с изображением для пункта меню и так далее. Разберём стилизацию блока с адресом и иконкой напротив.</p>
      <p>Макет текста с иконкой</p>
      <img src="img/layout/layout-45.png" alt="Макет текста с иконкой локации" width="800" />
      <p>Макет текста с иконкой локации с выведенными направляющими для построения грида</p>
      <img src="img/layout/layout-46.png" alt="Макет с выведенными направляющими для построения грида" width="800" />
      <p>Схема грида для макета</p>
      <img src="img/layout/layout-47.png" alt="Схема грида для макета" width="800" />
      <p>В разметке элемент выглядит следующим образом:</p>
      <pre>{`<address class="address">Санкт Петербург, набережная реки Карповки,
      5 лит. П</address>
Добавим декоративный элемент с помощью псевдоэлемента ::before и применим
display: grid; для тега <address>:

.address {
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 50px;
}

.address::before {
  content: "";

  width: 16px;
  height: 20px;
  margin-right: 15px;

  background-image: url("pin.svg");
  background-repeat: no-repeat;
  background-position: center;
}`}
      </pre>
    </section>
  );
}
export default BuildingSiteLayout;
