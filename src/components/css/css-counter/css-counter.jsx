import React from 'react';

function CssCounter() {

  return (
    <section className="conspect">
      <h1>Css counter</h1>
      <pre>{`body {
  counter-reset: section; / * Создать секцию таймера в теле для отсчета h1 * /
}

h1 {
  counter-reset: subsection; / * Создать счетчик подразделов в h1 для подсчета h2 * /
}

h1::before {
  counter-increment: section; / * Увеличить значение счетчика секций автоматически * /
  content: "Section " counter(section) ". ";
  / * Поместите значение счетчика сплайсинга секции перед h1 * /
}

h2::before {
  counter-increment: subsection; / * Автоматически увеличивать значение счетчика подраздела * /
  content: counter(section) "." counter(subsection) " ";
  / * Точно так же поместите его перед h2 после сращивания * /
}`}
      </pre>
      <pre>{`ol {
  counter-reset: section;	/ * Создать счетчик в старом * /
  list-style-type: none;
}

li::before {
  counter-increment: section;	/ * Дочерний элемент в ol будет создан автоматически * /
  content: counters(section,".") " ";
}`}
      </pre>
    </section>
  );
}
export default CssCounter;
