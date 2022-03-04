import React from 'react';

function InstructionsAndOperations() {

  return (
    <section className="conspect">
      <h2>Команды</h2>
      <p>Программа на JavaScript — это последовательность инструкций, то есть указаний браузеру выполнить какие-то действия. Инструкции выполняются последовательно, сверху вниз.</p>
      <p>Чтобы сказать JavaScript, что инструкция закончена, нужно поставить <span className="hl-2">&nbsp;точку с запятой</span> или перейти на новую строку. Новая строка правильно работает в большинстве случаев, а точка с запятой — всегда.</p>
      <p>Чтобы писать универсальные программы, мы должны были научиться:</p>
      <ol>
        <li>получать неизвестные данные;</li>
        <li>сохранять эти данные в переменные для дальнейшего использования;</li>
        <li>обрабатывать данные или проводить над ними операции.</li>
      </ol>

      <h2>Операции, операторы и операнды</h2>
      <p>Над разными типами операндов можно производить разные операции, поэтому важно понимать, данные какого типа хранятся в переменных. И здесь очень помогает команда console.log().</p>
      <h3>Операторы</h3>
      <p>Все операторы различаются по количеству аргументов, к которым они применяются. Например, существует оператор «-», который меняет знак числа на противоположный. Если такой оператор применяется к одному числу, то есть у него один аргумент — он называется  <span className="hl-7">унарным</span>.</p>
      <pre>{`
const firstNumber = 7;
const secondNumber = -firstNumber;

console.log(secondNumber); // В консоль выведется число -7
`}
      </pre>
      <p>Кроме унарных операторов, существуют операторы с двумя аргументами — бинарные. Например, бинарный «+» складывает два аргумента:</p>
      <pre>{`
const firstNumber = 7;
const secondNumber = 3;

console.log(firstNumber + secondNumber); // В консоль выведется число 10
`}
      </pre>
      <p>И, наконец, тернарный оператор:</p>
      <pre>{'условие ? выражение1 : выражение2'}</pre>
      <p>Это единственный оператор с тремя аргументами, что отражено в названии. Первый аргумент — это условие. Если оно истинно (равно true), оператор вернёт второй аргумент — выражение1. В ином случае он вернёт третий аргумент — выражение2.</p>
      <p>Что-то напоминает, да? По механике работы тернарный оператор похож на условную конструкцию if с альтернативной веткой else, но его синтаксис позволяет писать меньше строк кода. Сравним:</p>
      <pre>{`const booksCount = 19; // Количество книг, прочтённых за год
let result; // Сюда запишем результат сравнения booksCount с эталонным значением

// Сравним с помощью условной конструкции if
if (booksCount > 15) {
  result = 'План на год выполнен!';
} else {
  result = 'Читать и ещё раз читать';
}

// А теперь с помощью тернарного оператора
result = (booksCount > 15) ? 'План на год выполнен!' : 'Читать и ещё раз читать';`}
      </pre>
      <p>По сути оба фрагмента кода выполняют одно и то же действие — проверяют условие, а затем присваивают переменной первое или второе выражение в зависимости от истинности этого условия. Здесь переменной присваивается значение в зависимости от условия, и это пример грамотного использования тернарного оператора. В таком случае он позволяет избавиться от громоздкой условной конструкции и сделать код проще и короче.</p>

      <h4>Варианты использования</h4>
      <p>Значение, возвращаемое тернарным оператором, можно записать в переменную</p>
      <p>Также возможно использование множественных тернарных операций. В этом случае несколько операторов «?» будут идти подряд:</p>
      <pre>{`
const booksCount = 19;
let result;

result = (booksCount > 15) ? 'План на год выполнен!' :
  (booksCount > 10) ? 'Уже неплохо!' :
'Читать и ещё раз читать';
`}
      </pre>
      <p>Здесь каждое условие проверяется последовательно. Если первое условие истинно, переменной booksCount присваивается значение &apos;План на год выполнен!&apos;. В ином случае код выполняется дальше, и проверяется второе условие (booksCount &gt; 10).</p>
      <p>Такой код достаточно сложно читать, особенно если строк станет больше. Здесь будет уместнее использовать условную конструкцию if.</p>
      <p>Если нет ветки else, то вместо условия пишем null:</p>
      <pre>{`
ad.offer.checkin  == 0 || ad.offer.checkout == 0 ? adElement.querySelector('.popup__text--time')
.classList.add('hidden') : null;`}
      </pre>

      <h2>Конкатенация</h2>
      <p>Операция, когда мы «склеиваем» несколько значений, называется конкатенацией и в JavaScript выполняется с помощью знака плюс.</p>
      <pre>{`let name = 'Кекс';
paragraph.textContent = 'Вас зовут ' + name + '. Хорошего дня!';
console.log(paragraph.textContent);
// Выведет: Вас зовут Кекс. Хорошего дня!`}
      </pre>

      <h3>Используем конкатенацию</h3>
      <p>Склеивать можно обычные строки:</p>
      <pre>{`paragraph.textContent = 'Вас зовут ' + 'инструктор Кекс';
console.log(paragraph.textContent);
// Выведет: Вас зовут инструктор Кекс`}
      </pre>
      <p>А можно — строки и переменные (или свойства элементов). И, кстати, значений может быть больше двух:</p>
      <pre>{`let name = 'Кекс';
paragraph.textContent = 'Вас зовут ' + name + '. Хорошего дня!';
console.log(paragraph.textContent);
// Выведет: Вас зовут Кекс. Хорошего дня!`}
      </pre>
      Сообщение об удачной подписке состоит из двух строк и свойства email.value:
      <pre>{`
'Адрес ' + email.value + ' добавлен в список получателей рассылки.'`}
      </pre>
      <p>Как JavaScript понимает, какую операцию применить, сложение или конкатенацию? Он смотрит на тип операндов: если это строки, то они склеиваются, если это числа, то они складываются.</p>
      <p>Звёздочка — это знак умножения. Поэтому JavaScript пытается превратить строку &apos;2&apos; в число, и у него это получается. Затем числа 2 и 50 перемножаются, и получается 100.</p>

      <h2>Числа</h2>
      <p>Чтобы увеличить или уменьшить число в JavaScript, можно использовать разные записи:</p>
      <pre>{`// Полная запись
number = number + 2; // Значение переменной: 2
number = number - 2; // Значение переменной: 0

// Краткая запись
number += 2; // Значение переменной: 2
number -= 2; // Значение переменной: 0

// Увеличение числа на 1
number++; // Значение переменной: 1

// Уменьшение числа на 1
number--; // Значение переменной: 0`}
      </pre>

      <h2>Операторы сравнения и умножение</h2>
      <p>Операторы «больше или равно» и «меньше или равно» обозначаются двумя символами: угловой скобкой и знаком равно.</p>
      <p>Умножение в JavaScript обозначается звёздочкой:</p>
      <pre>{'console.log(3 * 10); // Выведет: 30'}</pre>
      <pre>{`1 &lt; 2;  // Оператор «меньше»
1 &lt;= 2; // Оператор «меньше или равно»
1 &gt;= 2; // Оператор «больше или равно»`}
      </pre>
      <p>Обратите внимание, операторы «меньше или равно» и «больше или равно» обозначаются двумя символами: угловой скобкой и знаком равно. Эти операторы работают так же, как в математике. Например, оператор «меньше или равно» вернёт true, если число слева меньше числа справа или если числа равны.</p>

      <h2>Оператор строгого равенства</h2>
      <p>Чтобы проверить, равны ли два значения, используем оператор строгого равенства. Он обозначается тремя знаками равно:</p>
      <pre>{`'a' === 'a'; // Результат: true
'a' === 'b'; // Результат: false`}
      </pre>
      <p>Оператор строгого равенства сравнивает два значения и возвращает true, если они равны, и false, если они не равны. Значения, которые проверяет оператор, называют операндами.</p>

      <h2>Оператор строгого неравенства</h2>
      <p>Оператор строгого неравенства работает противоположно оператору строгого равенства. Он сравнивает два значения и возвращает false, если значения равны, и true, если они не равны.</p>
      <p>Оператор строгого неравенства обозначается восклицательным знаком и двумя знаками равно:</p>
      <pre>{`'a' !== 'a'; // Результат: false
'a' !== 'b'; // Результат: true`}
      </pre>
      <p>В JavaScript также есть оператор нестрогого равенства == и оператор нестрогого неравенства !=. О них мы поговорим в одной из следующих глав.</p>

      <h2>Оператор логическое И</h2>
      <p>Чтобы объединить две части условия, используем логическое И. Оно обозначается двойным амперсандом — &amp;&amp;.</p>
      <pre>{`if (article.dataset.category !== filter.value && filter.value !== 'all') {
  article.classList.add('hidden');
}`}
      </pre>
      <p>Логическое И возвращает true, только если обе части условия возвращают true. Если хотя бы одна из частей вернёт false, то условие целиком также будет считаться ложным:</p>
      <pre>{`true && true;   // Результат: true
true && false;  // Результат: false
false && true;  // Результат: false
false && false; // Результат: false`}
      </pre>

      <h2>Оператор логическое ИЛИ</h2>
      <p>Логическое ИЛИ обозначается двумя вертикальными чертами и возвращает true, если хотя бы один из операндов возвращает true:</p>
      <pre>{`true || true;   // Результат: true
true || false;  // Результат: true
false || true;  // Результат: true
false || false; // Результат: false`}
      </pre>
    </section>
  );
}
export default InstructionsAndOperations;
