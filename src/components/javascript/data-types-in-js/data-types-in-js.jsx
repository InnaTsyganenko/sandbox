import React from 'react';

function DataTypesInJS() {

  return (
    <section className="conspect">
      <h1>Типы данных в JS</h1>
      <p>Типы данных бывают простые и сложные (или примитивные и объектные). Cложные типы данных передаются по ссылке. Примитивные — по значению.</p>
      <p>Узнать что за тип перед нами можно с помощью операнда typeof:</p>
      <pre>{'console.log(typeof(operand));'}</pre>
      <p>Стандарт ECMAScript определяет 6 примитивных типов данных.</p>

      <h3>Передача по значению</h3>
      <pre>{`let a = 5; // создаём переменную a со значением 5. 5 это число, а значит примитив.
const b = a; // создаём переменную b и передаём ей значение переменной a.
Получаем две совершенно независимые переменные, хотя их значения равны.
console.log('a =', a); // a = 5
console.log('b =', b); // b = 5
`}
      </pre>
      <p>В том, что переменные никак не связаны, мы можем убедиться, изменив одну из них:</p>
      <pre>{`
let a = 5;
const b = a;
a += 3;
console.log('a =', a); // a = 8
console.log('b ='', b); // b = 5
`}
      </pre>
      <p>Значение b осталось прежним, значение a — изменилось. Потому что в строке const b = a; число 5, примитив, передался по значению. Это и есть передача «по значению». Так происходит во всех примитивных типах.</p>

      <h3>Передача по ссылке</h3>
      <pre>{`
const foo = {a : 1};
const bar = foo;
foo.a++;
console.log('foo.a =', foo.a); // foo.a = 2
console.log('bar.a =', bar.a); // bar.a = 2
`}
      </pre>
      <p>В результате изменились значения обоих объектов, хотя мы изменяли только свойство объекта foo.</p>
      <p>Всё дело в том, что сложный тип хранит в переменной не само значение (объект), а ссылку на него. И передаёт при присвоении не сам объект, а ссылку на него. То есть и foo, и bar в нашем примере ссылаются на один и тот же объект, который хранится в памяти компьютера. И если объект подвергся изменению, обе переменные покажут одинаковый результат. Это и есть передача «по ссылке». Так происходит во всех сложных типах.</p>

      <h3>Числа</h3>
      <p>В JavaScript есть только два типа для хранения чисел: <span className="hl-7">Number и BigInt</span>.</p>
      <p>Числа можно задавать в различных видах, однако их внутреннее представление от этого не изменится.</p>
      <pre>{`
  const decimal = 1234;
  const hexadecimal = 0×4d2;
  const scientific = 1.234e3;
  console.log(decimal === hexadecimal, hexadecimal === scientific);
`}
      </pre>
      <p>Числа могут быть положительными и отрицательными, целыми и дробными. Кроме того, существуют специальные значения:</p>
      <pre>{`
  console.log(1/0); // Infinity, бесконечность
  console.log(-1/0); // -Infinity, минус бесконечность
  console.log(0/0); // NaN, not a number, «не число»
`}
      </pre>
      <p>В большинстве языков программирования, попытка поделить на нуль или совершить какую-то другую запрещённую операцию приведёт к ошибке. JavaScript ошибку не бросит, а вернёт специальное значение. С бесконечностью и минус бесконечностью всё интуитивно понятно.</p>
      <p>А вот NaN — довольно контринтуитивная вещь. Начнём с того, что «не число» является числом:</p>
      <pre>{`
  console.log(typeof NaN); // number
`}
      </pre>
      <p>NaN — единственное число и вообще единственное значение в JavaScript, которое не равно вообще ничему. В том числе самому себе.</p>
      <pre>{`
  console.log(NaN === NaN); // false
`}
      </pre>

      <h3>Строки</h3>
      <p>Последовательности символов произвольной длины. Может включать в себя буквы, цифры, пробелы, знаки препинания — или даже вообще ничего. Пустая строка — тоже строка.</p>
      <p>Чтобы строки можно было отличить от окружающего кода, они заключаются в кавычки, обычные или двойные. Выбор кавычек не влияет на значение строки и служит исключительно для удобства.</p>
      <pre>{`const singleQuote = 'строка';
const doubleQuote = "строка";
console.log(singleQuote === doubleQuote); // true
`}
      </pre>
      <p>Ещё один контринтуитивный момент: строка может включать в себя символ переноса строки и таким образом фактически состоять из нескольких строк.</p>
      <pre>const multiline = &quot;Строка раз \n Строка два&quot;;</pre>
      <p>Здесь \n — это не то, что кажется. Выведя этот текст в консоль, мы не увидим косую черту и латинскую букву «n». Вместо них возникнет перенос строки. Сочетание символов \n — это одна из так называемых <span className="hl-1">управляющих последовательностей</span>. Такие последовательности начинаются с символа обратного слэша и, хотя и состоят из нескольких символов, «на выходе» дают один символ.</p>
      <p>С помощью управляющих последовательностей можно кодировать символы, которые нельзя вставить просто так, не запутав интерпретатор. Например, вставить двойную кавычку посреди строки, заключённой в двойные кавычки.</p>
      <p>Неправильно:</p>
      <pre>{`
  const error = "этот код даже " не запустится";
`}
      </pre>
      <p>Правильно:</p>
      <pre>{'const success = "с этой строкой &bsol;" всё в порядке";'}</pre>

      <h3>Логический (булев) тип</h3>
      <p>Один из самых простых типов, в котором есть только два значения: true (истина) и false (ложь). Этот тип назван в честь английского математика Джорджа Буля, который изобрёл алгебру имени себя, где есть только эти два значения.</p>
      <p>Несмотря на свою простоту, это самый важный и самый фундаментальный тип в программировании. Именно булевы значения используются в качестве условий в операторе ветвления (if...then...else).</p>

      <h3>undefined и null</h3>
      <p>Ещё одна причина, по которой программисты на других языках недолюбливают JavaScript. Целых два значения, означающих «ничего», и для каждого из них отведён свой отдельный тип.</p>
      <p>Несмотря на то, что оба они символизируют отсутствие значения, между ними есть некоторая разница.</p>
      <p>null используют там, где хотят явным образом показать отсутствие значения.</p>
      <p>undefined возникает там, где значение не вернулось явно. Например, undefined — это значение аргумента, который не был передан в функцию, а также значение, которое вернёт функция, если она не возвращает значение явно.</p>
      <pre>{`
  function example(arg) {
    console.log(arg);
  }
  const result = example(); // undefined в консоли
  console.log(result); // снова undefined в консоли
`}
      </pre>
      <p>Правило следующее — если вы сами присваиваете или передаёте значение, это должно быть null, а не undefined. Используйте undefined только в проверках, что значение существует.</p>

      <h3>Symbol</h3>
      <p>Шестой примитивный тип данных — Symbol. Появился в ECMAScript 2015. В курсе этот тип не рассматривается и не применяется. За более подробной информацией обратитесь к MDN.</p>

      <h3>Ссылочные типы</h3>
      <p>Значения, не являющиеся примитивными, называются объектными, или ссылочными.К ним относятся <span className="hl-7"> объекты, функции, массивы</span>.</p>
      <p>Все они представляют тип <span className="hl-2">object</span></p>
      <p>В отличие от примитивных значений, объекты могут иметь свойства. Доступ к свойствам можно получить по его имени через точку или через квадратные скобки. Значением свойства может быть что угодно, начиная от примитива и заканчивая ещё одним объектом.</p>
      <pre>{`
  const obj = {
    a: 1,
    b: 'какая-то строка'
  };

  console.log(obj.a);
  console.log(obj[‘b’]);
`}
      </pre>
      <p>Фундаментальное отличие ссылочных типов от примитивных можно проиллюстрировать следующим кодом:</p>
      <pre>{`
  const a = 1;
  let b = a;
  b = 2;
  console.log(a); // выведется единица, от манипуляций с переменной b значение переменной a не изменится
  const object = {a: 1};
  const anotherObject = object;
  anotherObject.a = 2;
  console.log(object.a); // выведется двойка
`}
      </pre>
      <p>Значение ссылочного типа — это не сами данные, а ссылка на область памяти, где хранятся данные. Если мы скопируем эту ссылку и изменим данные, используя эту копию, то данные, на которые указывает исходная ссылка, также изменятся — поскольку это одни и те же данные!</p>
      <p>Технически все значения ссылочного типа являются разновидностями объектов.</p>
      <p>Однако некоторые разновидности стоит рассмотреть отдельно. С точки зрения JavaScript, функция — это специальный вид объекта, который можно вызвать.</p>
      <p>Массив — это также особый вид объекта, оптимизированный для хранения серий значений по числовым индексам. Тем не менее, и функцию, и массив при желании можно использовать как обычный объект. Например, создавать у них произвольные свойства.</p>
      <pre>{`
  // Массив
  [1, 2, 3, 4, 5]

  // Объект
  {month: 'june', day: 15}

  // Вывод массива в консоль
  console.log([1, 2, 3, 4, 5]);

  // Вывод объекта в консоль
  console.log({month: 'june', day: 15});
`}
      </pre>

      <h2>Преобразование типов</h2>
      <p>Преобразование типов (type conversion) означает передачу данных из одного типа данных в другой. Неявное преобразование происходит, когда компилятор автоматически присваивает (назначает) типы данных, но исходный код также может явно требовать преобразования для завершения. Например, в случае инструкции 5+2.0, число с плавающей точкой 2.0 неявно преобразуется в целое число, но в случае инструкции Number(&quot;0x11&quot;) строка &quot;0x11&quot; явно преобразуется в типизированное число 17.</p>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Data_structures" target="_blank" rel="noopener noreferrer">Типы данных JavaScript и структуры данных</a></p>
      <p><a href="https://medium.com/@sergeybulavyk/%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D1%82%D0%B8%D0%BF%D0%BE%D0%B2-%D0%B2-javascript-35a15ddfc333" target="_blank" rel="noopener noreferrer">Преобразование типов в JavaScript</a></p>

      <h3>Динамическое приведение типов</h3>
      <p>У всех операторов есть нечто общее. Они имеют смысл лишь для определённых типов данных. Например, мы умеем складывать числа, но непонятно, как складывать, скажем, объекты. Мы можем применить оператор «логическое ИЛИ» к булевым значениям, но что значит «Вася ИЛИ Петя»?</p>
      <p>Что происходит, когда программист пытается применить оператор к данным неподходящего типа?</p>
      <p>Зависит от того, на каком языке он программирует. Одни языки моментально выдадут ему ошибку. Другие попытаются найти какой-то смысл в том, что он написал. Они попробуют преобразовать значения в такой тип, для которого этот оператор будет иметь смысл. Такое преобразование и называется динамическим приведением типов.</p>
      <p>Допустим, мы пытаемся разделить строку &apos;4&apos; на строку &apos;2&apos;. Деление имеет смысл только для чисел, поэтому JavaScript пытается превратить строки в числа. Он без труда догадывается, что строка &apos;4&apos; — символизирует число 4, а строка &apos;2&apos; — число 2. Поэтому в результате получится 4 / 2 = 2.</p>
      <p>Если мы попытаемся разделить строку &apos;Вася&apos; на строку &apos;Петя&apos;, JavaScript будет действовать аналогично. Разница в том, что ни &apos;Вася&apos;, ни &apos;Петя&apos; к числу разумным образом не приводится. Поэтому JavaScript превратит каждую из этих строк в специальное значение NaN, о котором мы говорили выше. А не-число, делённое на не-число, в результате опять даёт не-число.</p>
      <p>Аналогично работают и другие типы операторов. Если логический оператор получает на вход строку, он пытается превратить её в true или false. Если мы обращаемся к свойству объекта и в квадратных скобках указываем булево значение, это значение превращается в строку, потому что имена свойств объектов должны быть строками.</p>
      <h3>Основные правила динамического приведения типов</h3>
      <p>Рассмотрим лишь частные случаи. Арифметические операторы всегда приводят свои аргументы к числовому типу. Исключение — оператор «+», из-за своего двойного назначения. Если хотя бы один из аргументов — строка, то плюс считает, что он оператор конкатенации, и пытается привести другой аргумент тоже к строке.</p>
      <pre>{`
  console.log('5' - '3'); // получится число 2
  console.log('5' + '3'); // получится строка ‘53’
`}
      </pre>
      <p>Если нужно привести нечисловое значение к числовому типу, можно воспользоваться этой особенностью и применить к нему унарный оператор «+». Применённый к числу, он не сделает ничего, однако применённый к чему-то другому, он благодаря механизму динамического приведения типов превратит это «что-то» в число.</p>
      <pre>{`
  console.log( (+'5') + (+'3')); // будет число 8
`}
      </pre>
      <p>Как говорилось выше, плюс работает как оператор конкатенации, если хотя бы один аргумент — строка. Это можно использовать для приведения значений к строковому типу.</p>
      <pre>{`
  console.log(false + ''); // ‘false’
`}
      </pre>
      <p>Логические операторы приводят свои аргументы к булеву типу. Здесь, однако, важно понимать, что операторы «& &» и «||» — это не совсем то же самое, что логические операции «И» и «ИЛИ».  Например, распишем подробнее, как действует оператор «||». Он берёт свой первый аргумент и приводит его к логическому типу.  Если он равен true, то оператор возвращает свой первый аргумент в исходном виде. Если нет — свой второй аргумент, опять же в исходном виде. Приведение к логическому типу используется только для выяснения, какой аргумент вернуть в качестве результата, но не применяется к самому результату.</p>
      <pre>{`
  console.log('Вася' && 'Петя') // 'Вася' приводится к true, так что выведется 'Петя'
`}
      </pre>
      <p>В отличие от них, оператор отрицания «!» возвращает значение булева типа. Чтобы привести произвольное значение к булеву типу, можно применить оператор отрицания дважды.</p>
      <pre>{`
  console.log(!!null); // false
`}
      </pre>
      <h3 className="hl-5">Не используйте динамическое приведение типов</h3>
      <p>Как можно меньше использовать динамическое приведение типов. Да, вы не ослышались. Это очень удобный механизм, позволяющий записывать коротко то, что в языке без него вышло бы многословно.</p>

      <p>Однако нужно понимать, что когда этот механизм проектировался, никто и не предполагал, какую роль займёт язык JavaScript 25 лет спустя. Изначально язык предназначался для написания простейших скриптов, вроде обработчика нажатия кнопки, людьми, далёкими от программирования. И он был спроектирован так, чтобы как можно меньше отпугивать их сложными концепциями. Сейчас, когда на JS пишутся полноценные приложения, былая простота зачастую оборачивается головной болью.</p>

      <p>Выражения, использующие динамическое приведение типов, проще писать, но сложнее читать и искать в них ошибки. В сложных случаях лучше привести аргументы к нужным типам заранее. <span className="hl-6">Динамическое приведение типов стоит использовать лишь в самых простых выражениях.</span></p>

      <h2>Сравнение</h2>
      <p>Сравнение примитивных типов происходит по значению</p>
      <p>Строки сравниваются посимвольно с учётом алфавитного порядка букв, пока не закончится одно из слов.</p>
      <p>Если значения примитивов разных типов, то при сравнении JavaScript приводит их к единому:</p>
      <pre>{`
const a = '111';
const b = 111;
console.log('a == b ?', a == b); // a == b ? true
`}
      </pre>
      <p>Сравнение сложных типов происходит по ссылке, то есть переменные сложных типов равны только в случае, если ссылаются на один и тот же объект в памяти компьютера.</p>
      <p>Операторы равенства == и строгого равенства === для сложных типов равнозначны.</p>
      <pre>{`const foo = {a : 1};
const bar = foo;
console.log(foo == bar); // true`}
      </pre>
      <p>Несмотря на то, что синтаксис присвоения объектов выглядит точно также, как и у примитивов, при присвоении объектов bar = foo в bar передалась ссылка на объект {'{a : 1}'}, и теперь и foo и bar ссылаются на один и тот же объект.</p>
      <pre>{`const foo = {a : 1};
const bar = {a : 1};
console.log(foo == bar); // false`}
      </pre>
      <p>Здесь в переменных bar и foo лежат ссылки на объекты, у которых одинаковое содержимое, но для JavaScript это два разных объекта в памяти компьютера, а значит ссылки на них разные, поэтому эти объекты не равны.</p>

      <h2>Как долго объект хранится в памяти</h2>
      <p>Жизненный цикл объекта в JavaScript продолжается от создания объекта до потери последней ссылки на него. То есть, объект существует до тех пор, пока существует хотя бы одна переменная, которая на него ссылается. Как только объект теряет последнюю ссылку на себя, он подлежит утилизации.</p>
      <p>Это связано с тем, что при жизни объекты занимают место в памяти. И если объект теряет все ссылки на себя, значит он не используется, и можно освободить память, которую занимает этот «ненужный» объект. Функцию утилизации «ненужных» объектов выполняет так называемый «сборщик мусора». В JavaScript процесс уборки спрятан под капотом и никак не управляется разработчиком.</p>
      <p>Ситуация, когда объект не используется, но на него существуют ссылки и он не может быть из-за этого утилизирован и продолжает занимать память, называется — «утечкой памяти». Не допускать «утечек памяти» необходимо во время проектирования и разработки приложения.</p>
    </section>
  );
}
export default DataTypesInJS;
