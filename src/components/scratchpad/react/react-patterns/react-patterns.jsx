import React from 'react';

function ReactPatterns() {

  return (
    <section className="conspect">
      <h1>React patterns</h1>
      <p><span className="hl-5">Паттерн</span>- это готовый <b>способ</b> решения проблемы.</p>
      <h2>props.children</h2>
      <p>заревервированный пропс React. Это кусок компонента с разметкой. Нежелательно вызывать функцией - плохой тон.</p>
      <h2>props.render()</h2>
      <p>Это как раз таки функция, её параметры можно использовать как условия для отрисовки разных компонентов JSX(например, для мобильной версии и десктопа)</p>
      <code>&lcub;product.type && &lt;mark&gt;&lcub;product.type&rcub;&lt;/mark&gt;&rcub;</code>
      <p>Этот кусок кода сработает как проверка значения для отрисовки правой части. А логическое или - || - вернёт левую часть, если она истинна и правую часть, если левая ложная или undefined, null, etc.</p>
      <pre>{`<article className={
          'product &dollar;{
            product.type === Type.SALE
              ? 'product--sale'
              : product.type === Type.NEW
                ? 'product--new'
                : ''
          }'
        }>`}
      </pre>
      <p>Этот код применим для решения проблемы активного класса.</p>
      <h2>Паттерн контейнер</h2>
      <p>Если у элемента есть хоть какая нибудь логика, то его нужно вынести в отдельный контейнер.</p>
      <h2>Паттерн HOC - High Order Component</h2>
      <p>Название такого компонента начинается с with...</p>

      <h2>Неконтролируемые формы и ref</h2>
      <p>defaultValue - это то случай, когда нам нужен не контролируемый инпут.</p>
      <h3>hook useRef()</h3>
      <h3>hook useEffect()</h3>
    </section>
  );
}
export default ReactPatterns;
