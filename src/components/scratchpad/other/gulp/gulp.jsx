import React from 'react';

function Gulp() {

  return (
    <section className="conspect">
      <h1>Gulp</h1>
      <p><span className="hl-10">gulp-uglify</span> - пакет для минимизации js-файлов, не работает с es-модулями. Вместо него нужно использовать <a href="https://www.npmjs.com/package/gulp-uglify-es" target="_blank" rel="noopener noreferrer"><span className="hl-9">gulp-uglify-es</span></a>.</p>
      <p>Как настроить сборку с gulp можно посмотреть на примере проекта <span className="hl-8">mishka</span></p>
    </section>
  );
}
export default Gulp;
