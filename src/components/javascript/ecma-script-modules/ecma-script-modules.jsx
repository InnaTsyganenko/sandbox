import React from 'react';

function EcmaScriptModules() {

  return (
    <section className="conspect">
      <h2>Briefly about innovations:</h2>
      <ul>
        <li>We define variables with let and const statements. For the purposes of the React documentation, you can consider them equivalent to var.</li>
        <li>We use the class keyword to define JavaScript classes. There are two things worth remembering about them. Firstly, unlike with objects, you don&apos;t need to put commas between class method definitions. Secondly, unlike many other languages with classes, in JavaScript the value of this in a method depends on how it is called.</li>
        <li>We sometimes use =&gt; to define &quot;arrow functions&quot;. They&apos;re like regular functions, but shorter. For example, x =&gt; x * 2 is roughly equivalent to function(x) &lcub; return x * 2; &rcub;. Importantly, arrow functions don&apos;t have their own this value so they&apos;re handy when you want to preserve the this value from an outer method definition.</li>
      </ul>

      <h1>Модуль</h1>
      <p>Модуль — это функционально законченный фрагмент программы, оформленный в виде отдельного файла с исходным кодом.</p>
      <p>Законченный фрагмент кода — это фрагмент, который выполняет вполне конкретную поставленную задачу и ничего лишнего. Мы будем писать модули в разных файлах, где 1 файл = 1 модуль, который выполняет одну конкретную задачу.</p>
      <p>Модули должны быть максимально универсальными.</p>

      <h2>Задачи модуля</h2>
      <h3>Пространство имён</h3>
      <p>Модуль изолирует пространство имён, чтобы переменные из одного модуля не попадали в другой модуль, как это бывает с глобальными переменными. Всё, что создаётся в модуле, остаётся в модуле.</p>
      <pre>{`
// файл src/mother.js
const name = 'Eve';

// файл src/father.js
const name = 'Adam';
`}
      </pre>
      <p>Таким образом мы создадим два модуля mother.js и father.js, где в каждом будет своя переменная name. Ни одна из них не попадёт в глобальную область видимости window, а значит, не будет никаких конфликтов.</p>
      <p>Раньше в JavaScript не было штатной возможности писать модульный код, поэтому разработчики выдумывали обходные пути. Например, использовали IIFE (Immediately Invoked Function Expression):</p>
      <pre>{`
// Файл mother.js
'use strict';
(function() {
window.mother = {
  name: 'Eve',
};
})();`}
      </pre>

      <h3>Зависимости</h3>
      <p>Модуль должен описывать и давать понимание, какие у него есть зависимости. Например, модуль может зависеть от других модулей.</p>
      <pre>{`/ файл сain.js
import { name } from './mother.js';

console.log('My mother is', name);`}
      </pre>
      <p>Мы видим, модуль сain.js зависит от модуля mother.js и выводит в консоль переменную name, полученную из этого модуля.</p>

      <h3>Интерфейс</h3>
      <p>Модуль должен описывать интерфейс — методы и свойства — которые он может предоставить другим модулям. Чтобы прошлый пример работал, нам нужно показать, что у него в интерфейсе есть свойство name, которое могут использовать другие модули.</p>
      <pre>{`// файл mother.js
const name = 'Eve';

export { name };`}
      </pre>
      <p>Модули ECMAScript 2015 выполняют все задачи, которые мы ставили в начале статьи:</p>
      <ul>
        <li>они ограничивают область видимости переменных и нам больше не нужно городить IIFE и подобное;</li>
        <li>у модулей есть синтаксис для описания зависимостей;</li>
        <li>у модулей есть синтаксис для описания интерфейса.</li>
      </ul>
      <pre>{`// файл mother.js
const name = 'Eve';

export { name };

// файл father.js
const name = 'Adam';

export { name };

// файл сain.js
import { name as motherName } from './mother.js';
import { name as fatherName } from './father.js';

const name = 'Сain';

console.log('My mother is', motherName);
console.log('My father is', fatherName);
`}
      </pre>
      <p>Чтобы браузер считал JS-файл модулем, его нужно подключить как модуль:</p>
      <pre>{'&lt;script type="module" src="..."&gt;&lt;/script&gt;'}</pre>
      <p>В противном случае модульные конструкции вроде import и export ничего кроме ошибки не вызовут. Кстати, модули по умолчанию работают в строгом режиме, поэтому нет больше необходимости писать &apos;use strict&apos;.</p>
      <p>Кроме того, модули, за счёт import и export непосредственно внутри JavaScript кода, частично решают проблему порядка подключения JS-файлов. С модулями об этом можно больше не думать.</p>

      <h2>Экспорт и импорт</h2>
      <p>Существует два способа такого взаимодействия и несколько их комбинаций. Начнём с самого простого, и в то же время самого надёжного способа.</p>
      <h3>Именованный экспорт и импорт</h3>
      <pre>{`Экспорт:

// файл mother.js
const name = 'Eve';
const age = 18;

export const sex = 'female'; // экспорт при объявлении

export { name, age }; // экспорт уже объявленных переменных

Импорт:

// файл сain.js
import { name } from './mother.js';

console.log('My mother is', name);
`}
      </pre>
      <p>Имена переменных должны совпадать полностью. Если запрашиваемой переменной нет среди экспортируемых, то будет выкинута ошибка, и модуль не загрузится.</p>
      <p>Обратите внимание: импортировать всё, что экспортирует модуль, необязательно.</p>
      <p>Экспортировать одну и ту же переменную дважды нельзя</p>
      <p>Обратите внимание, импортированная переменная не создаётся в модуле. Поэтому будьте внимательны при работе с импортированными переменными. Ведь сложные типы данных, вроде объектов или массивов, передаются по ссылке, и их можно нечаянно испортить.</p>
      <pre>{`// файл items.js
const items = ['one', 'two', 'three'];

export { items };

// файл filter.js
import { items } from './items.js';

items.sort(); // испортили массив в модуле items.js, хотя сортируем в filter.js
`}
      </pre>
      <p>Поэтому не забывайте про Object.assign() и Array.prototype.slice() и им подобные методы, когда работаете с импортированной структурой. Эти методы копируют массив.</p>
      <p>С примитивами тоже не всё так просто. Даже если импортируете let-переменную, по спецификации движок JavaScript не позволит вам изменить её. Она считается read-only переменной (доступной только для чтения).</p>

      <h2>Переименованный экспорт и импорт</h2>
      <p>Импортируемые переменные можно переименовывать:</p>
      <pre>{`
// файл сain.js
import { name as motherName } from './mother.js';
import { name as fatherName } from './father.js';

const name = 'Сain';

console.log('My mother is', motherName);
console.log('My father is', fatherName);
console.log('My name is', name);
`}
      </pre>
      <p>Таким же образом можно переименовать переменную при экспорте. Случай более редкий, но такая возможность есть.</p>

      <h3>Экспорт по умолчанию</h3>
      <p>Синтаксически экспорт по умолчанию отличается вводом дополнительного ключевого слова default:</p>
      <pre>{`// файл mother.js
const mother = {
    name: 'Eve',
    age: 18,
    sex: 'female',
};

export default mother;`}
      </pre>
      <p>Фигурные скобки не нужны, поскольку экспортировать по умолчанию можно лишь одну переменную. Поведенческое отличие такого экспорта от именованного — возможность экспортировать значение, а не переменную. Из-за этого отличается и импорт такого значения «по умолчанию». Раз у нас может не быть переменной, то под каким именем импортировать? Под любым!</p>
      <pre>{`
// файл mother.js
export default {
    name: 'Eve',
    age: 18,
    sex: 'female',
};

// файл сain.js
import father from './mother.js';`}
      </pre>

      <h3>Экспорт построчно или экспорт группой</h3>
      <pre>{`// файл mother.js
const name = 'Eve';
const age = 18;

export const sex = 'female';

export { name, age };`}
      </pre>
      <p>Ради единого стиля кодирования стоит выбрать что-то одно: либо экспорт при объявлении, либо в конце файла группой. Лучше второй, потому что он нагляднее.</p>

      <h3>Импортировать как…</h3>
      <p>Когда у модуля только именованный экспорт, перечислять все переменные — трудоёмкая задача. Для этого можно воспользоваться конструкцией import * и импортировать все именованные экспорты в одно пространство имён:</p>
      <pre>{`// файл mother.js
const name = 'Eve';
const age = 18;

export const sex = 'female';

export { name, age };

// файл сain.js
import * as mother from './mother.js';
`}
      </pre>
      <p>Будьте внимательны, такой импорт игнорирует экспорт по умолчанию, даже если он есть в модуле. А ещё такой способ является небезопасным, потому что мы импортируем всё и сразу, при этом не знаем, что именно.</p>

      <h3>Проксирование</h3>
      <p>Иногда удобно, чтобы один файл экспортировал значения сразу нескольких.</p>
      <pre>{`// файл mother.js
const name = 'Eve';

export { name as motherName };

// файл father.js
const name = 'Adam';

export { name as fatherName };

// файл parents.js
export * from './mother.js';
export * from './father.js';

// файл сain.js
import { motherName, fatherName } from './parents.js';

console.log('My mother is', motherName);
console.log('My father is', fatherName);
`}
      </pre>

      <h3>Импорт без переменной</h3>
      <p>Когда нам нужно только выполнить код модуля, достаточно его просто импортировать:</p>
      <pre>{`
// файл alert.js
alert('Hello, world!');

// файл index.js
import './alert.js';
`}
      </pre>

      <h3>Когда что использовать</h3>
      <p>Если имя переменной имеет важность или модуль экспортирует несколько значений, лучше пользоваться именованным экспортом.</p>
      <p>Если модуль экспортирует ровно одно значение, то лучше воспользоваться конструкцией export default.</p>
      <p>Кекс рекомендует всегда использовать именованный экспорт. И только в одном случае — чтобы не нарушать критерий — используйте экспорт по умолчанию, когда экспортируете класс из модуля.</p>
      <p>Лучше экспортировать методы, чем константы.</p>

      <h2>Нюансы</h2>
      <p>import и export не могут быть вложены в функции или другие блоки кода</p>
      <p>Импортированные переменные не поднимаются, поэтому import всегда должен быть в начале файла</p>
      <p>Если импортировать переменную, которая в модуле не экспортируется, получим ошибку.</p>

      <h2>Пути импорта</h2>
      <p>Теперь давайте рассмотрим, как import загружает скрипт по URL. Путь может быть указан как в одинарных, так и в двойных кавычках</p>
      <p>Путь может быть абсолютным или относительным. Поддерживаются:</p>
      <pre>{`import 'https://jakearchibald.com/utils/bar.js'; // URL
import '/utils/bar.js'; // Абсолютный путь относительно домена
import './bar.js'; // Относительный путь от текущего модуля
import '../bar.js'; // Относительный путь от родительской директории`}
      </pre>
      <p>Такой импорт используется для подключения сторонних библиотек из пакетных менеджеров вроде npm и не является частью стандарта ECMAScript:</p>
      <pre>{`
import 'bar.js';
import 'utils/bar.js';`}
      </pre>
      <p>Если при загрузке модуля или его дочерних модулей (тех, которые он импортирует) произошла ошибка, все родительские модули (которые его импортируют) не будут загружены.</p>
      <p>Путь в конструкции import является константой и не может быть сборным:</p>
      <pre>{`import 'https://funny-random-script.zone/' + Math.random() + '/script.js'; // Так нельзя
import 'https://funny-random-script.zone/&dollar;{Math.random()}/script.js'; // И так нельзя
import 'https://funny-random-script.zone/' + 'js/' + 'script.js'; // Так тоже нельзя
      `}
      </pre>
      <p>Либо прочитан из переменной:</p>
      <pre>{`const path = 'https://funny-random-script.zone/js/script.js';
import path; // Даже так нельзя`}
      </pre>
    </section>
  );
}
export default EcmaScriptModules;
