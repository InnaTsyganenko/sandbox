import React from 'react';

function InheritanceAndCascading() {

  return (
    <section className="conspect">
      <h1>Наследование и каскадирование</h1>
      <h2>Иерархическое дерево</h2>
      <p>HTML-документ представляет собой иерархическое дерево. Это означает, что у каждого элемента (кроме корневого) есть только один родитель, то есть элемент, внутри которого он располагается. У корневого раздела родитель отсутствует. Рассмотрим простейшую страницу:</p>
      <pre>{`<html>
   <head></head>
   <body>
      <p>Текст документа</p>
      <p class="text">Выделенная <span>строка</span></p>
   </body>
</html>`}
      </pre>
      <p>В данном примере видно, что у элемента span родителем является p.text, а у p.text родитель — body.</p>
      <p>Иерархическая структура документа определяет основы концепции наследования.</p>

      <h2>Наследование</h2>
      <p>Наследование в CSS — механизм, с помощью которого значения свойств элемента-родителя передаются его элементам-потомкам.</p>
      <p>Стили, присвоенные некоторому элементу, наследуются всеми потомками (вложенными элементами), если они не переопределены явно. Например, размер шрифта и его цвет достаточно применить к body, чтобы все элементы внутри имели те же свойства.</p>
      <p>Наследование позволяет сократить размер таблицы стилей, но если стилей много, то отследить какой родительский элемент установил некоторое свойство, становится сложнее.</p>

      <h3>Наследование «на пальцах»</h3>
      <p>Рассмотрим пример:</p>
      <pre>{'<p class="text">Cтрока c выделенным <span>словом</span></p>'}</pre>
      <p>Представим, что нам нужно установить красный цвет текста для всего текста. Зададим CSS-свойства следующим образом:</p>
      <pre>{`.text {
  color: red;
}`}
      </pre>
      <p>Благодаря наследованию цвет текста в теге span автоматически станет красным.</p>
      <p>Не все свойства наследуются тегами-потомками от их родителей. Было бы странно, если бы свойство border автоматически устанавливалось для всех вложенных элементов.</p>

      <h3>Наследуемые свойства</h3>
      <p>font-size, font-family, font-style, font-weight, color, text-align, text-transform, text-indent, line-height, letter-spacing, word-spacing, white-space, direction и т. д.</p>
      <p>Также к наследуемым свойствам относятся list-style, cursor, visibility, border-collapse и некоторые другие. Но они используются значительно реже.</p>
      <p>Весь список наследуемых свойств смотрите в стандарте CSS. Значение yes в колонке Inherited?. Эти свойства можно и нужно задавать через предков, следуя семантике документа.</p>
      <p>Например, параметры текста зачастую не меняются в пределах отдельных блоков страницы: меню, основного содержания, информационных панелей. Поэтому общие параметры текста (цвет, размер, гарнитура) обычно указывают в стилях самих блоков.</p>

      <h3>Ненаследуемые свойства</h3>
      <p>В предыдущем задании мы перечислили основные наследуемые свойства. Все остальные относятся к ненаследуемым. Это параметры позиционирования, размеров, отступов, фона, рамок и т. д.</p>
      <p>А именно: background, border, padding, margin, width, height, position и др.</p>
      <p>Не наследуются они из соображений здравого смысла. Например: если для какого-либо блока установлен внутренний отступ, автоматически выставлять такой же отступ каждому вложенному элементу нет никакой надобности. Эти параметры чаще всего уникальны для каждого отдельного блока.</p>

      <h3>Принудительное наследование</h3>
      <p>Для каждого свойства может быть задано значение inherit.</p>
      <p>Значение inherit может быть использовано для усиления наследуемых значений, а также в свойствах, которые обычно не наследуются.</p>
      <p>Запись выглядит следующим образом:</p>
      <pre>{`p {
  background: inherit;
}`}
      </pre>
      <p>В данном случае у тегов p свойство background будет таким же, как и у их родительских тегов.</p>

      <h2>Каскадирование <abbr data-title="«Cascading Style Sheets» или «каскадные таблицы стилей»">CSS</abbr></h2>
      <p>Каскадность обозначает, что к одному и тому же элементу может применяться несколько CSS-правил (наборов CSS-свойств). Среди этих свойств могут быть и конфликтующие между собой. Поэтому существуют инструкции, которые определяют, каким будет финальный набор свойств элемента. Например, для элемента:</p>
      <pre>{'<p class="text" style="color: red;"></p>'}</pre>
      <p>CSS-правила существуют как минимум в трёх разных местах:</p>
      <ul>
        <li>в подключаемом файле style.css для селекторов p или .text;</li>
        <li>в атрибуте style;</li>
        <li>в стандартных стилях отображения, встроенных в браузер.</li>
      </ul>
      <p>Каскадирование как раз и определяет, какие именно свойства из этих источников применятся к данному абзацу.</p>
      <p>Имеется три основные концепции, управляющие порядком, в котором применяются CSS-свойства:</p>
      <ol>
        <li>важность;</li>
        <li>специфичность;</li>
        <li>порядок исходного кода.</li>
      </ol>
      <p>Самыми важными для нас являются последние две и подробнее о них мы поговорим отдельно.</p>
      <p>Разберём пример. Вот HTML-код, в котором есть абзац с двумя классами:</p>
      <pre>{`<p class="red blue">Синий или красный?</p>
А вот CSS-код c двумя правилами для этих классов:

.blue {
  color: blue;
}

.red {
  color: red;
}`}
      </pre>
      <p>Вопрос: какого цвета будет текст абзаца? Какое из CSS-правил приоритетнее? Ответ: красного цвета, второе правило приоритетнее.</p>
      <p>В таком случае более высоким приоритетом обладает то правило, которое расположено в CSS-коде ниже.</p>
      <p>Чуть более сложный пример. Тот же HTML:</p>
      <pre>{`<p class="red blue">Синий или красный?</p>
Немного другой CSS:

p.blue {
  color: blue;
}

.red {
  color: red;
}`}
      </pre>
      <p>В этом случае текст абзаца будет синим. Происходит это потому, что селектор p.blue более специфичный, чем селектор .red.</p>
      <div className="note">Простое объяснение специфичности звучит так: чем меньшее количество элементов потенциально может выбрать селектор, тем он специфичнее.</div>
      <p>CSS-правила, которые прописаны в style обладают наивысшим приоритетом. Такой способ задания стилей не приветствуется в профессиональной вёрстке сайтов и годится только для создания быстрых прототипов.</p>
      <p>Однако существует способ переопределить из подключаемых CSS-файлов даже стили, заданные в атрибуте style. Для этого нужно использовать ключевое слово !important. Оно задаёт CSS-свойству усиленный приоритет. Вот пример:</p>
      <pre>{`HTML:

<p style="color: red;" class="blue">Синий или красный?</p>
CSS:

.blue {
  color: blue !important;
}`}
      </pre>
      <p>Цвет текста в этом примере будет синим.</p>
      <div className="warn">При вёрстке не рекомендуется часто использовать !important. По возможности старайтесь обходиться без него.</div>

      <h2>Расчёт значения специфичности</h2>
      <p>Специфичность селектора разбивается на 4 группы — a, b, c, d:</p>
      <ol>
        <li>если стиль встроенный, то есть определён как style=&quot;...&quot;, то а=1, иначе a=0;</li>
        <li>значение b равно количеству идентификаторов (тех, которые начинаются с #) в селекторе;</li>
        <li>значение c равно количеству классов, псевдоклассов и селекторов атрибутов;</li>
        <li>значение d равно количеству селекторов типов элементов и псевдо-элементов.</li>
      </ol>
      <p>После этого полученное значение приводится к числу (обычно в десятичной системе счисления). Селектор, обладающий большим значением специфичности, обладает и большим приоритетом.</p>
      <p>Посчитаем специфичность в нашем примере:</p>
      <pre>{`<table>
  <tr>
    <th>Селектор</th>
    <th>a, b, c, d	Число</th>
    </tr>
   <tr>
     <td>span</td>
     <td>0, 0, 0, 1	1</td>
     </tr>
    <tr>
<td>div.cat-in-box</td>
      <td>0, 0, 1, 1	11</td>
      </tr>
  <tr>
<td>#floor.cat-in-box</td>
  <td>0, 1, 1, 0	110</td>
    </tr>
  <tr>
<td>div span</td>
<td>0, 0, 0, 2	2</td>
</tr>
  <tr>
<td>.cat-in-box</td>
    <td>0, 0, 1, 0	10</td>
    </tr>
  <tr>
<td>#floor span</td>
    <td>0, 1, 0, 1	101</td></tr>
  </table>`}
      </pre>
      <p>Отсюда сразу видно, что в нашем примере самым приоритетным является селектор #floor .cat-in-box.</p>
      <p>Если два CSS-правила применяются к одному и тому же элементу и имеют одинаковую специфичность, то более приоритетным будет то правило, которое появится в коде позже другого.</p>

      <h2>Перекрёстное наследование</h2>
      <p>При создании стилей для сходных по внешнему виду или функциональности элементов, которые могут использоваться на странице неоднократно, очень удобно пользоваться перекрёстным наследованием.</p>
      <p>Приём этот заключается в следующем:</p>
      <ul>
        <li>создаётся базовый стиль для таких элементов;</li>
        <li>определяются вспомогательные стили, которые применяются к элементам по мере надобности;</li>
        <li>элемент наследует базовый стиль и один или несколько вспомогательных.</li>
      </ul>
      <p>Пример: на странице используются кнопки разного назначения: для отправки форм, для сброса информации в полях формы, как элементы навигации и т. д.</p>
      <p>Можно вынести общее оформление (размеры, отступы и так далее) для всех кнопок в отдельное CSS-правило для класса, например, .button.</p>
      <p>А затем создать дополнительные CSS-правила, в которых будут определены только различающиеся свойства этих кнопок, например, цвет фона. Для этих правил можно использовать такие названия классов: .button-send, .button-clear, .button-navigation.</p>
      <p>Каждая кнопка в HTML-коде будет иметь два класса: общий и дополнительный.</p>
      <pre>{'<a class="button button-send">Отправить</a>'}</pre>
    </section>
  );
}
export default InheritanceAndCascading;
