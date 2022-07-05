import React from 'react';

function HowToSetupEslint() {

  return (
    <section className="conspect">
      <h1>Настройка eslint для разработки</h1>
      <h2>pre-commit: Check the commit message for spelling errors.</h2>
      <ol>
        <li>
          <p>Инициализируем новый проект - <span className="hl-10">git init</span></p>
        </li>
        <li>
          <p>Устанавливаем зависимость -  <span className="hl-10">npm i --save-dev husky lint-staged</span></p>
        </li>
        <li>
          <p>В package.json прописываем правила:
            <pre><code>{`"husky": {
              "hooks": {
                "pre-commit": "lint-staged"
              }
            },
            "lint-staged": {
              "*.js": [
                "npm run lint:fix",
                "git add"
              ]
            }`}
            </code></pre>
            </p>
        </li>
      </ol>
      <p>Теперь в репозиторий нельзя будеть залить плохой код, а многие ошибки линтер сам будет исправлять.</p>
    </section>

  );
}
export default HowToSetupEslint;
