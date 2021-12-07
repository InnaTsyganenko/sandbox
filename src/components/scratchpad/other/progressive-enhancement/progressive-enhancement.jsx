import React from 'react';

function ProgressiveEnhancement() {

  return (
    <section className="conspect">
      <h1>Progressive Enhancement and Graceful Degradation</h1>
      <h2>Что такое прогрессивное улучшение</h2>
      <p>Прогрессивное улучшение(progressive enhancement) - или Graceful Degradation(элегантная деградация) - <span className="hl-1"> это способность системы продолжать своё функционирование в случае отказа некоторых её компонентов или отказоустойчивость клиентских веб-интерфейсов.</span></p>
      <p>Прогрессивное улучшение предполагает, что веб-интерфейсы должны создаваться поэтапно, циклически, от простого к сложному. На каждом из этапов должен получаться законченный веб-интерфейс, который будет лучше, красивее и удобнее предыдущего. Можно сказать, что сейчас таких этапов четыре:</p>
      <ol>
        <li>Разметка HTML.</li>
        <li>CSS. Внешний вид.</li>
        <li>CSS3. Безупречный внешний вид.</li>
        <li>JavaScript. Взаимодействие, интерактивность, удобство.</li>
      </ol>
      <p>На первом этапе исходное содержание страницы размечается с помощью HTML. На этом этапе необходимо сделать логичную и семантически правильную разметку. В результате получается корректно размеченный HTML-документ, который браузер отображает так, как считает нужным. Такой документ можно назвать «наименьшим общим знаменателем», так как он будет корректно отображаться в любом, даже самом простом, браузере. Прогрессивное улучшение настаивает, что первый этап является самым важным, так как нет в вебе ничего важнее, чем содержание.</p>
      <p>На втором этапе документ оформляется с помощью старого доброго CSS и обретает более аккуратный вид: появляется сетка страницы, задаются параметры шрифта элементов, фоновые изображения и так далее.</p>
      <p>На третьем этапе применяются новые возможности из семейства спецификаций CSS3, и документ доводится до блеска: полупрозрачные плашки, круглые уголки, тени. Также с помощью CSS3 можно добавить различные анимационно-декоративные фишечки: постепенное затухание или смещение элементов, подсвечивание полей форм и так далее.</p>
      <p>На четвёртом этапе до ума доводится процесс взаимодействия с интерфейсом: различные AJAX решения, динамические элементы, те же календарики и так далее. Тут вовсю используется JavaScript. Этот этап отвечает за удобство. Progressive enhancement — это не что иное, как graceful degradation, доведённый до совершенства.</p>
      <p>Всё же отметим ключевые различия этих понятий:</p>
      <ul>
        <li>Graceful degradation — более широкое понятие, чем progressive enhancement, который ограничен только веб-интерфейсами. Progressive enhancement — это наше, родное, вебовское.</li>
        <li>Progressive enhancement задаёт вектор движения (начинай с простого!), а для graceful degradation это не так важно.</li>
        <li>Progressive enhancement настаивает на важности содержания, а для graceful degradation оно на втором плане.</li>
      </ul>
      <p>В общем, progressive enhancement — это более строгая и последовательная идеология разработки веб-интерфейсов.</p>
      <p>Progressive enhancement возник как реакция на плохой graceful degradation.  Теперь действительно хорошие разработчики и дизайнеры могут делать progressive enhancement, а плохие не могут, так как это сложнее и трудозатратнее. Заодно новый подход впитал в себя все лучшие практики из graceful degradation.</p>

      <h2>Progressive Enhancement и Responsive Design</h2>
      <p>В последнее время набирает популярность подход, который называется responsive design, по-русски адаптивный или отзывчивый дизайн. Суть подхода заключается в том, чтобы с помощью определённого набора техник (резиновые сетки, резиновые изображения, медиавыражения) сделать так, чтобы веб-страница адекватно отображалась на различных устройствах: от смартфона до широкоформатного монитора. Это достигается за счёт динамического изменения сетки страницы, размеров элементов и так далее.</p>
      <p>Одновременно появился похожий подход, который называется mobile first (сначала для мобильных). По сути, это тот же адаптивный дизайн, но с обязательным требованием: всегда начинать проектирование адаптивного интерфейса с мобильной версии.</p>
      <p>Соотношение подходов responsive design и mobile first очень похоже на соотношение graceful degradation и progressive enhancement. Первый подход в паре общий, а второй подход частный и добавляет к первому дополнительные требования: «начинай с простого HTML», «начинай проектировать с мобильной версии», «погладь кота».</p>
      <p>Стоит отметить, что озвученные подходы отлично сочетаются друг с другом и отлично друг друга дополняют. И в скором будущем все топовые исполнители будут заявлять: «Мы делаем mobile first + progressive enhancement».</p>
    </section>
  );
}
export default ProgressiveEnhancement;
