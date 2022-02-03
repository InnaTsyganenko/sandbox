import React from 'react';

function Arrays() {

  return (
    <section className="conspect">
      <h1>Массивы</h1>
      <p><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">MDN. Array</a></p>
      <p><a href="https://habr.com/ru/company/ruvds/blog/413169/" target="_blank" rel="noopener noreferrer">Полезные методы массивов и объектов в JavaScript</a></p>
      <div className="note">Объекты и массивы лучше объявлять через <abbr data-title="Литерал (англ. literal) — запись в исходном коде компьютерной программы, представляющая собой фиксированное значение(константа). Литералами также называют представление значения некоторого типа данных">литералы</abbr>.</div>
      <div className="warn">Разница между объектом и массивом в упорядоченности ключей и в форме записи. В объекте не гарантируется такая же последовательность ключей, как она была задана, а в массиве будет такая же последовательность как и указали в начале.</div>
      <p>Массив — список элементов. У каждого из них есть порядковый номер. Массивы и чтение из них выглядят так:</p>
      <pre>{`// Массив чисел
var array = [10, 20, 30, 40, 50];

// Читаем элементы из массива по индексу (порядковому номеру)
console.log(array[0]); // Выведет: 10
console.log(array[3]); // Выведет: 40`}
      </pre>

      <h2>Как скопировать исходный массив</h2>
      <p>Тат как массивы передаются по ссылке, то просто сохранить в переменную не получится.</p>
      <ol>
        <li>метод slice
          <pre>{`this.#points = points;
    this.#sourcedPoints = points.slice();

    #sortPoints = (sortType) => {
      switch (sortType) {
        case SortType.TIME:
          this.#points.sort((a, b) => b.duration - a.duration);
          break;
        case SortType.PRICE:
          this.#points.sort((a, b) => b.price - a.price);
          break;
        default:
          this.#points = [...this.#sourcedPoints]; // вернётся исходный массив
      }

      this.#currentSortType = sortType;
    }`}
          </pre>
        </li>
        <li>Оператор spread
          <pre>{`this.#points = points;
    this.#sourcedPoints = [...points];

    #sortPoints = (sortType) => {
      switch (sortType) {
        case SortType.TIME:
          this.#points.sort((a, b) => b.duration - a.duration);
          break;
        case SortType.PRICE:
          this.#points.sort((a, b) => b.price - a.price);
          break;
        default:
          this.#points = [...this.#sourcedPoints]; // вернётся исходный массив
      }

      this.#currentSortType = sortType;`}
          </pre>
        </li>
      </ol>

      <h3>Массивы в ES2015</h3>
      <p>В ES2015 появились новые способы объявления массивов. Если раньше мы могли создавать массив или через конструктор Array, или через литерал массива [ ] (квадратные скобки), то теперь у нас появились ещё три метода: Array.from, Array.of и операторы spread и rest.</p>
      <p><a href="https://habr.com/ru/company/plarium/blog/483958/" target="_blank" rel="noopener noreferrer">15 методов работы с массивами в JavaScript, которые необходимо знать в 2020 году</a></p>

      <h2>Методы массивов</h2>
      <h3>Метод push</h3>
      <p>Этот метод добавляет переданные ему элементы в конец указанного массива. Например:</p>
      <pre>{`var purchases = ['молоко', 'кефир'];

purchases.push('колбаса', 'конфеты', 'мармелад');
console.log(purchases);
// Выведет: ["молоко","кефир","колбаса","конфеты","мармелад"]`}
      </pre>
      <h3>Array.prototype.join()</h3>
      <p>Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.</p>

      <h3>Array.from</h3>
      <p>Array.from используется для создания массивов на основании других перечисляемых объектов. Например, если у вас есть результат работы функции querySelectorAll (такая структура называется HTMLElementsList), вы можете превратить её в обычный массив одной короткой строкой.</p>
      <pre>{`const allDivs = Array.from(document.querySelectorAll('div'));

        // Теперь, когда allDivs — это массив,
        // а не DOM-коллекция, вы можете производить
        // над ним те операции, которые вы производите
        // над массивами. Например 'filter'
        const divsWithCertainClassName = allDivs.filter(
          (it) => it.classList.contains('block__element_modifier'),
        );`}
      </pre>

      <h3>Array.of</h3>
      <p>Array.of используется для создания массива на основе набора отдельных значений. Его синтаксис похож на синтаксис Array.from, только разница в том, что каждый элемент нового массива нужно передавать как отдельный аргумент.</p>
      <pre>
        const numbers = Array.of(1, 2, 3); // [1, 2, 3]
      </pre>

      <h3>Цикл for of</h3>
      <p>Цикл — это конструкция, которая позволяет выполнить код несколько раз.</p>
      <p>Цикл for of выполнит код из фигурных скобок столько раз, сколько элементов содержится в коллекции, указанной в круглых скобках. Каждое такое повторение называется итерацией.</p>
      <p>Ещё одна новинка в синтаксисе ES2015, это новый способ перебора всех элементов с помощью цикла for. Если в ES5 для того, чтобы перебрать массив с помощью цикла for приходилось придумывать много абстракций, таких как счётчик массива, который изменяет своё значение от 0 до длины массива минус один или текущий элемент, который равен элементу массива, индекс которого совпадает со счётчиком, то теперь можно перебрать массив гораздо проще.</p>
      <pre>{`for (переменная of коллекция) {
  // Код, который нужно выполнить несколько раз
}`}
      </pre>
      <p>При создании цикла в круглых скобках также нужно указать переменную. Обычно для этого объявляют новую переменную и используют её только внутри цикла. На каждой итерации JavaScript будет автоматически записывать в эту переменную очередной элемент коллекции.</p>
      <pre>{`let elements = document.querySelectorAll('p'); // Находим все абзацы

for (let element of elements) {  // Создаём цикл и переменную
  console.log(element);          // Выводим элементы в консоль
}`}
      </pre>
      <pre>{`const friends = ['Joey', 'Chandler', 'Ross', 'Rachel', 'Monica', 'Phoebe'];

        for (const friend of friends) {
          console.log('Hello, &dollar;{friend}');
        }`}
      </pre>
      <p>Этот синтаксис отличается от привычного нам for тем, что for..of делает всё за нас: нам не нужно следить за переполнением счётчика, да и вообще не нужно заводить счётчик; переменная с текущим элементом создаётся сама, нам не нужно искать его в массиве по индексу; цикл завершается без нашего участия. В остальном, это такой же цикл. Например, в нём точно так же, как в обычном цикле можно пропускать итерации с помощью конструкции continue или завершать цикл принудительно с помощью конструкции break.</p>
      <p>Интересная особенность цикла for..of в том, что с помощью него помощью можно перебирать не только массивы, но и другие перечисляемые структуры данных, так называемые Iterable-структуры. В ES2015 к ним относятся массивы, все виды коллекций, Set, Map и другие.</p>

      <h3>Перебор значений массива (forEach)</h3>
      <p>Можно воспользоваться операторами циклов for или while, или сделать тоже самое с помощью метода forEach.</p>
      <p>Метод forEach позволяет выполнить произвольную функцию однократно для каждого элемента. Попросту говоря: он запускает перебор значений массива и для каждого значения выполняет функцию. Рассмотрим пример:</p>
      <pre>{`const fruits = ['banana', 'apple', 'lemon', 'orange'];

fruits.forEach((value, index, array) => { // value — текущий элемент массива;
                                            index — порядковый номер текущего элемента массива;
                                            array — ссылка на сам массив.
  console.log(value);
});

// Выведет:
// banana
// apple
// lemon
// orange`}
      </pre>
      <p>Если вам не требуется порядковый номер элемента в массиве или как-то взаимодействовать с массивом, то соответствующие параметры в функции можно не определять и воспользоваться более сокращённой записью:</p>
      <pre>{`fruits.forEach((value) => {
console.log(value);
});`}
      </pre>
      <p>При использовании метода forEach стоит помнить одну важную деталь: работу метода нельзя остановить. Оператор break не поможет. Поэтому если вам требуется перебрать только часть массива, то forEach следует отодвинуть в сторонку, и воспользоваться циклом for.</p>

      <h3>Преобразование массива (map)</h3>
      <p>С помощью этого метода мы можем итерироваться по массиву и в результате получить новый массив. Рассмотрим пример. Предположим у нас есть массив films с фильмами. Каждый фильм описан в виде объекта с двумя ключами:</p>
      <ul>
        <li>id — идентификатор фильма;</li>
        <li>title — название фильма.</li>
      </ul>
      <pre>{`const films = [
{
  id: 0,
  title: 'Die hard'
},
{
  id: 1,
  title: 'Terminator'
}
];`}
      </pre>
      <p>Наша задача заключается в получении массива, который будет содержать только названия фильмов. То есть на выходе мы должны получить массив вида: [&apos;Die hard&apos;, &apos;Terminator&apos;].</p>
      <p>У любой задачи всегда есть два решения. Можно решить её «в лоб» и воспользоваться знаниями о методе forEach. Алгоритм будет таким: заводим новый массив и начинаем перебирать films методом forEach. В функции, которая будет вызываться для каждого элемента, напишем код для добавления названия фильма в новый массив. На этом задача можно сказать решена. Пример такого решения:</p>
      <pre>{`const films = [
{
  id: 0,
  title: "Die hard"
},
{
  id: 1,
  title: "Terminator"
}
];

const titles = [];

films.forEach((film, index) => {
  titles[index] = film.title;
});

console.log(titles); // ["Die hard", "Terminator"]`}
      </pre>
      <p>Код работает, однако нам нужно руками заводить пустой массив titles, руками в него добавлять элементы. Зачем, если существует метод map, который может взять эти обязанности на себя:</p>
      <pre>{`const films = [
{
  id: 0,
  title: 'Die hard'
},
{
  id: 1,
  title: 'Terminator'
}
];

const titles = films.map((film) => {
  return film.title;
});

console.log(titles); // ["Die hard", "Terminator"]`}
      </pre>
      <p>Результатом выполнения метода map будет новый массив, собранный из значений, которые вернёт функция, переданная в качестве параметра методу map.</p>
      <p>Кстати, параметры метода map такие же, как у forEach — currentValue, index, array. Выходит, что метод map похож на forEach. Только он позволяет не просто перебрать все значения массива, а получить новый массив значений.</p>
      <p>Метод map удобно использовать, когда требуется трансформировать массив, то есть создать новый массив на основе существующего.</p>

      <h3>Перевернуть массив (reverse)</h3>
      <pre>{`const numbers = [0, 1, 2, 3, 4];
const reverseNumbers = numbers.reverse();
console.log(reverseNumbers); // [4, 3, 2, 1, 0]`}
      </pre>
      <p>Метод вернёт новый массив, который будет состоять из элементов, расположенных в обратном порядке.</p>

      <h3>Проверить значение массива (some)</h3>
      <p>С его помощью можно проверить присутствует ли в массиве элемент, который удовлетворяет определённому условию. Результатом выполнения метода some будет булево значение: true или false.</p>
      <p>Метод some перебирает элементы массива и для каждого элемента вызывает переданную функцию. Метод some будет вызывать функцию для каждого элемента, пока она не вернёт true. Как только это случится, метод some прервёт работу и вернёт в качестве результата значение true.</p>
      <p>Если для всех элементов массива переданная функция вернёт false, тогда результатом some станет false.</p>
      <p>У метода some есть одна особенность. Если вызвать его на пустом массиве, то результатом всегда будет false.</p>
      <pre>{`const numbers = [1, 4, 10, 5];

const isExistsOverFive = numbers.some((value) => {
  return value > 5; // Проверяем каждый элемент, больше ли он, чем 5
}); // Когда some дойдёт до 10, то прекратит работу и вернёт true

const isExistsOverTwenty = numbers.some((value) => {
  return value > 20; // Проверяем каждый элемент, больше ли он, чем 20
}); // some пройдёт все элементы, они все меньше 20, поэтому он вернёт false`}
      </pre>

      <h3>Проверить элементы массива (every)</h3>
      <p>Если метод some позволяет убедиться, что хотя бы один элемент массива удовлетворяет условию, то при помощи метода every можно проверить, что условию соответствуют все элементы массива. Результатом вызова метода every будет булево значение: true или false.</p>
      <p>Метод every так же аргументом принимает функцию, которая будет вызываться для каждого элемента до тех пор, пока при проверке условия не вернётся false. В таком случае метод every прекратит выполнение и вернёт false. Если для каждого элемента массива будет возвращено значение true, то результатом метода every также станет true:</p>
      <pre>{`const numbers = [11, 12, 13, 15, 100];

const isEveryNumberOverTen = numbers.every((value) => {
  return value > 10;
}); // every вернёт true, потому что все элементы массива больше 10`}
      </pre>
      <p>Если вызвать его на пустом массиве, то результатом всегда будет true.</p>

      <h3>Поиск элемента (find)</h3>
      <p>Метод find как и другие методы аргументом принимает функцию, которая будет вызвана для каждого элемента массива, пока не найдётся элемент, который удовлетворяет условию. Как только такой элемент будет найден, метод find прекратит работу и вернёт найденный элемент. Рассмотрим на примере поиска фильма в массиве:</p>
      <pre>{`const films = [
{
  id: 0,
  title: 'Die hard'
},
{
  id: 1,
  title: 'Terminator'
}
];

const terminatorFilm = films.find((film) => {
return film.title === 'Terminator';
});

console.log(terminatorFilm); // { id: 1, title: "Terminator" }`}
      </pre>
      <p>Но что вернёт функция, если в массиве есть несколько элементов, удовлетворяющих условию? Ответ прост: первый элемент, который соответствует условию. После этого работа метода будет прервана. А если метод find не найдёт ни одного элемента, удовлетворяющего условие, функция вернёт undefined.</p>

      <h3>Свернуть массив (reduce)</h3>
      <p>Это ещё один метод, позволяющий перебрать содержимое массива. Его основная задача — свернуть массив, то есть из набора значений получить одно. Это значение может быть произвольного типа. За счёт этой возможности, метод reduce становится мощным инструментом, позволяющим решить множество разных задач.</p>
      <pre>{'array.reduce(callback[, initialValue]);'}</pre>
      <p>Первым параметром метод принимает функцию, а вторым начальное значение аккумулятора (опционально). Аккумулятором называют результирующее значение.</p>
      <p>Теперь разберём параметры функции:</p>
      <pre>{'array.reduce(function (accumulator, currentValue, index, array) {});'}</pre>
      <p>Их аж четыре:</p>
      <ul>
        <li>accumulator — тот самый аккумулятор или промежуточное значение. Через этот параметр вы сможете получить предыдущий результат выполнения функции;</li>
        <li>currentValue — текущий элемент массива;</li>
        <li>index — порядковый номер текущего элемента;</li>
        <li>array — ссылка на массив.</li>
      </ul>
      <p>Рассмотрим применение метода reduce на практическом примере. Начнём с наиболее простой задачи: суммирование всех значений массива.</p>
      <p>Для наглядности опишем задачу так: есть корзина с товарами (массив), где каждый товар представлен объектом с несколькими ключами: title (название товара), quantity (количество) и price (цена). Наша задача заключается в подсчёте общей суммы товаров и в этом нам поможет метод reduce:</p>
      <pre>{`const goods = [
{
  title: 'Кукуруза',
  quantity: 3,
  price: 99
},
{
  title: 'Корм для кота',
  quantity: 2,
  price: 113
}
];

const sum = goods.reduce((accumulator, product) => {
return accumulator + (product.quantity * product.price);
}, 0);

console.log(sum); // 523`}
      </pre>
      <p>В этом примере мы посчитали сумму товаров и для этого нам потребовалась одна строчка кода и никаких дополнительных переменных.</p>

      <h2>Метод массива fill()</h2>
      <p>И в стандарте ECMAScript 2015 появился метод fill. Основное применение этого метода — как раз наполнение «пустых массивов».</p>
      <p>Метод массива fill() принимает произвольное значение и заполняет массив этим значением:</p>
      <pre>
        {`const greetings = new Array(3);
        greetings.fill('Привет!');

        greetings; // ['Привет!', 'Привет!', 'Привет!']`}
      </pre>
      <p>Сам по себе массив с одинаковыми значениями, как правило, ни за чем не нужен. Однако он часто используется как промежуточная ступень при генерации более сложных массивов. Допустим, нам необходимо создать массив, заполненный временными данными для удобства разработки. У нас есть функция generateElement, которая создаёт отдельный элемент. Всего нам требуется, скажем, пять элементов. Как можно достичь желаемого?</p>
      <p>Конечно, можно наполнить массив с помощью цикла for. Так делали раньше, до 2009 года, когда в стандарте ECMAScript 5 появились новые методы массивов. С тех пор подход с for считается неизящным, а программистам хочется все операции над массивами по возможности производить с помощью встроенных методов.</p>
      <p>В JavaScript существует целых два специальных значения, символизирующих отсутствие значения — undefined и null. На этапе проектирования автору языка это казалось хорошей идеей. Время же показало, что это не так, но об этом поговорим в другой раз.</p>
      <p></p>
      <pre>
        {'const elements = new Array(5).fill().map(() => generateElement());'}
      </pre>
      <p>Зачем здесь map? Проблема в том, что fill заполняет массив значением. Он не вызывает функцию заново для каждого нового элемента. Только для первого. Поэтому все пять элементов нашего массива будут случайно сгенерированными, но одинаковыми.</p>
      <p>А с map всё будет как надо, функция generateElement будет вызвана для каждого элемента массива, и результат будет каким-то таким:</p>
      <pre>{`const elements = new Array(5).fill().map(() => generateElement());

elements; // [{name: 'Кекс'}, {name: 'Том'}, {name: 'Саймон'}, {name: 'Гарфилд'}, {name: 'Пушистик'}]`}
      </pre>

      <h2>Метод массива sort()</h2>
      <p>Сортировка массивов в JavaScript делается через метод array.sort().</p>
      <h3>Сортировка массива в алфавитном порядке</h3>
      <pre>{`//Алфавитная сортировка в возрастающем порядке:
var myarray=["Bob", "Bully", "Amy"]
myarray.sort() // Массив становится ["Amy", "Bob", "Bully"]

//Алфавитная сортировка в убывающем порядке:
var myarray=["Bob", "Bully", "Amy"]
myarray.sort().reverse() //Массив становится ["Bully", "Bob", "Amy"]

var myarray=[7, 40, 300]
myarray.sort() //Теперь он становится таким [300,40,7]`}
      </pre>
      <p>По дефолту array.sort() сортирует элементы в лексикографическом порядке.</p>

      <h3>Передаём функцию в array.sort()</h3>
      <p>Есть три возможных числа, которые отдадутся функцией: меньше нуля, ноль, больше нуля.</p>
      <p>В первом случае, когда меньше нуля, a отсортируется с индексом меньшими, чем b.</p>
      <p>При нуле: a и b будут рассматриваться как равные и сортировка производиться не будет.</p>
      <p>Больше нуля: Сортировка b будет меньшего индекса, чем a.</p>
      <p>То есть, для того, чтобы сортировка прошла по числам и в возрастающем порядке, функция-параметр должна быть такой:</p>
      <pre>{`function sortfunction(a, b){
  return (a — b)
}`}
      </pre>

      <h3>Сортируем массив в числовом порядке</h3>
      <pre>{`var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){
  return a — b
}) //Массив будет [7, 8, 25, 41]

var myarray=[25, 8, 7, 41]
myarray.sort(function(a,b){
  return b — a
}) //Массив становится [41, 25, 8, 7]`}
      </pre>

      <h3>Делаем случайный порядок у массива</h3>
      <pre>{`//Рандомный порядок в массиве:
var myarray=[25, 8, "George", "John"]
  myarray.sort(function(){
    return 0.5 — Math.random()
}) //Теперь элементы перемешаны`}
      </pre>

      <h3>Сортируем массив объектов</h3>
      <pre>{`var employees=[]
employees[0]={name: "George", age: 32, retiredate: "March 12, 2014"}
employees[1]={name: "Edward", age: 17, retiredate: "June 2, 2023"}
employees[2]={name: "Christine", age: 58, retiredate: "December 20, 2036"}
employees[3]={name: "Sarah", age: 62, retiredate: "April 30, 2020"}`}
      </pre>
      <pre>{`Сортировка по возрасту
employees.sort(function(a, b){
  return a.age-b.age
})

Сортировка по имени
employees.sort(function(a, b){
  var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  if (nameA < nameB) //сортируем строки по возрастанию
    return -1
  if (nameA > nameB)
    return 1
  return 0 // Никакой сортировки
  })

Сортировка по дате
employees.sort(function(a, b){
  var dateA=new Date(a.retiredate), dateB=new Date(b.retiredate)
  return dateA-dateB //сортировка по возрастающей дате
  })`}
      </pre>
    </section>
  );
}
export default Arrays;
