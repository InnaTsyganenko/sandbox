import React from 'react';
import {Link} from 'react-scroll';

function DataStructures() {

  return (
    <section className="conspect">
      <h1>Структуры данных в JS</h1>
      <div className="contents-container">
        <p className="contents-paragraph">Contents:</p>
        <ul className="contents-list">
          <li>
            <Link
              to="lists-and-sets"
              className="contents-link"
              smooth
              offset={-20}
              duration={500}
            >Списки и множества. Array и Set
            </Link>
            <ul>
              <li>
                <Link
                  to="set"
                  className="contents-link"
                  smooth
                  offset={-20}
                  duration={500}
                >Set
                </Link>
              </li>
              <li>
                <Link
                  to="weakset"
                  className="contents-link"
                  smooth
                  offset={-20}
                  duration={500}
                >WeakSet
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              to="dictionaries"
              className="contents-link"
              smooth
              offset={-20}
              duration={500}
            >Словари. Object и Map
            </Link>
          </li>
          <li>
            <Link
              to="destructuring-in-js"
              className="contents-link"
              smooth
              offset={-20}
              duration={500}
            >Деструктуризация в JS
            </Link>
          </li>
        </ul>
      </div>
      <p className="hl-2"><b>Структура данных</b> — это способ организации информации.</p>
      <p className="hl-3">“Bad programmers worry about the code. Good programmers worry about data structures and their relationships” – Линус Торвальдс, создатель Linux и git</p>
      <p>При создании JavaScript была цель сделать новый язык небольшим и лаконичным для запуска в браузере, поэтому оставили только базовые вещи (массивы и объекты), но сделали так, чтобы их можно было использовать множеством способов. Например, одни лишь JS-массивы можно использовать для реализации структур данных: массивы, списки, стеки, очереди, графы, префиксные деревья.</p>

      <h2 id={'lists-and-sets'}>Списки и множества. Array и Set</h2>
      <p>Список — это структура данных, в которой элементы расположены в определённом порядке и этот порядок важен. Элементы списка пронумерованы и доступ к отдельным элементам производится только по порядковому номеру. В список можно добавлять новые элементы и изменять или удалять уже имеющиеся. Одни и те же элементы могут повторяться по несколько раз. Порядок элементов критически важен.</p>
      <p>Это описание очень напоминает массив, но на деле всё немного сложнее. Массив — это действительно список, и мы используем именно массивы, чтобы создавать списки в JS. Но кроме массива даже в JS есть очень много других списков, что уж говорить про другие языки.</p>
      <p>В JS, кроме массивов есть много структур с пронумерованными элементами: NodeList, HTMLElementsList (то, что возвращается из querySelectorAll) и другие DOM-коллекций, коллекции для работы с классами DOM-элемента ClassList, объект arguments для работы с аргументами, переданными в функцию. Они отличаются друг от друга набором методов. Например, в ClassList заведены специальные методы, чтобы можно было быстро заменить один класс на другой (toggle). А в массивах есть метод для превращения всего массива в одно значение (reduce), что в работе классами никогда не используется.</p>
      <pre>{`// Если я буду переходить по этому маршруту
// из точки в точку в случайном порядке,
// мой маршрут окажется неоптимальным:
// все деньги уйдут на бензин, придётся
// экономить на пасте и лимончелло
const routePoints = [
  'Genova',
  'Milano',
  'Torino',
  'Como',
  'Lugano',
];`}
      </pre>
      <pre>{`// Для того, чтобы купить все эти товары,
// необязательно идти строго по порядку.
const groceriesToBuy = [
  'Огурцы',
  'Салат',
  'Лук',
  'Булочка',
  'Кунжут',
];

// Если хочется найти какой-то конкретный
// элемент, придётся или сначала перебрать
// весь список, чтобы найти его или запоминать
// номер, что неудобно.
const itemToFind = 'Лук';
let itemIndexInList = -1;

for (let i = 0; i < groceriesToBuy.length; i++) {
  const item = groceriesToBuy[i];
  if (item === itemToFind) {
    console.log('Да, мне всё-таки нужно купить &dollar;{itemToFind}!');
    itemIndexInList = i;
    break;
  }
}

// Если записать покупки в объект, то
// станет очень удобно проверять, есть
// ли в списке что-то конкретное.
const groceriesToBuy = {
  'Огурцы': 2,
  'Салат': 1,
  'Лук': 1,
  'Булочка': 1,
  'Кунжут': 8,
};

const howManyOnionsShouldIBuy = groceriesToBuy['Лук'] || 0;

console.log(howManyOnionsShouldIBuy); // 1`}
      </pre>
      <p>Очень часто списки используются там где не нужно и пример со списком покупок в этом плане очень показателен. Если порассуждать с точки зрения структуры данных, то список покупок никакой на самом деле не список: нам не важен порядок элементов, у товаров в этом списке нет номеров, нам просто нужен какой-то вариант, чтобы их разместить.</p>
      <p>Если говорить о наборе покупок (пока будем использовать слово набор, раз мы поняли, что это не список), то операции над ним будут совсем не теми, которые мы производим над списком: мы не перебираем покупки по порядку, мы не превращаем их в другой список. Единственное, что мы делаем с этим набором — мы сверяемся с ним. Когда вы смотрите на товар на полке магазина, вам важно убедиться, есть ли этот товар в вашем наборе покупок. Для такой задачи есть отдельная структура данных, которая называется множество.</p>
      <p>Множество состоит из уникальных элементов, то есть элементы множества не повторяются. У них нет ключей, доступ к элементам производится по значению. Мы можем добавлять или удалять элементы, но главная операция, которую мы производим над множеством — это проверка, есть ли в нём тот или иной элемент.</p>
      <p>В ES2015 появилась возможность создать множество с помощью Set.</p>

      <h3 id={'set'}>Set</h3>
      <p>Set — это коллекция. Она позволяет хранить множество уникальных значений без ключей. Чтобы воспользоваться этой коллекцией необходимо создать экземпляр объекта Set. Для добавления нового значения следует воспользоваться методом add().</p>
      <pre>{`const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);

console.log(mySet);`}
      </pre>
      <p>Создать Set можно из заранее подготовленного массива. Обратите внимание, в коллекции остались только уникальные значения.</p>
      <pre>{`const numbers = [1, 3, 4, 4, 1];
const mySet = new Set(numbers);`}
      </pre>
      <p>По коллекции Set можно итерироваться с помощью for..of или метода forEach().</p>
      <pre>{`const numbers = [1, 3, 4, 4, 1];
const mySet = new Set(numbers);

// Итерация с помощью цикла for..of
for (const value of mySet) {
  console.log(value);
}

// Итерация с помощью метода forEach()
mySet.forEach((value) => console.log(value));`}
      </pre>
      <p>При помощи метода from объекта Array мы можем получить массив из коллекции Set. Таким образом становится легко написать функцию, которая принимает массив неуникальных значений, а возвращает новый массив с уникальными значениями.</p>
      <pre>{`const numbers = [1, 3, 4, 4, 1];
const mySet = new Set(numbers);

const uniqArray = Array.from(mySet);
console.log(uniqArray);`}
      </pre>
      <p>И напоследок несколько методов…</p>
      <pre>{`const numbers = [1, 3, 4, 4, 1];
const mySet = new Set(numbers);

// Удалить элемент коллекции
mySet.delete(1);
console.log(mySet);

// Проверить наличие значения
console.log(mySet.has(4));

// Количество элементов в коллекции
console.log(mySet.size);

// Очистить
mySet.clear();
console.log(mySet);`}
      </pre>
      <pre>{`// Для того, чтобы создать множество,
// в JS используется конструктор Set
let groceries = new Set();

// Множество можно заполнять вручную,
// добавляя в него элементы по одному
groceries.add('Огурцы');
groceries.add('Салат');
groceries.add('Лук');
groceries.add('Булочка');
groceries.add('Кунжут');

// Однако, гораздо удобней создать множество
// на основе массива (или другого Iterable
// объекта, но о них мы с вами поговорим позже).
// Обратите внимание, что, если в массиве будут
// повторяющиеся элементы (в списках так делать
// можно), то в множество попадёт только первое
// упоминание, последующие будут проигнорированы
groceries = new Set(['Огурцы', 'Огурцы', 'Салат', 'Лук', 'Булочка', 'Кунжут']);

// Теперь, когда мы создали множество, мы очень
// легко, всего за одну операцию (так же как в примере
// с объектом выше) можем проверить, входит ли в него
// нужный нам элемент или нет
if (groceries.has('Пиво')) {
  console.log('Посмотрю сегодня футбол');
}`}
      </pre>

      <h3 id={'weakset'}>WeakSet</h3>
      <p>WeakSet — это вид Set, предназначенный для более эффективной работы с памятью. WeakSet используется реже, чем Set. Главное отличие в том, что, если в Set можно помещать любые типы данных — числа, строки, объекты и так далее, то внутри WeakSet могут быть только объекты. Как раз засчёт этой особенности WeakSet более оптимально работает с памятью. Это возможно благодаря тому, что объект существует в памяти только до тех пор, пока на него есть ссылки. Как только ссылки на объект заканчиваются, объект удаляется из памяти и, если такой объект хранился в WeakSet, он также будет автоматически удалён и из этого множества.</p>
      <p>Мы поняли, когда нужно использовать списки, а когда вместо них подходят другие структуры и разобрали, что за структуры это могут быть. Теперь, вернёмся к спискам и поговорим о них подробней. Чаще всего мы будем в качестве списков использовать именно массивы, поскольку это самый простой и доступный способ описать последовательность элементов в JS.</p>

      <h2 id={'dictionaries'}>Словари. Object и Map</h2>
      <p>Словарь — это структура данных, в которой у элементов нет определённого порядка, зато есть название. Такое название называют ключом. Доступ к элементам словаря производится по ключу. В словарь можно добавлять новые элементы и изменять или удалять уже имеющиеся. Одни и те же элементы могут повторяться по несколько раз, но ключи повторяться не могут.</p>
      <p>Самый простой словарь в JS — это объект. Его особенность в том, что все его ключи строковые. Это значит, что в качестве ключа нельзя использовать булево значение или объект (число, кстати, можно, но это другая история).</p>
      <p>Кроме объектов, для создания словарей в JS можно использовать Map (о них мы поговорим позже).</p>
      <p>Словари используются когда нам нужно сопоставить одни данные с другими. В примере ниже словарь используется для описания логики масштабирования картинки на странице.</p>
      <pre>{`<img src="kitty.jpg">
<form id="picture-scale">
  <label><input type="radio" name="scale" value="smallest"> Малюсенький</label>
  <label><input type="radio" name="scale" value="small"> Маленький</label>
  <label><input type="radio" name="scale" value="normal" checked> Обычный</label>
  <label><input type="radio" name="scale" value="big"> Большой</label>
</form>
const filterValueToScale = {
  'smallest': 0.25,
  'small': 0.5,
  'normal': 1,
  'big': 1.5,
};

const form = document.querySelector['.picture-scale'];
const pic = document.querySelector('img');

form.onchange = () => {
  // Чтобы понять как задать размер картинки,
  // не нужно писать много условий, достаточно
  // обратиться к словарю и прочитать оттуда
  // какой масштаб соответствует выбранному фильтру
  const value = filterValueToScale[form['scale'].value];
  pic.style.transform = 'scale(&dollar;{value})';
};`}
      </pre>
      <p>Не всегда Object будет идеально работать как словарь. Есть как минимум, два случая, когда он не подойдёт. Во-первых, Object не перечисляемый, поэтому если у вас появится задача написать цикл по объекту, придётся использовать неудобный и устаревший for..in вместо модного и красивого for..of. Во-вторых, ключи в объекте могут быть только строковыми (на самом деле ещё и числовыми, но это уже совсем другая история) и если вы захотите, например, сопоставить один объект с другим, то у вас ничего не выйдет. Для таких случаев в ES2015 появилась конструкция Map.</p>
      <pre>{`const Alyonushka = {
  age: 14,
  gender: 'female',
  name: 'Алёнушка',
  job: 'Сестрица',
};

const Ivanushka = {
  age: 12,
  gender: 'male goat',
  name: 'Иванушка',
  job: 'Братец',
};

const Bonnie = {
  age: 24,
  gender: 'female',
  name: 'Bonnie Parker',
  job: 'Gangster',
};

const Clyde = {
  age: 25,
  gender: 'male',
  name: 'Clyde Barrow',
  job: 'Gangster',
};

// 'Map' создаётся в JS с помощью конструктора
let legendaryPairs = new Map();

// Можно добавлять элементы с помощью метода 'set'.
// В 'set' первым параметром передаётся ключ, вторым — значение.
// Таким образом мы можем сопоставить, например, два объекта:
legendaryPairs.set(Alyonushka, Ivanushka);
legendaryPairs.set(Bonnie, Clyde);

// Другой способ создания 'Map' это создание
// на основе другой перечисляемой структуры,
// например, на основе массива массивов
legendaryPairs = new Map([
  [Alyonushka, Ivanushka],
  [Bonnie, Clyde],
]);

// Теперь к элементам словаря можно обращаться,
// добавлять в словарь новые значения, но самое
// интересное, что можно их перебирать или с помощью
// встроенного метода 'forEach' или с помощью
// цикла 'for..of'.
// Обратите внимание на то как в примере с 'for..of'
// переменные 'first' и 'second' создаются
// с помощью деструктуризации.
for (const [first, second] of legendaryPairs) {
  console.log('&dollar;{first.name} всегда поддержит &dollar;{second.name}');
}`}
      </pre>
      <p>Мы разобрали, что такое словарь, какие способы создать словарь есть в JS и какие задачи подходят для использования словарей. Объекты в качестве словарей используются чаще, поэтому в следующей главе поговорим о том, какие возможности для работы с ними появились в ES2015.</p>
      <p>Map — это коллекция, состоящая из пар ключ/значение. По определению очень напоминает Object, но у коллекции есть то, чего лишён Object. Первое: ключи могут быть не только строками, но и значениями других типов. Перед тем как начать использовать коллекцию, необходимо создать экземпляр класса Map. За добавление новой пары ключ/значение отвечает метод set().</p>
      <pre>{`const guitarPlayer = new Map();

guitarPlayer.set('firstName', 'Richie');
guitarPlayer.set('lastName', 'Sambora');
guitarPlayer.set(true, ['value1', 'value2']);
guitarPlayer.set(10, 'Key may be a number');

console.log(guitarPlayer);`}
      </pre>
      <p>Для получения значения недостаточно обратиться к одноимённому свойству (ключу) экземпляра объекта. Ничего хорошего из этого не выйдет. Мы получим значение undefined. Чтобы получить значение следует воспользоваться методом get. В качестве параметра ему необходимо передать ключ, значение которого мы хотим получить.</p>
      <pre>{`const guitarPlayer = new Map();

guitarPlayer.set('firstName', 'Richie');
guitarPlayer.set('lastName', 'Sambora');
guitarPlayer.set(true, ['value1', 'value2']);
guitarPlayer.set(10, 'Key may be a number');

console.log(guitarPlayer);

// Так нельзя
console.log(guitarPlayer[true]);

// И так нельзя
console.log(guitarPlayer.firstName);


// Правильно
console.log(guitarPlayer.get(true));
console.log(guitarPlayer.get(10));`}
      </pre>
      <p>Когда мы говорили, что в качестве ключа может выступать значение любого типа мы имели в виду даже объекты.</p>
      <pre>{`const richieSambora = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

const guitarPlayer = new Map();
guitarPlayer.set(richieSambora, {
  guitarCount: 10,
  tracks: 299,
});


console.log(guitarPlayer.get(richieSambora));`}
      </pre>
      <p>Ещё одна особенность Map: ключи упорядочены и по этой коллекции можно итерироваться с помощью for..of. Поскольку ключи упорядочены, то во время итерации они будут возвращены в порядке вставки.</p>
      <pre>{`const richieSambora = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

const guitarPlayer = new Map();
guitarPlayer.set(richieSambora, {
  guitarCount: 10,
  tracks: 299,
});

guitarPlayer.set(false, 'Test');
guitarPlayer.set([], 'Another value');


// Итерируемся по парам [ключ, значение]
for (const pair of guitarPlayer) {
  console.log(pair);
}`}
      </pre>
      <p>У Map есть методы values(), entries() и keys(). Все они возвращают итерированный объект.</p>
      <pre>{`const richieSambora = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

const guitarPlayer = new Map();
guitarPlayer.set(richieSambora, {
  guitarCount: 10,
  tracks: 299,
});

guitarPlayer.set(false, 'Test');
guitarPlayer.set([], 'Another value');


console.log('Итерация по значениям');

for (const value of guitarPlayer.values()) {
  console.log(value);
}

console.log('Итерация по ключам');

for (const value of guitarPlayer.keys()) {
  console.log(value);
}

console.log('Итерация по парам ключ/значение');

for (const value of guitarPlayer.entries()) {
  console.log(value);
}`}
      </pre>
      <p>В отличие от Object, Map нельзя создать используя литерал. На практике это не удобно. Немного упростить задачу поможет передача начальных значений в конструктор.</p>
      <pre>{`const guitarPlayer = new Map([
  ['firstName', 'Richie'],
  ['lastName', 'Sambora'],
]);

console.log(guitarPlayer);`}
      </pre>
      <p>Из обычного объекта вполне возможно создать Map. Для этого придётся воспользоваться методом entries у объекта Object.</p>
      <pre>{`const guitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

const map = new Map(Object.entries(guitarPlayer));
console.log(map);`}
      </pre>
      <p>А если в обратную сторону? Да, такой вариант возможен. Правда придётся объединить несколько методов. У объекта Object есть метод fromEntries(). Он принимает массив из массивов ключ/значение. У Map есть метод entries(), который возвращает массив из пар ключ/значение. Комбинируем и получаем результат.</p>
      <pre>{`const guitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

const map = new Map(Object.entries(guitarPlayer));
console.log(map); // Map

const newObject = Object.fromEntries(map.entries());
console.log(newObject); // Object`}
      </pre>

      <h2 id={'destructuring-in-js'}>Деструктуризация в JS</h2>
      <p><a href="https://medium.com/@stasonmars/%D0%B4%D0%B5%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2-es6-%D0%BF%D0%BE%D0%BB%D0%BD%D0%BE%D0%B5-%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE-b865bb71f376" target="_blank" rel="noopener noreferrer">MDN. Деструктуризация в ES6. Полное руководство</a></p>
      <p><a href="https://learn.javascript.ru/destructuring-assignment" target="_blank" rel="noopener noreferrer">Учебник Javascript. Деструктурирующее присваивание</a></p>
      <p><a href="https://ru.hexlet.io/courses/js-arrays/lessons/destructuring/theory_unit" target="_blank" rel="noopener noreferrer">HEXLET. JS: Массивы. Деструктуризация</a></p>
    </section>
  );
}
export default DataStructures;
