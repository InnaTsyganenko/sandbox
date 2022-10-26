import React from 'react';

function AtribbuteContentEditable() {

  return (
    <section className="conspect">
      <h1>Редактируемый текст на странице - contentEditable</h1>
      <p contentEditable suppressContentEditableWarning>Атрибут contentEditable позволяет отредактировать текст в выбранном элементе даже без использования инструментов разработчика. Например, вы можете прямо сейчас выделить этот текст мышкой, удалить, и вместо него вписать что угодно.</p>
      <p>React выдает предупреждение на параметр contentEditable. Чтобы убрать предупреждение добавляем параметр - suppressContentEditableWarning.</p>
    </section>
  );
}
export default AtribbuteContentEditable;
