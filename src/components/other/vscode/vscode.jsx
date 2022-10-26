import React from 'react';

function Vscode() {

  return (
    <section className="conspect">
      <h1>VSCode</h1>
      <div className="note">
        <h5>Интегри́рованная среда́ разрабо́тки, ИСP (англ. Integrated development environment — IDE), также единая среда разработки, ЕСР — комплекс программных средств, используемый программистами для разработки программного обеспечения (ПО).</h5>
        <p>Среда разработки включает в себя:</p>
        <ul>
          <li>текстовый редактор,</li>
          <li>Транслятор (компилятор и/или интерпретатор),</li>
          <li>средства автоматизации сборки,</li>
          <li>отладчик.</li>
        </ul>
      </div>
      <p><span className="hl-6">End - курсор в конец строки</span></p>
      <a className="text-link" href="https://nikomedvedev.ru/other/vscodeshortcuts/hotkeys.html" target="blank">Горячие клавиши Visual Studio Code</a>
      <div className="note">
        <p>Ctrl + Shift + \ - Перейти к парной скобке</p>
        <p>F2 - Переименовать переменную</p>
        <p>Shift + Alt + F - Отформатировать документ</p>
        <p>F12 - Перейти к объявлению переменной</p>
        <p>Alt + Z - Включить/выключить перенос слов</p>
        <p>Ctrl + K, Z - Включить дзен-режим(зажать Ctrl + K, потом отпустить и зажать Z)</p>
      </div>

      <h2>Как установить bash по умолчанию</h2>
      <p>Ctrl+Shift+P &rarr; Preferences: Open User Settings &rarr; в файл settings.json добавляем строку:</p>
      <p>&quot;terminal.integrated.shell.windows&quot;: &quot;C:\\Program Files\\Git\\bin\\bash.exe&quot;</p>

      <h2>Как убрать квадратики цветовю</h2>
      <p>Ctrl+Shift+P &rarr; Preferences: Open User Settings &rarr; в файл settings.json добавляем строку:</p>
      <p>&quot;editor.colorDecorators&quot;: false</p>
    </section>

  );
}
export default Vscode;
