import React from 'react';

function Bem() {

  return (
    <section className="conspect">
      <h1>Конспект по <abbr data-title="Блок, Элемент, Модификатор">БЭМ</abbr></h1>
      <p><a href="https://ru.bem.info/methodology/" target="_blank" rel="noopener noreferrer">МЕТОДОЛОГИЯ</a></p>
      <p><a href="https://medium.com/@innabelaya/%D0%B1%D1%8D%D0%BC-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%B0%D1%87%D0%B8%D0%BD%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%BE%D1%87%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B5-%D0%B8-%D0%BD%D0%B5%D0%BE%D1%87%D0%B5%D0%B2%D0%B8%D0%B4%D0%BD%D1%8B%D0%B5-%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B-%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B8-1a21d67cf840" target="_blank" rel="noopener noreferrer">БЭМ для начинающих. Очевидные и неочевидные вопросы верстки</a></p>
      <p><a href="https://habr.com/ru/company/yandex/blog/276035/" target="_blank" rel="noopener noreferrer">БЭМ-методология: с чего всё начиналось и зачем это всё нужно</a></p>
      <p><a href="https://css-live.ru/articles/bemantika-pishite-osmyslennye-stili-bez-povtorov.html" target="_blank" rel="noopener noreferrer">БЭМантика: пишите осмысленные стили без повторов</a></p>
      <p>Это компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код.</p>
      <p>БЭМ помогает решить следующие задачи:</p>
      <ul>
        <li>повторно использовать верстку</li>
        <li>безболезненно менять верстку местами в одном проекте</li>
        <li>переносить готовую верстку из проекта в проект</li>
        <li>создавать стабильный, предсказуемый и понятный код</li>
        <li>сократить время на отладку проекта</li>
      </ul>

      <p>Правила именования CSS-селекторов</p>
      <ul>
        <li>в описании CSS-правил отказались от использования id.</li>
        <li>
          Блок не должен зависеть от окружающих его блоков и сам не должен влиять на соседние блоки, поэтому в CSS отказались от:
          <ul>
            <li>тегов;</li>
            <li>вложенных селекторов;</li>
            <li>глобального сброса правил для всей страницы.</li>
          </ul>
        </li>
      </ul>
      <p>Важной определяющей сущностью в именовании селекторов стал блок:</p>
      <ul>
        <li>Полное имя элемента/модификатора формируется так, чтобы из него можно было определить принадлежность данного элемента/модификатора к конкретному блоку.</li>
        <li>По имени модификатора элемента должно быть возможно определить принадлежность данного модификатора к конкретному элементу конкретного блока.</li>
      </ul>

      <h2>Правила формирования имени БЭМ-сущности</h2>
      <ol>
        <li>Каждая БЭМ-сущность должна иметь свой класс.</li>
        <li>CSS-свойства для блоков, элементов и модификаторов описываются только через классы.</li>
        <li>Для разделения слов в именах используется дефис (-).</li>
        <li>Элемент отделяется от блока двумя подчеркиваниями (__). Модификатор — одним (_).</li>
        <li>Имена БЭМ-сущностей записываются с помощью цифр и латинских букв в нижнем регистре.</li>
      </ol>

      <h3>Пример</h3>
      <ul>
        <li>Имя блока — <span className="hl-5">header</span>.</li>
        <li>Имя элемента блока — <span className="hl-5">header__search-form</span> — элемент search-form блока header.</li>
        <li>Имя модификатора блока — <span className="hl-5">header_theme_green-forest</span> — модификатор theme в значении green-forest блока header.</li>
        <li>Имя модификатора элемента — <span className="hl-5">header__search-form_disabled</span> — булев модификатор disabled элемента search-form блока header.</li>
      </ul>
      <p>В простейшем случае блок соответствует DOM-узлу, один к одному. Но DOM-узел и блок — это не всегда одно и то же. На одном DOM-узле может совмещаться несколько сущностей. Это называется миксом. С помощью миксов можно:</p>
      <ul>
        <li>объединять поведение и стили нескольких БЭМ-сущностей без дублирования кода;</li>
        <li>создавать семантически новые компоненты интерфейса на основе имеющихся блоков, элементов и модификаторов;</li>
        <li>задавать позицию вложенного блока в родительском, не создавая дополнительных модификаторов. Подробнее, о том, как создавать обёртки в HTML, читайте на форуме.</li>
      </ul>
    </section>

  );
}
export default Bem;