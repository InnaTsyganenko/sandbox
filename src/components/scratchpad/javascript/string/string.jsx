import React from 'react';

function String() {

  return (
    <section className="conspect">
      <h1>Объект String</h1>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String#string_generic_methods" className="examples-js" target="blank" rel="noopener noreferrer">MDN. String</a></p>
      <p>Пример, как получить массив уникальных значений типа string и сделать каждое значение с заглавной буквы:</p>
      <pre>{'const uniqTypes = [...new Set(allTypes)].map((item) => item.toUpperCase());'}</pre>
    </section>
  );
}
export default String;
