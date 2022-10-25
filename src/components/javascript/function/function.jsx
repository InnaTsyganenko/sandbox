import React from 'react';

function Function() {

  return (
    <section className="conspect">
      <h1>Функция-помощник</h1>
      <p>В любом языке программирования есть возможность разбить код на небольшие подпрограммы — самостоятельные фрагменты кода.</p>
      <p>Функция — это механизм, позволяющий разбивать код приложения на подпрограммы (фрагменты кода), тем самым давая возможность многократно переиспользовать его в разных частях программы.</p>
      <p>С точки зрения кода, функция не что иное как именованный фрагмент кода, обёрнутый оператором или специальными символами. Для выполнения кода функции применяется идентификатор — то самое имя.</p>
      <p>Функция — кусок кода, который можно написать один раз, а затем многократно использовать. Функция не просто содержит в себе значение, как переменная, а выполняет какое-то действие и решает какую-то задачу: считает, сравнивает, ищет.</p>
      <pre>{`var functionName = function () {
// Действия, которые выполняет функция или «тело функции»
};`}
      </pre>
      <p>functionName — имя переменной, которая содержит в себе функцию. По этому имени мы сможем обращаться к функции и использовать её много раз. Давайте считать, что название переменной это и есть название функции. Имена функций принято именовать в стиле camelCase, имена файлов писать маленькими и через дефис.</p>

      <h2>Объявление функций</h2>
      <p>Объявить функцию в JavaScript можно несколькими способами: декларативно (function declaration) и в виде функционального выражения (functions expression). Спецификация ECMAScript 2015 добавила дополнительный синтаксис для описания функций — стрелочные функции.</p>
      <h3>Декларативное объявление</h3>
      <p>При декларативном способе объявления, функция определяется в основном потоке кода. Для объявления функции применяется оператор function. После него следует имя функции. После имени функции в круглых скобках описываются аргументы функции. Аргументы — это входные данные.  Количество аргументов не ограничено. Их может и вовсе не быть. Через аргументы мы сможем передать для функции произвольные значения. Внутри функции к ним можно обратиться как к обычным переменным.</p>
      <p>Функция может не принимать никаких аргументов, быть самостоятельной. В этом случае следует указать пустые круглые скобки. После круглых скобок открываются фигурные и в них описывается тело функции. В теле описываются действия (код), которые должна выполнять функция — тот самый фрагмент кода.</p>
      <pre>{`
function <Имя функции>([Аргументы функции]) {
  // Тело функции
}
`}
      </pre>
      <p>Функция может возвращать результат своей работы. Применительно к примеру выше, результатом является сумма чисел. Для возврата значения из функции в языке предусмотрен оператор return. Выполнив оператор return, функция прекратит работу и вернёт значение.</p>
      <p>Оператор return необязателен, если его не указать, функция всё равно будет возвращать значение. По умолчанию функция всегда возвращает undefined.</p>
      <p>Кстати, в JavaScript есть встроенные функции языка, которые возвращают результат своей работы:</p>

      <p>Math.ceil(number) — принимает на вход число и округляет его до целого в большую сторону</p>
      <p>Math.floor(number) — делает то же самое, только округляет в меньшую сторону.</p>
      <p>Math.round(number) — округляет число до ближайшего целого значения.</p>

      <h2>Вызов функции</h2>
      <p>Нужно обратиться к функции по её имени, а затем указать круглые скобки. Если функция принимает аргументы, то в этих скобках следует передать значения для каждого из них</p>
      <pre>{`
functionName();
`}
      </pre>
      <p>Обратите внимание, что вызов функции должен идти в коде после её определения.</p>
      <p>Если функция что-то возвращает, то результат её выполнения следует куда-то сохранить, чтобы потом воспользоваться этим значением. Например, определяем переменную result и присваиваем в неё вызов функцию.</p>
      <pre>{`
const result = sum(10, 4);
`}
      </pre>
      <pre>{`
var getString = function () {
  return 'Привет из функции!';
}

console.log(getString);    // Выведет код функции
console.log(getString()); // Выведет: Привет из функции!
`}
      </pre>
      <p>Мы передали функцию и вызов функции в console.log. А ведь console.log() — тоже функция!</p>
      <h3>Функциональное выражение</h3>
      <p> При объявлении функции в виде функционального выражения, результат определения функции записывается в переменную и имя функции не указывается. В остальном синтаксис идентичен.</p>
      <pre>{`
// Объявление функции в виде функционального
// выражения.
const sum = function (firstNumber, secondNumber) {
return firstNumber + secondNumber;
}
`}
      </pre>
      <p>Для вызова функции, записанной в переменную sum, мы просто обращаемся к этой переменной.</p>
      <p><span className="hl-3">Чаще всего в JavaScript применяется именно второй способ: функциональное выражение.</span></p>
      <p>Функции, объявленные декларативно, создаются до выполнения основного кода.Перед выполнением сценария, движок JavaScript находит и создаёт все функции, описанные декларативным способом. Таким образом, в коде можно обратиться к функции до её объявления.</p>
      <p>С функциональными выражениями такой такой трюк не получится. Произойдёт ошибка. В случае с функциональными выражениями, функция создаётся в момент выполнения кода.</p>
      <p>Другой плюс декларативного объявления функции — читаемость. Такие функции проще выхватывать глазом в общем потоке кода.</p>
      <p>Так какой же способ выбрать? Всё зависит от задачи и стиля, принятого в проекте. Следует выбрать один способ и придерживаться его на протяжении создания всего проекта.</p>
      <p>Параметры — значения, с помощью которых можно настраивать функции, делать функцию универсальной. Так мы можем узнать результат работы функции для разных случаев.</p>
      <pre>{`
var showTime = function (hours, minutes) {
console.log('Текущее время: ' + hours + ':' + minutes);
};

showTime(3, 15);    // Выведет: Текущее время: 3:15
showTime(16, 20);   // Выведет: Текущее время: 16:20
`}
      </pre>
      <p>Чтобы функция работала с параметрами, их надо как-то передать и дать им названия</p>
      <ol>
        <li>Задаём параметры.
          <pre>{`var showTime = function (hours, minutes) {
…
};`}
          </pre>
          <p>В момент объявления функции, в круглых скобках, мы создаём параметры. Здесь всё, как с переменными: сначала задаём параметрам имена, которые описывают, что за значения будут в них записаны. Если параметров несколько, они записываются через запятую.</p>
        </li>
        <li>Используем параметры.
          <pre>{`
var showTime = function (hours, minutes) {
console.log('Текущее время: ' + hours + ':' + minutes);
};`}
          </pre>
          <p>Параметры работают так же, как переменные. Мы подставляем их вместо фиксированных значений в операции внутри функции. При выполнении кода вместо каждого параметра подставится его значение.</p>
        </li>
        <li>Функция получает значения параметров</li>
      </ol>
      <pre>{`
showTime(3, 15);    // Выведет: Текущее время: 3:15
showTime(16, 20);   // Выведет: Текущее время: 16:20
`}
      </pre>
      <p>Правильно говорить «функция принимает параметры», но при этом мы «передаём функции аргументы». Почему аргументы? Речь же шла о параметрах! Дело в том, что <span className="hl-3">параметрами называются значения, которые мы задаём в момент объявления функции</span>. Их же мы используем и в теле функции. А <span className="hl-3">аргументами называют значения, которые мы передаём в функцию при её вызове</span>.</p>
      <p className="hl-6">Мы выяснили, что переопределение глобальных переменных влияет на результат работы функции, которая эти переменные использует. Но, вообще-то, так делать не стоит — это не лучшая практика. Переопределение переменных, которые использует функция, может приводить к неожиданным последствиям и ошибкам в коде. Поэтому и существуют параметры, чтобы переиспользовать функции, явно передавая необходимые значения.</p>
      <p className="hl-6">С параметрами всё легко и понятно, если мы хотим сразу вызвать функцию и получить результат её работы.</p>

      <h2>Стрелочные функции</h2>
      <p>В ECMAScript 2015 появился новый синтаксис стрелочных функций (arrow function). Он более лаконичен и особенно удобен при описании функций, выполняющих одно действие.</p>
      <pre>{`// Пример стрелочной функции
(param1, param2, paramN) => {
    // Действие 1
    // Действие N
    // return <Результат>
}

// Пример стрелочной функции без параметров
() => {
    // действие
}

// Стрелочная функция из одного действия
() => expression;

const multiply = (a, b) => {
  return a * b;
}

multiply(2, 2); // 4

// Ещё более короткий синтаксис
const multiply = (a, b) => a * b;
multiply(2, 2); // 4
`}
      </pre>
      <p>Важно запомнить: стрелочная функция всегда анонимна. Мы не можем задать для неё имя и объявить декларативно. Поэтому, если требуется описать стрелочную функцию, к которой планируется обращение в будущем, необходимо сохранить на неё ссылку в переменную.</p>

      <h3>Вернуть объект</h3>
      <p>А что если единственная задача стрелочной функции вернуть объект, созданный с помощью литерала? Можно ли в этом случае воспользоваться сокращённым синтаксисом, рассмотренным в прошлом разделе? Попробуем выполнить пример, представленный ниже. Увы, результатом станет не объект с единственным свойством stringCount, а значение undefined.</p>
      <pre>{`
const getGuitar = () => { stringCount: 6 };
getGuitar(); // undefined
`}
      </pre>
      <p>Почему так произошло? Дело в том, что интерпретатор не смог понять, что мы от него хотим. Точнее растолковал фигурные скобки в контексте описания тела функции. Ведь ранее мы об этом и говорили: для описания тела функции применяются фигурные скобки. Как же быть тогда с объектом?</p>
      <p>Решить эту проблему можно двумя способами. Первый самый простой: определить объект в теле функции и вернуть его в виде результата функции при помощи оператора return. Второй способ заключается в применении сокращённого синтаксиса. Только результат (новый объект) следует обернуть в круглые скобки. Тогда интерпретатор точно поймёт, что в скобках именно объект:</p>
      <pre>{`
const getGuitar = () => ({ stringCount: 6 });
getGuitar(); // { stringCount: 6 }
`}
      </pre>

      <h3>Отбрасываем скобки</h3>
      <p>В случаях, когда стрелочная функция принимает лишь один параметр, круглые скобки можно не писать. Рассмотрим на примере:</p>
      <pre>{`
const addTwo = count => count + 2;
addTwo(2); // 4
`}
      </pre>
      <p>Определение функции addTwo выглядит ещё короче за счёт отказа от скобок. Однако мы рекомендуем не применять такой способ, а всегда описывать параметры стрелочной функции в скобках. Это удобно по нескольким причинам: при чтении кода глазу проще отделить тело функции от параметров. Причина субъективная, но многие разработчики сходятся в этом мнении. Другая причина заключается в упрощении рефакторинга. Если потребуется добавить второй параметр, то придётся возвращать скобки. Мелочь, но фактически дополнительное неудобство.</p>

      <h3>Отсутствует arguments</h3>
      <p>Вы уже знаете, что внутри function доступна локальная переменная arguments. Это массивоподобный объект, содержащий все аргументы, переданные в функцию. Напомним на примере:</p>
      <pre>{`
function multiply(a, b) {
  console.log(arguments[0]);
  console.log(arguments[1]);
}

multiply(2, 5); // 2, 5
`}
      </pre>
      <p>Стрелочным функциям переменная arguments недоступна. Если к ней обратиться, то вместо вывода значений аргументов, возникнет ошибка arguments is not defined. А как же тогда быть, если требуется описать функцию с неопределённым количеством параметров? Решить задачу поможет rest-оператор. Он соберёт все параметры в массив. Рассмотрим на примере:</p>
      <pre>{`
const numbersToArray = (...numbers) => numbers;
console.log(numbersToArray(2, 5, 6, 6, 7)); // [2, 5, 6, 6, 7]
`}
      </pre>
      <p>Совмещая эту возможность с методами массивов, можно получить интересные комбинации. Например, написать функцию для подсчёта суммы чисел и так далее (см. метод reduce).</p>

      <h3>Другие особенности</h3>
      <p>Стрелочные функции не могут использоваться в качестве функций-конструкторов. Они не образуют собственный контекст (this), а используют контекст окружения, в котором объявлены. Из-за отсутствия контекста стрелочные функции не могут вызываться с помощью оператора new.</p>
      <p>А раз стрелочные функции не образуют собственный контекст, то применение методов apply, call и bind теряет смысл. Переопределить или задать произвольное значение контекста попросту не получится.</p>
      <p>Может показаться, что из-за отсутствия собственного контекста, стрелочные функции имеют ограниченное применение. Это не так. Особенность с контекстом реализована намерено, так как позволяет избавиться от потери окружения. До появления стрелочных функций его приходилось сохранять самостоятельно, что не очень удобно. Рассмотрим на примере:</p>
      <pre>{`
const musicStore = {
  artist: 'Bon Jovi',
  albums: [
      'Runaway',
      'Slippery when wet',
      'New Jersey',
      'Keep the faith',
  ],

  print() {
      this.albums.forEach(function(album) {
          console.log('&dollar;{this.artist} — &dollar;{album}');
      });
  }
}
`}
      </pre>
      <p>Если выполнить этот небольшой фрагмент кода в консоли браузера, вместо имени артиста будет выведено значение undefined. Внутри анонимной функции, которая передаётся в forEach другой контекст. Поэтому вместо вывода значения поля artist мы получаем undefined. Исправить проблему можно несколькими способами.</p>
      <p>Первый заключается в применении старого подхода — предварительное сохранение контекста в отдельную переменную. Например:</p>
      <pre>{`
print() {
  // Сохраним контекст
  const self = this;
  this.albums.forEach(function(album) {
      // Вместо 'this' обратимся к 'self'
      console.log('&dollar;{self.artist} — &dollar;{album}');
  });
}
`}
      </pre>
      <p>Попробуйте обновить функцию (метод) print и вновь запустить пример. В этот раз результат вывода совпадёт с ожидаемым.</p>
      <p>Второй способ решения — воспользоваться стрелочной функцией. Поскольку стрелочные функции не образуют свой контекст, то ничего сохранять больше не нужно:</p>
      <pre>{`
print() {
  this.albums.forEach((album) => {
      console.log('&dollar;{this.artist} — &dollar;{album}');
  });
}
`}
      </pre>

      <h2>Замыкания</h2>
      <p>Замыкание — функция, которая помнит о своём окружении. Это функция + все значения вне локальной области видимости, которые она использует.</p>
      <p>Благодаря замыканиям мы можем зафиксировать какое-то значение в функции, а использовать саму функцию позже.</p>
      <pre>{`var collectContainer = function () {
var food = 'макароны';
var eatDinner = function () {
  console.log('Поел ' + food);
}
return eatDinner;
};

var schoolkid = collectContainer();
schoolkid();
// Выведет: Поел макароны


var collectContainer = function () {
var food = 'макароны';
var eatDinner = function () {
  console.log('Поел ' + food);
};
return eatDinner;
};

var schoolkid = collectContainer();
console.log(schoolkid);
// Выведет: function () { console.log('Поел ' + food); }
`}
      </pre>
      <p>Мы хотим, чтобы функция получила фиксированное значение, которое бы не зависело от изменений в глобальной области видимости. При этом результат работы функции мы хотим получить не сразу. Как с событиями, когда мы создаём обработчик, но ждём выполнение события не сразу.</p>
      <p>Код из примера работает так: мы вызываем collectContainer → функция collectContainer возвращает eatDinner → вызываем eatDinner.</p>
      <p>Мы создаём функцию внутри функции. Таким образом мы создаём одну область видимости внутри другой области видимости. У eatDinner своя область видимости, в которой идёт обращение к переменной food. Эта переменная объявлена внутри collectContainer, у которой своя область видимости.</p>
      <p>Функция eatDinner не находит внутри себя создание переменной food, смотрит в соседнюю область видимости (в область видимости collectContainer). Там она находит переменную food, узнаёт, что её значение равно строке &apos;макароны&apos;, и фиксирует это значение в памяти.</p>
      <p>Код самой функции не меняется, просто в памяти вместе с функцией хранится то значение переменной, которое было при объявлении этой функции. Поэтому eatDinner «помнит» значение food. Это особенность функций, они помнят своё окружение в момент своего создания. В таком случае говорят о замыкании. Замыкание — функция, которая помнит о своём окружении. То есть это функция + все значения переменных вне локальной области видимости этой функции. Речь идёт только о переменных, которые функция использует в своём коде.</p>
      <p>В нашем примере функция eatDinner вместе с переменной food являются замыканием.</p>
      <p>Именно благодаря замыканиям код из примера выше работает. eatDinner помнит о значении food при своём создании, поэтому использует это значение в момент вызова. Как если бы мама сказала нам купить картошки, когда мы будем идти мимо магазина. Мы запомнили про картошку и пошли по своим делам. Когда мы увидели магазин, мы вспомнили, что именно картошка была нужна, мы её купили и пошли домой.</p>
      <p>Наш пример рабочий, но он жёстко привязан к значению внутри функции collectContainer. Может школьник не хочет есть каждый раз только макароны? Нужно дать ему возможность выбора. Да и чаще всего мы передаём какие-то значения в функцию, а не жёстко фиксируем их внутри локальной области видимости. Добавим функции collectContainer параметр.</p>
      <pre>{`var collectContainer = function (food) {
return function () {
  console.log('Поел ' + food);
};
};

var schoolkid = collectContainer('макароны');
schoolkid();
// Выведет: Поел макароны`}
      </pre>
      <p>Теперь значение food будет использовано из параметра, а не из локальной переменной функции collectContainer. Работать всё будет точно так же. Функция, которую возвращает collectContainer, будет запоминать значение параметра и использовать его при своём вызове.</p>
      <p>Внутреннюю функцию мы сделали анонимной, потому что имя eatDinner нигде не используется. Это никак не повлияет на работу функции.</p>
      <p>Обратите внимание, что каждый раз, когда мы будем вызывать функцию collectContainer и записывать результат в переменную, в памяти будет создаваться новое замыкание, которое будет помнить о значении параметра food в момент своего создания.</p>

      <h2>Замыкания и асинхронность</h2>
      <p>Некоторые функции выполняются асинхронно, поэтому в момент выполнения кода значение переменной может уже измениться. Чтобы избавиться от этой проблемы, нужно создать отдельную область видимости. Так все переменные будут под контролем и замыкания не позволят потерять необходимые значения.</p>
      <pre>{`var thumbnails = document.querySelectorAll('.gallery__photo-preview');
var fullPhoto = document.querySelector('.full-photo');

var addThumbnailClickHandler = function (thumbnail, photo) {
thumbnail.addEventListener('click', function () {
  fullPhoto.src = photo;
});
};

for (var i = 0; i < thumbnails.length; i++) {
addThumbnailClickHandler(thumbnails[i], photos[i]);
}`}
      </pre>

      <h3>Синтаксис оставшихся параметров функции <span className="hl-10">rest</span></h3>
      <p>При работе с функциями можно использовать синтаксис оставшихся параметров для того, чтобы организовать приём любого количества аргументов в виде массива.</p>
      <p>Выведем массив, содержащий аргументы, переданные функции.</p>
      <pre>{`function displayArgumentsArray(...theArguments) {
  console.log(theArguments);
}

displayArgumentsArray('hi', 'there', 'bud');
// В консоли будет выведен массив ['hi', 'there', 'bud']`}
      </pre>
      <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">MDN. Rest parameters</a></p>

      <p><a href="examples/function-create-card-of-store/index.html">Функция, создающая карточки товаров для интернет-магазина</a></p>
      <p><a href="examples/function-create-card-of-store-ice/index.html">Функция, создающая карточки товаров для интернет-магазина мороженного</a></p>
      <p><a href="examples/photo-gallery/index.html">Пример использования замыкания в функции - реализация фотогалереи</a></p>
      <p><a href="examples/function-closure-example/index.html">Пример использования замыкания в функции - Вывод имени</a></p>
    </section>
  );
}
export default Function;
