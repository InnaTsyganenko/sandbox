import React from 'react';

function AboutProgramming() {

  return (
    <section className="conspect">
      <h1>Про программирование.</h1>
      <p className="hl-3">Если &quot;логике отношений&quot; место в данных, то &quot;логике отображение&quot; - самое место в шаблоне.</p>
      <h2>ООП-модель на основе прототипов</h2>
      <p>По концепции, в ООП на основе классов мы сначала создаем класс, который будет служить «схемой» для объектов, а затем создаем объекты на основе этой схемы. Чтобы построить более конкретные типы объектов, мы создаем «дочерние» классы; то есть мы вносим некоторые изменения в схему и используем получившуюся новую схему для создания более конкретных объектов.</p>
      <p>Для аналогии с реальным миром: если бы вы построили стул, вы сначала создали бы чертеж на бумаге, а затем изготовили бы стулья на основе этого чертежа. План здесь - это класс, а стулья - объекты. Если вы хотите построить кресло-качалку, вы должны взять чертеж, внести некоторые изменения и изготовить кресла-качалки, используя новый чертеж.</p>
      <p className="hl-8"><b><abbr data-title="способ мышления">Парадигма</abbr> программирования</b> — это совокупность идей и понятий, определяющих стиль написания компьютерных программ. Это способ концептуализации, определяющий организацию вычислений и структурирование работы, выполняемой компьютером.</p>

      <h2>ООП - объектно-ориентированная парадигма.</h2>
      <h3>Объект</h3>
      <p>Всё состоит из объектов. Подходы к организации кода.</p>
      <ul>
        <li>Объект — модель реального мира;</li>
        <li>Объект самодостаточен. Выполняет конкретную задачу;</li>
        <li>Объекты взаимодействуют с другими объектами.</li>
      </ul>
      <p>Плюсы ООП</p>
      <ul>
        <li><abbr data-title="с одной стороны">«Упрощается»</abbr> проектирование. Всё состоит из объектов;</li>
        <li>Распараллеливание процесса разработки;</li>
        <li>Создание сложных объектов из более простых;</li>
        <li>Удобней создавать расширяемые приложения;</li>
        <li>Переиспользование кода.</li>
      </ul>
      <p>Минусы ООП</p>
      <ul>
        <li><abbr data-title="с другой стороны">«Усложняется»</abbr>«Усложняется» проектирование;</li>
        <li>Проектировать сложней, чем использовать;</li>
        <li>Трудно выстраивать связи между классами (большие проекты);</li>
        <li>Легко потеряться в абстракциях и проектировании универсальных решений.</li>
      </ul>

      <h4>Объекты и компонентный подход</h4>
      <p>ООП оперирует понятиями: абстракция, наследование, совокупность, взаимодействие.</p>
      <p>В ООП компоненты — это классы, но классы это конечная точка нашего маршрута.</p>
      <p><b>Компонент</b> — это независимый модуль исходного кода программы, предназначенный для повторного использования. Компонентный подход, в свою очередь, это разделение кода на повторно используемые модули.</p>
      <p className="hl-5">Наши функции, которые мы уже называем компонентами, на самом деле возвращают лишь разметку в виде строки. Если в этой разметке потребуется какой-либо интерактив, функция с этим не справится. Давайте представим, что у нас вместо функций — объекты. Разметка сможет храниться в свойствах этого объекта. За изменение свойств объекта будут отвечать методы. А значит мы можем изменять нашу разметку снаружи, не создавая каждый раз новый компонент, как это было с функциями.</p>
      <p>объекты в чистом виде для компонентов тоже неудобны по ряду причин:</p>
      <ul>
        <li>нет удобного способа размножить объекты;</li>
        <li>непонятно, как выстроить между ними взаимодействие;</li>
        <li>непонятно, как их наследовать;</li>
        <li>ну или, хотя бы, как отличить один объект от другого.</li>
      </ul>

      <h4>Утиная типизация</h4>
      <p>Подход «Утиная типизация» позволяет нам определить (узнать) предмет (далее «сущность») по поведению:</p>
      <cite>Если это выглядит как утка, плавает как утка и крякает как утка, то это, вероятно, и есть утка.</cite>
      <p>Иными словами, если у объекта есть определённый набор ключей, то этот объект относится к одному типу. Если у объекта другой определённый набор ключей, то этот объект относится к другому типу.</p>
      <p>Возьмём уже знакомый нам объект, который описывает повара. Как бы мы могли с помощью утиной типизации определить, что это повар? Например, если у объекта есть поля: имя, фамилия, инструмент и метод cut (поведение), то это повар. А если у него точно такой же набор полей, но метод code — это программист.</p>
      <pre>{`// повар
const cook = {
  firstName: 'Bob',
  lastName: 'Smith',
  tool: 'knife',
  cut: () => {},
};

// разработчик
const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};`}
      </pre>
      <p>Представьте, что нам потребовалось описать хирурга. Хирург тоже умеет резать, но далеко не продукты. У хирурга тоже может быть метод cut. Как же тогда понять, где повар, а где хирург?</p>
      <p>Можно добавить уникальный ключ каждому объекту, который будет содержать некий признак, по которому уже мы сможем определить, чем является этот объект. Но здесь мы сталкиваемся с другими проблемами. Например, этот словарь признаков нужно будет хранить и составлять. Согласитесь, это лишняя работа.</p>
      <p>К счастью, способ решения есть — это вышеупомянутые классы!</p>
      <p>P.S. Есть ещё один способ — функции-конструкторы. Это способ, которым пользовались фронтенд-разработчики до появления классов.</p>

      <h4>Операторы new и instanceof</h4>
      <p>Утиная типизация позволяет отличить один объект от другого, но этот вариант нельзя назвать надежным. Стоит нам переименовать метод .code() в .cut() у объекта, определяющего разработчика и функция isCook() начнет работать неправильно.</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <pre>{`const cook = {
  firstName: 'Bob',
  lastName: 'Smith',
  tool: 'knife',
  cut: () => {},
};

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  cut: () => {},
};

const isCook = (obj) => {
  // С помощью оператора typeof,
  // который возвращает тип переменной,
  // проверим, является ли свойство cut функцией,
  // иными словами — методом объекта
  const isCutFunction = typeof (obj.cut) === 'function';

  return obj.firstName && obj.lastName && isCutFunction;
};

console.log(isCook(cook)); // должно быть true
console.log(isCook(developer)); // должно быть false
`}
      </pre>
      <p>Решить эту задачу мы можем с помощью описания функции, которая будет отвечать за создание объектов. Цель этой функции — добавить создаваемому объекту поле, по которому мы точно сможем определить, что объект соответствует нашим ожиданиям.</p>
      <pre>{`const COOK_TYPE = 'повар';

const createNewCook = (firstName, lastName) => ({
  kind: COOK_TYPE,
  firstName,
  lastName,
  tool: 'knife',
  cut: () => {},
});

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};

const isCook = (obj) => {
  // С помощью оператора typeof,
  // который возвращает тип переменной,
  // проверим, является ли свойство cut функцией,
  // иными словами — методом объекта
  const isCutFunction = typeof (obj.cut) === 'function';

  return obj.firstName && obj.lastName && isCutFunction;
};`}
      </pre>
      <p>Теперь обновим функцию isCook(). Уберем лишние условия и оставим только проверку свойства kind, которое мы добавляем в момент создания нового объекта.</p>
      <p>Вариант вполне рабочий, но фактически мы изобрели велосипед. Все тоже самое возможно сделать с помощью встроенных в JavaScript возможностей.</p>
      <pre>{`const COOK_TYPE = 'повар';

const createNewCook = (firstName, lastName) => ({
  kind: COOK_TYPE,
  firstName,
  lastName,
  tool: 'knife',
  cut: () => {},
});

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};

const isCook = (obj) => obj.kind === COOK_TYPE;

const gordonRamsay = createNewCook('Gordon', 'Ramsay');

console.log(isCook(gordonRamsay));
console.log(isCook(developer));`}
      </pre>
      <p>Опишем функцию-конструктор Cook. Далее мы для этих целей будем использовать классы.</p>
      <p>Обратите внимание на регистр! Имена функций-конструкторов (и классов) принято писать с прописной буквы.</p>
      <pre>{`const Cook = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.tool = 'knife';
};`}
      </pre>
      <p>Добавим нашему объекту метод .cut().</p>
      <pre>{`const Cook = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.tool = 'knife';
};

Cook.prototype.cut = function() {
  console.log('Cut food');
};`}
      </pre>
      <p>Для теста подготовим объект, определяющий разработчика.</p>
      <pre>{`const Cook = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.tool = 'knife';
};

Cook.prototype.cut = function() {
  console.log('Cut food');
};

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};`}
      </pre>
      <p>Создадим новый объекта типа «Cook». Обратите внимание на оператор new. C его помощью мы получим не результат выполнения функции, который return, а объект со всеми свойствами и методами функции и её прототипа.</p>
      <pre>{`const Cook = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.tool = 'knife';
};

Cook.prototype.cut = function() {
  console.log('Cut food');
};

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};

const gordonRamsay = new Cook('Gordon', 'Ramsay');

console.log(gordonRamsay);`}
      </pre>
      <p>Не забывайте использовать оператор new при создании экземпляров объекта. Без него объект не будет создан. Вместо этого мы получим то, что возвращает обычная функция, если не описан return, а именно — undefined. А создать экземпляр объекта с помощью класса без new вообще не выйдет, получим ошибку.</p>
      <p>Но вернёмся к задаче, которая стояла перед нами в самом начале: как определить принадлежность объекта? С помощью оператора instanceof! Убедимся, что объект gordonRamsay действительно создан с помощью функции-конструктора Cook.</p>
      <pre>{`const Cook = function (firstName, lastName) {
  if (!new.target) {
    throw new Error(
      'Cook должен быть вызван с new.',
    );
  }

  this.firstName = firstName;
  this.lastName = lastName;
  this.tool = 'knife';
};

Cook.prototype.cut = function() {
  console.log('Cut food');
};

const developer = {
  firstName: 'Dan',
  lastName: 'Abramov',
  tool: 'React',
  code: () => {},
};

const gordonRamsay = new Cook('Gordon', 'Ramsay');

console.log(gordonRamsay);
console.log(gordonRamsay instanceof Cook);
console.log(developer instanceof Cook);
console.log(gordonRamsay.cut());
`}
      </pre>
      <p>Кстати, если кто-то задавался вопросом «Зачем нам new, если можно сделать return нужного объекта?» Вот два зачем:</p>
      <ul>
        <li>instanceof станет бесполезен;</li>
        <li>наследуемые методы (через prototype) перестанут наследоваться.</li>
      </ul>

      <h4>Функции-конструкторы</h4>
      <p>Об этом способе полезно знать, поскольку под капотом браузера классы устроены похожим образом, а легаси-код никто не отменял.</p>
      <p>Функция-конструктор — это обычная функция, особенной её делают договорённости:</p>
      <ul>
        <li>Функция-конструктор именуется с большой буквы. А также именем существительным, а не глаголом;</li>
        <li>Функция-конструктор вызывается только с оператором <span className="hl-1">new</span>.</li>
      </ul>
      <p>синтаксис у такой функции простой:</p>
      <pre>{`// Все свойства будущего объекта записываем через ключевое слово this
const GuitarPlayer = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

// Все методы мы записываем через свойство prototype функции-конструктора
GuitarPlayer.prototype.play = function () {
  console.log('Rock!');
};

// Далее вызываем с оператором new
const richieSambora = new GuitarPlayer('Richie', 'Sambora');

// И результатом получаем объект с указанными свойствами и методами:
console.log(richieSambora);
/*
    {
        firstName: 'Richie',
        lastName: 'Sambora',
        __proto__: {
            play: function () {
                console.log('Rock!');
            },
        }
    }
*/`}
      </pre>
      <p className="hl-10">Такой объект называют экземпляром или инстансом (от англ. instance).</p>
      <p className="hl-9">Если вдруг забыли, this — это контекст функции. Всё, что мы запишем в this, попадёт в свойства нашей функции, а после её вызова с оператором new превратится в свойства полученного объекта.</p>
      <p>А раз мы строим что-то по форме, всегда можно проверить, по какой именно форме был получен экземпляр. Для этого в языке есть специальный оператор instanceof:</p>
      <pre>{`richieSambora instanceof GuitarPlayer; // true

const fakeRichieSambora = {
  firstName: 'Richie',
  lastName: 'Sambora',
  play: function () {
    console.log('Rock!');
  },
};

fakeRichieSambora instanceof GuitarPlayer; // false`}
      </pre>
      <p>Иными словами, мы построили конвейер для штамповки объектов одной структуры, то есть для штамповки компонентов, что в терминах ООП является «классом». Теперь у нас появился удобный синтаксис — class.</p>

      <h3>Классы</h3>
      <p><b>Класс</b>— это чертёж, по которому мы можем создавать объекты.</p>
      <p className="hl-9">Класс — это фрагмент кода с именем</p>
      <p>Это хорошо видно из его синтаксиса: фрагмент кода определяется блоком фигурных скобок {}, а класс — это блок фигурных скобок с именем и специальным выражением class.</p>
      <p>Класс может содержать методы (указаны в теле) и свойства (записываются через this в методах). Ничего более в классе быть не может, потому что классы нужны для создания объектов, а у объектов есть только свойства и методы.</p>
      <pre>{`class GuitarPlayer {
  constructor(firstName, lastName) {
    this.firstName = firstName; // Свойство firstName
    this.lastName = lastName; // Свойство lastName
  }

  // Метод play
  play() {
    console.log('Rock!');
  }
}`}
      </pre>
      <p>Названия свойствам и методам разработчик придумывает самостоятельно. Всем, кроме служебного метода constructor. <span className="hl-5">JavaScript выполнит этот метод при создании экземпляра класса</span> c помощью new:</p>
      <pre>{`new GuitarPlayer('Richie', 'Sambora'); // Вызовет constructor и передаст ему 'Richie' как
firstName и 'Sambora' как lastName`}
      </pre>
      <p>Конструктор в классе может быть только один, а может отсутствовать вовсе</p>

      <h5>Статические методы класса</h5>
      <p>со словом static перед:</p>
      <pre>{`class GuitarPlayer {
  play() {
    console.log('Rock!');
  }

  // Статический метод
  static getMusicalInstrument () {
    console.log('Guitar');
  }
}

const player = new GuitarPlayer();

player.play(); // 'Rock!'

GuitarPlayer.getMusicalInstrument(); // 'Guitar'
// Обратите внимание, что статические методы
// нужно вызывать у класса, а не экземпляра,
// об этой особенности ниже`}
      </pre>
      <p>Статические методы в первую очередь используются для описания вспомогательных функций. Например Math.min(), Object.entries(), Array.from(), Number.isNaN() — это всё статические методы встроенных объектов. Подобную функциональность можно реализовать в своих классах. Однако, у статических методов есть особенности.</p>
      <p>Первая особенность, что в static-методах нельзя использовать this. То есть static-методы можно представить как методы, которые никак не взаимодействуют с другими свойствами и методами класса. Поэтому static-методы в первую очередь используются для описания вспомогательных функций.</p>
      <p>Вторая, не менее важная, особенность, что static-методы принадлежат тому классу, в котором объявлены, и не передаются экземплярам, а значит вызвать static-методы у экземпляров нельзя:</p>
      <pre>{`class A {
  static print () {
    console.log('Я статичный метод');
  }
}

A.print(); // Выведет в консоль: 'Я статичный метод'

const a = new A();

a.print(); // Получим ошибку "TypeError: print is not a function", потому что у экземпляра нет метода print`}
      </pre>
      <p>Что нужно запомнить про статические свойства? Если если вы сомневаетесь, нужен вам static-метод или обычный метод, используйте обычный.</p>

      <h5>Новый синтаксис записи свойств класса</h5>
      <p>В предложениях к стандарту ECMAScript описан новый синтаксис записи свойств класса:</p>
      <pre>{`class GuitarPlayer {
  personalPhrase = 'Rock!'; // Объявляем почти как переменную

  play() {
    console.log(this.personalPhrase); // Обращаемся по-прежнему через this
  }
}

Кстати, никто не запрещает записать в свойство функцию:

class GuitarPlayer {
  personalPhrase = 'Rock!';

  play = function () {
    console.log(this.personalPhrase);
  }
}`}
      </pre>
      <p>И хотя этот способ ещё не часть стандарта, он уже поддерживается большинством браузеров, а благодаря инструментам вроде Babel разработчики могут его использовать без оглядки на браузеры, которые этот способ не поддерживают.</p>
      <p>Но смысла в этом нет, ведь у класса есть методы, а вот если вместо обычной функции использовать стрелочную, смысл появляется:</p>
      <pre>{`class GuitarPlayer {
  personalPhrase = 'Rock!';

  play = () => {
    console.log(this.personalPhrase); // Так this всегда будет GuitarPlayer
  }
}`}
      </pre>
      <p>Ведь стрелочная функция запоминает контекст this места, где была объявлена. Получается, такая запись навсегда привязывает стрелочную функцию к контексту this класса, в котором она была записана в свойство.</p>

      <h4>Контекст функций this</h4>
      <pre>{`<!DOCTYPE html><html><head><meta charset="utf-8"><script src="//htmlacademy.github.io/console.js/latest/js/index-silent.js"></script><script>
  'use strict';

  /*
    Контекст функции задаётся при вызове,
    и не важно, как и где функция объявлена
  */
  function sayMyName() {
    console.log('- Say my name!');
    // this пока не известен,
    // и его может вообще не быть,
    // поэтому защищаемся оператором "?."
    console.log(- {this?.theName}?);
  }

  /*
    Если функция вызвана просто так, "без объекта",
    её контекстом будет undefined
  */
  sayMyName();

  console.log('--- --- --- ---');

  /*
    Каким будет контекст, можно "догадаться".
    Нужно посмотреть на левую от точки часть
  */
  const walterWhite = {
    theName: 'Heisenberg',
    ask: sayMyName // Передаём функцию объекту
  };

  walterWhite.ask();
  // ^^^^^^^^ - левая часть от точки и будет контекстом.
  // Работает для любых методов

  console.log('--- --- --- ---');

  /*
    Cтрелочные функции — исключение. У них нет своего контекста,
    а запоминают контекст места, где были объявлены.
    Ещё раз, объявлены - а не вызваны
  */
  // Объявим стрелку просто в файле
  const sayMyContext = () => {
    console.log('- Say my context!');
    console.log(- {this}?);
  };
  // Перезапишем метод ask стрелочной функцией
  walterWhite.ask = sayMyContext;

  // Вызовем
  walterWhite.ask();
  // Контекст - window, а не walterWhite.
  // Потому что стрелка объявлена "просто в файле",
  // то есть в глобальной области

  console.log('--- --- --- ---');

  /*
    Если говорить о разметке, важно помнить одну особенность:
    контекстом обработчика addEventListener
    всегда будет элемент, на который обработчик добавлен
  */
  document
    .querySelector('html')
    .addEventListener('click', function () {
      console.log('Обычная функция-обработчик', this);
      //                                        ^^^^ - html
    });
</script></head><body></body></html>`}
      </pre>
      <p>Мы вспомнили, что такое контекст. И теперь давайте рассмотрим ситуацию, когда «штатный» контекст функции нас не устраивает, и мы хотим его изменить (да, так можно). Изменить контекст функции при вызове можно с помощью методов .call() и .apply(), которые есть у каждой функции в JavaScript. Их отличие только в том, каким образом им передаются аргументы:</p>
      <ul>
        <li>в .call() аргументы нужно передавать через запятую (мнемоника comma, англ. «запятая»). Первым аргументом передаётся новый контекст, вторым и последующими — параметры функции.
          <pre>{'функция.call(новый_контекст, параметр_функции_1, параметр_функции_2, ...)'}</pre>
        </li>
        <li>в .apply() первым аргументом передаётся новый контекст, вторым — массив с параметрами функции (мнемоника array, англ. «массив»).
          <pre>{'функция.apply(новый_контекст, [параметр_функции_1, параметр_функции_2, ...])'}</pre>
        </li>
      </ul>
      <p>Результатом вызова методов .call() и .apply() будет новая функция с заданным контекстом.</p>
      <pre>{`'use strict';

// Параметры будут переданы через call и apply
const say = function(birthDate, guitarCount) {
  return Меня зовут: {this.firstName} {this.lastName}. Дата рождения: {birthDate}. Гитар в коллекции: {guitarCount}.;
};

const guitarPlayer = {
  firstName: 'Curt',
  lastName: 'Cobain',
};

const anotherGuitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
};

console.log(say.call(anotherGuitarPlayer, '20.02.1967', 19));
console.log(say.apply(guitarPlayer, ['20.02.1967', 277]));
`}
      </pre>
      <p className="hl-2">Методы .call() и .apply() могут пригодится ещё в случаях, когда мы хотим использовать элементы массива в качестве аргументов функции.</p>
      <p>Попробуем решить задачу нахождения наибольшего числа в массиве. Обратите внимание на параметры. Нам не требуется задавать определенный контекст, поэтому в первом параметре передаем null.</p>
      <pre>{`const myNumbers = [1, 3, 4, 100, 400];

/*
    Чтобы передать массив в функцию,
    которая принимает аргументы через запятую,
    можем воспользоваться методом .apply()
*/
console.log(Math.max.apply(null, myNumbers));

/*
    Хотя в современных браузерах удобнее использовать spread-синтаксис,
    в этом случае элементы массива тоже передадутся в функцию,
    как отдельные аргументы, но задать контекст не получится
*/
console.log(Math.max(...myNumbers)); // 400
`}
      </pre>
      <p>Теперь давайте посмотрим на контекст со стороны установки обработчиков событий. Это очень важно, так как именно здесь возникают странности и ошибки. Попробуйте кликнуть на кнопку и посмотреть значение this. Как мы уже говорили, контекст функции обработчика всегда соответствует элементу, на событие которого мы подписались. В нашем случае это кнопка. Вроде бы ничего странного, но дьявол кроется в деталях.</p>
      <pre>{`const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function (evt) {
  console.log(this);
  console.log(this === evt.target);
});
`}
      </pre>
      <p>Приведём код к более практичному виду: опишем простенький класс, который в конструктор принимает ссылку на элемент. В теле класса определим метод setListeners, в котором оформим подписку на событие click. Наша задача при клике вызвать метод onButtonClick и вывести содержимое поля объекта componentName. Пустяковая задача, но выполнив код, мы получим undefined. Почему так произошло? Дело в том, что мы в addEventListeners передали ссылку на функцию, без объекта. Вспоминаем правило, контекст зависит от того как мы вызываем функцию. Таким образом, контекстом в onButtonClick будет ссылка на элемент, а не на экземпляр класса ButtonView.</p>
      <pre>{`class ButtonView {
  constructor(element) {
    this.element = element;
    this.componentName = 'ButtonView';
  }

  setListeners() {
    this.element.addEventListener('click', this.onButtonClick);
  }

  onButtonClick() {
    console.log(this.componentName);
  }
}

const buttonElement = document.querySelector('button');
const buttonView = new ButtonView(buttonElement);
buttonView.setListeners();
`}
      </pre>
      <p>Как же решить эту проблему? Один из способов — воспользоваться знанием о замыканиях и реализовать функцию, для привязки контекста. Пусть такой функцией станет bindContext(). bindContext() принимает контекст context и функцию fn (назовём её «исходной»), к которой нужно привязать контекст. А возвращает новую анонимную функцию, внутри которой исходная вызывается с нужным контекстом через .call(). И если эту новую функцию вызвать, автоматически произойдёт вызов исходной с нужным контекстом. Теперь попробуем воспользоваться функцией bindContext() и заранее настроим контекст для метода объекта .onButtonClick(). А где следует воспользоваться этой функцией? Отличное для этого место — конструктор класса. Попробуйте кликнуть на кнопку, теперь всё работает так как и ожидается.</p>
      <pre>{`const bindContext = function (context, fn) {
  return function (...args) {
    return fn.call(context, ...args);
  };
};

class ButtonView {
  constructor(element) {
    this.element = element;
    this.componentName = 'ButtonView';

    this.onButtonClick = bindContext(this, this.onButtonClick);
  }

  setListeners() {
    this.element.addEventListener('click', this.onButtonClick);
  }

  onButtonClick() {
    console.log(this.componentName);
  }
}

const buttonElement = document.querySelector('button');
const buttonView = new ButtonView(buttonElement);
buttonView.setListeners();
`}
      </pre>
      <p>Наша реализация функции bindContext() получилась несколько громоздкой. Это было сделано намерено, чтобы разобраться в устройстве функции. Теперь мы можем «оптимизировать» её с помощью стрелочных функций.</p>
      <pre>{'const bindContext = (context, fn) => (...args) => fn.call(context, ...args);'}
      </pre>
      <p>На самом деле нет никакой необходимости создавать собственную функцию для привязки нужного контекста. В JavaScript есть готовое решение — метода .bind(). Этот метод доступен у каждой функции и работает точно также, как функция bindContext(). Давайте избавимся от собственной реализации и перейдём к .bind(). Всё работает как прежде.</p>
      <pre>{`class ButtonView {
  constructor(element) {
    this.element = element;
    this.componentName = 'ButtonView';

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  setListeners() {
    this.element.addEventListener('click', this.onButtonClick);
  }

  onButtonClick() {
    console.log(this.componentName);
  }
}

const buttonElement = document.querySelector('button');
const buttonView = new ButtonView(buttonElement);
buttonView.setListeners();`}
      </pre>
      <p>Давайте обсудим, а зачем мы связываем контекст именно в конструкторе? Может быть проще это делать в момент оформления подписки на событие? Хм, небольшой рефакторинг показывает, что утверждение справедливо. Давайте подумаем, а нет ли в нём каких-то минусов?</p>
      <pre>{`class ButtonView {
  constructor(element) {
    this.element = element;
    this.componentName = 'ButtonView';
  }

  setListeners() {
    this.element.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    console.log(this.componentName);
  }
}

const buttonElement = document.querySelector('button');
const buttonView = new ButtonView(buttonElement);
buttonView.setListeners();`}
      </pre>
      <p>Как мы уже сказали — способ вполне рабочий, но с ним есть одна сложность. Поскольку .bind() возвращает новую функцию, мы не сможем отменить подписку на событие. Именно поэтому привязку контекста следует делать именно в конструкторе класса.</p>
      <pre>{`class ButtonView {
  constructor(element) {
    this.element = element;
    this.componentName = 'ButtonView';
  }

  setListeners() {
    this.element.addEventListener('click', this.onButtonClick.bind(this));
  }

  onButtonClick() {
    console.log(this.componentName);

    this.element.removeEventListener('click', this.onButtonClick);
  }
}

const buttonElement = document.querySelector('button');
const buttonView = new ButtonView(buttonElement);
buttonView.setListeners();
`}
      </pre>
      <p>А ещё для привязки контекста можно использовать стрелочные функции. В начале мы говорили: у стрелочных функций нет своего контекста, они запоминают контекст места, где были объявлены. И если стрелочную функцию объявить в классе, записав в свойство, мы «заставим» её запомнить контекст объявление — наш класс. То есть, this в .onButtonClick() всегда будет ссылаться на ButtonView. Но! Кроме особенности про контекст у стрелочных функций есть ряд других:</p>
      <ul>
        <li>стрелочные функции нельзя вызвать с помощью .call() и .apply(), задав другой контекст;</li>
        <li>стрелочным функциям нельзя привязать другой контекст с помощью .bind().</li>
      </ul>

      <h5>Публичные, приватные и защищённые поля класса</h5>
      <p>Все методы и свойства, о которых говорилось до этого, — публичные. Они называются так потому, что к ним можно обратиться «снаружи», то есть извне класса.</p>
      <p>Если же метод или свойство использовать вне класса не планируется, его делают приватным. Названия приватных полей начинаются с решётки #. Если обратиться к такому полю снаружи, получим ошибку. Кроме того, приватные свойства обязательно должны быть объявлены до первого использования:</p>
      <pre>{`class GuitarPlayer {
  // Объявляем приватные свойства
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    // Записываем в приватные свойства полученные значения
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  // Объявляем приватный метод
  #createPhrase = () => {
    return 'My name is &dollar;{this.#firstName} &dollar;{this.#lastName}';
  }

  whoAm() {
    console.log(this.#createPhrase());
  }
}

const player = new GuitarPlayer('Richie', 'Sambora');

player.whoAm(); // Выведет в консоль 'My name is Richie Sambora'

console.log(player.#createPhrase()); // Ошибка!`}
      </pre>
      <p>Приватные свойства и методы могут использоваться только внутри самого класса. Если в родительском классе объявлен приватный метод или свойство, обратиться к нему из дочернего класса не получится. Если поле класса не используется снаружи, но при этом должно быть доступно в дочерних классах, его пемечают как защищённое. Названия защищённых полей начинаются с нижнего подчёркивания _.</p>
      <p>В отличие от приватных, защищённые поля — это просто договорённость между разработчиками. JavaScript никак не ограничивает к ним доступ, и с точки зрения самого языка защищённые поля ничем не отличаются от публичных:</p>
      <pre>{`class Man {
  constructor(firstName, lastName) {
    // Защищённые поля, как и публичные, можно заранее не объявлять
    this._firstName = firstName;
    this._lastName = lastName;
  }
}

class GuitarPlayer extends Man {
  whoAm() {
    console.log('My name is $dollar;{this._firstName}
    $dollar;{this._lastName}'); // Защищённые поля доступны из дочернего класса
  }
}`}
      </pre>
      <p>Приватные поля с решёткой появились в JavaScript относительно недавно. До этого все поля, которые не должны были использоваться снаружи, записывали с помощью нижнего подчёркивания и не разделяли их на приватные и защищённые. Вы можете встретить это в старых проектах.</p>
      <p className="hl-7">Класс — это не функция, не объект и не переменная. Это отдельная синтаксическая конструкция. По поведению эта конструкция ближе всего к объявлению функции. Разве что к классу, в отличие от такого объявления функции, нельзя обратиться до объявления.</p>
      <p>Таким образом, классы позволяют нам:</p>
      <ul>
        <li>определять, как одни сущности взаимодействует с другими сущностями. Например, в чертеже описаны входы-выходы, куда подключается усилитель (другая сущность), и так далее;</li>
        <li>описывать, как другие сущности взаимодействуют с нашей сущностью. Например, гитаристу нужно играть на ней левой рукой, а не правой;</li>
        <li>указать, как создавать новые экземпляры, то есть новые сущности. Например, семиструнные гитары.</li>
      </ul>
      <p>Вопросы для самопроверки</p>
      <ul>
        <li>– Что такое ООП?</li>
        <li>– Что такое класс?</li>
        <li>– Можно совмещать ООП и функции в JavaScript?</li>
        <li>– Как в JavaScript создать класс?</li>
        <li>– Что такое конструктор?</li>
        <li>– Что такое метод класса?</li>
        <li>– Сколько классов должно экспортироваться из одного модуля?</li>
      </ul>

      <h4>Классы ES2015</h4>
      <p>В ES2015 появилось новое ключевое слово class (как и во многих других языках программирования). Вы самостоятельно разобрали его в теории, а теперь давайте вместе разберём его на практике. class возможно объявить как просто конструкцией, так и частью выражения, например присвоения. Первый способ предпочтительнее, потому что более надежный ввиду отсутствия посредника.</p>
      <pre>{`// Конструкция
class GuitarPlayer {
  constructor() {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  play() {
    console.log('Rock!');
  }

  whoAm() {
    console.log('My name is {this.firstName} {this.lastName}');
  }
}

const richieSambora = new GuitarPlayer('Richie', 'Sambora');
richieSambora.play();
richieSambora.whoAm();

const jamesHetfield = new GuitarPlayer('James', 'Hetfield');
jamesHetfield.play();
jamesHetfield.whoAm();

const saulHudson = GuitarPlayer('Saul', 'Hudson'); // TypeError: Class constructor GuitarPlayer cannot be invoked without 'new'

// Часть выражения
const Singer = class {

};`}
      </pre>
      <p>У класса есть предопределенный метод — конструктор. Это функция, которая помогает создать экземпляр класса. Все свойства, необходимые для работы класса определяются в конструкторе. Методы класса определяются способом очень похожим на способ у объектов.</p>
      <p>Конструктор — необязательная часть класса. Если при создании экземпляра класса мы не хотим передавать какие-либо параметры, конструктор можно опустить.</p>
      <p>Но нам нужны свойства для метода whoAm, поэтому вернём всё, как было.</p>
      <p>Создадим пару экземпляров наших классов, используя оператор new. Важно! При попытке создать экземпляр класса без применения оператора, мы получим ошибку.</p>
      <p>Мы разобрали, как создавать и использовать классы в JavaScript. Какие у них есть свойства и методы. Ещё мы знаем, что защищённые свойства и методы помечаются символом подчёркивания _. Это просто договорённость, которой следуют все разработчики.</p>
      <pre>{`class GuitarPlayer {
  #skill;
  #guitarCount;

  constructor(skill, guitarCount) {
    this._skill = skill;
    this._guitarCount = guitarCount;
  }

  play() {
    console.log('Rock master {this._skill} level!');
  }
}

const richieSambora = new GuitarPlayer(10, 3);
richieSambora.play();`}
      </pre>
      <p>Не так давно в стандарт завезли возможность создавать приватные свойства и методы. Пометить свойство приватным поможет символ #. Эта возможность пока поддерживаются не всеми браузерами. Но, благодаря Babel, мы можем её использовать.</p>
      <p>Помимо обычных методов у классов могут быть статические методы и свойства. Такие свойства и методы помечаются ключевым словом static. Вместо того, чтобы создавать экземпляр гитариста руками, мы определили статический метод, который будет создавать за нас гитариста-новичка при вызове.</p>
      <pre>{`class GuitarPlayer {
  #skill;
  #guitarCount;

  constructor(skill, guitarCount) {
    this.#skill = skill;
    this.#guitarCount = guitarCount;
  }

  static createJuniorGuitarPlayer() {
    return new this(5, 2);
  }
}

const noviceGuitarPlayer = GuitarPlayer.createJuniorGuitarPlayer();

console.log(noviceGuitarPlayer);`}
      </pre>
      <p>Статическими могут быть не только методы, но и свойства. Смысл точно такой же, как и у методов.</p>
      <pre>{`class GuitarPlayer {
  #skill;
  #guitarCount;

  constructor(skill, guitarCount) {
    this.#skill = skill;
    this.#guitarCount = guitarCount;
  }

  static defaultName = 'Hendrix';

  static createJuniorGuitarPlayer() {
    return new this(5, 2);
  }
}

const noviceGuitarPlayer = GuitarPlayer.createJuniorGuitarPlayer();

console.log(noviceGuitarPlayer);`}
      </pre>
      <p>Помимо традиционных полей язык предоставляет возможность описывать вычисляемые поля (get/set). То есть поля, значение которых может быть вычислено в процессе получения. Свойство skill стало вычисляемым, и при обращении к нему возвращается объект, содержащий поля #skill и #guitarCount. Такое свойство помечается get и называется геттером (от англ. getter).</p>
      <pre>{`class GuitarPlayer {
  #skill;
  #guitarCount;

  constructor(skill, guitarCount) {
    this.#skill = skill;
    this.#guitarCount = guitarCount;
  }

  static createJuniorGuitarPlayer() {
    return new this(5, 2);
  }

  get skill() {
    return {
      skill: this.#skill,
      guitarCount: this.#guitarCount,
    };
  }
}

const noviceGuitarPlayer = GuitarPlayer.createJuniorGuitarPlayer();

console.log(noviceGuitarPlayer);

// Воспользуемся get
console.log(noviceGuitarPlayer.skill);
`}
      </pre>
      <p>А как установить значение такому «полю»? Для этого нам требуется создать set — сеттер (от англ. setter) — для свойства skill.</p>
      <pre>{`class GuitarPlayer {
  #skill;
  #guitarCount;

  constructor(skill, guitarCount) {
    this.#skill = skill;
    this.#guitarCount = guitarCount;
  }

  static createJuniorGuitarPlayer() {
    return new this(5, 2);
  }

  get skill() {
    return {
      skill: this.#skill,
      guitarCount: this.#guitarCount,
    };
  }

  set skill(value) {
    this.#skill = value;
  }
}

const noviceGuitarPlayer = GuitarPlayer.createJuniorGuitarPlayer();

console.log(noviceGuitarPlayer);

// Воспользуемся get
console.log(noviceGuitarPlayer.skill);

// Установим новое значение для уровня через set
noviceGuitarPlayer.skill = 80;

// Вновь получим значение
console.log(noviceGuitarPlayer.skill);`}
      </pre>
      <p>Кстати, вы обратили внимание, какая здесь неконсистентность методов? Считываем мы объект, а записываем примитив. Это плохо! В качестве домашнего задания подумайте, как это можно исправить.</p>
      <p>Зачем нам могут потребоваться сеттеры? Чтобы устанавливать значения для приватных свойств. Да, мы можем сделать поле публичным и обойтись без сеттера, но тогда мы нарушим принцип ООП, потому что проверки будут где-то снаружи. А так сеттер нам поможет, например, выполнить дополнительные проверки.</p>

      <h4>Сравнение поведения функций-конструкторов и классов ES2015</h4>
      <p>class — новая языковая конструкция. На первый взгляд может показаться, что class лишь ещё один способ писать функции-конструкторы. Это не совсем так. Для начала вспомним и посмотрим, как бы выглядел код без использования class. На первый взгляд всё работает идентично.</p>
      <pre>{`// Данные
const mockSinger = {
  skill: 10,
};

const mockGuitarPlayer = {
  skill: 10,
  guitarCount: 8,
};

// ES5
const Singer = function ({skill}) {
  this._skill = skill;
};

Singer.prototype.start = function () {
  console.log('Sing...');
};

// ES6
class GuitarPlayer {
  constructor({skill, guitarCount}) {
    this._skill = skill;
    this._guitarCount = guitarCount;
  }

  start() {
    console.log('Play...');
  }
}


const singer = new Singer(mockSinger);
const guitarPlayer = new GuitarPlayer(mockGuitarPlayer);


for (const property in singer) {
  console.log('Вокалист', property);
}

for (const property in guitarPlayer) {
  console.log('Гитарист', property);
}


Методы class не перечисляемые.
То есть при переборе всех полей в результат не попадут методы класса.`}
      </pre>
      <p>Первое главное отличие — class не может быть вызван без new. Стоит отметить, что с помощью target.new такое поведение можно эмулировать и для функции конструктора. Мы это уже видели. Отличным будет и результат вывода в консоль. Для класса мы получаем class, а для функции-конструктора — функцию.</p>

      <h3>Программный интерфейс</h3>
      <p><b>Интерфейс</b> — это описание того, как должен выглядеть объект без его реализации. Допустим, у меня есть массив. Что такое массив? Это объект, у которого есть свойство length, являющееся числом.</p>
      <p>Кроме свойства length, у этого массива есть метод map. map — это функция, которая принимает на вход функцию, которая принимает на вход элемент массива — любое значение. Вторым аргументом она принимает на вход индекс — число. Третий аргумент — весь массив. И возвращает эта функция новый элемент массива — любое значение. Сейчас мы говорим не о реализации, а лишь о типах данных, поступающих на вход и возвращаемых функцией.</p>
      <p>Ещё есть метод filter. Он принимает на вход функцию, которая принимает на вход элемент массива — любое значение, число и массив, а возвращает булево значение.</p>
      <p>И отличаются map и filter между собой тем, что первая функция возвращает новый элемент массива — любое значение, а вторая функция булево значение. Опишем структуру объекта типа Array с помощью псевдокода:</p>
      <pre>{`Array = {
   length: number,
   map: function(function(*, number, Array): *): Array,
   filter: function(function(*, number, Array): boolean): Array,
};`}
      </pre>
      <p>Мы описали неполную (ограничились length, map и filter) структуру массива, у которой length — это число, map и filter — это функции, которые принимают на вход другую функцию и возвращают массив. Подобное описание объектов (не с точки зрения синтаксиса, а с точки зрения смысла) является интерфейсом. То есть интерфейс — это описание структуры объекта, его свойств и методов, типов этих свойств, а также аргументов методов и их возвращаемых значений. Интерфейс не описывает реализацию, а только типы данных.</p>

      <h4>Примеры интерфейсов</h4>
      <p>Вот, например, интерфейс функции Math.abs выглядит так: Math.abs — это функция, которая принимает на вход число и возвращает ещё одно число. Array.map — это функция, которая принимает на вход функцию и возвращает массив.</p>
      <pre>{`Math.abs: function(number): number;
Math.random: function(): number,
Array.map: function(function(*, number, Array): *): Array;`}
      </pre>

      <h4>Почему интерфейс важен</h4>
      <p>Интерфейс — это способ описания ваших объектов, любых сущностей, без описания их реализации. Он содержит в себе минимальную информацию о структуре и типах данных. А эта информация помогает нам писать код, потому что мы знаем, что от нас ждут другие участки кода, функции, модули.</p>

      <h3>Объектно-ориентированное программирование</h3>
      <p>ООП достаточно сложная парадигма и даже на этапе определения появляются разночтения. Изначально ООП придумали для языка Smalltalk. Этот язык в свою очередь очень сильно повлиял на язык Objective C. В каноническом виде ООП — это описание всех сущностей в коде в виде объектов, которые обмениваются между собой сообщениями. Чтобы все это работало — объекты и сообщения между ними — у каждого объекта должен быть известный интерфейс. То есть, чтобы пользоваться конкретным объектом правильно, необходимо понимать, как он устроен, какие у него есть свойства и методы.</p>
      <p>Зачем нам нужно ООП? Зачем нам нужны чёткие и понятные интерфейсы объектов? Потому что с помощью ООП мы создаём абстракции. А что такое абстракция? Абстракция — это когда мы абстрагируемся от конкретных деталей реализации и переходим на уровень выше для того, чтобы понять, как взаимодействуют сущности на высоком уровне.</p>
      <p>ООП позволяет с помощью объектов описывать всё что угодно. Мы неоднократно разговаривали о гитаристах. Так же вы можете создать объект, чтобы описать некое животное, допустим, собаку. Вы можете создать объект, который будет описывать свойства этого животного и методы, которые можно использовать.</p>
      <p>Зачем мы создали абстракцию на уровне ООП? Для того, чтобы мы могли говорить не в терминах конкретных DOM-элементов, не в терминах того, как мы вставляем разметку в DOM-дерево, добавляем css-классы или производим другие операции с DOM. Мы создаём эти абстракции, чтобы описать сущности предметной области и логику.</p>
      <p>А что такое логика? Когда к вам приходит менеджер проекта, он обычно даёт вам техзадание, в котором написано — сайт содержит карточки задач, которые составляют полный список этих самых задач. Карточки переключаются между собой фильтрами, то есть имеется список фильтров. Получается, что когда вы начинаете использовать ООП в своём коде, вы отходите от конкретной реализации и описываете поведение вашего сайта на уровне абстракции. Это значит, что вместо того, чтобы оперировать такими понятиями как DOM-элемент, который является тегом <code>&lt;article&gt;</code>, у которого есть css-класс .task, внутри которого лежит тег <code>&lt;button&gt;</code>, вы оперируете понятием «карточка задачи». Чтобы у вас появилась карточка задачи, вам нужно соответственно описать класс, который называется Task.</p>
      <p>Задач у вас много, вы их начинаете между собой связывать. Задачи находятся внутри списка задач, то есть внутри доски, на которой эти задачи размещаются. Поэтому будет полезным создать новую абстракцию, которая так и называется — Board, для проведения манипуляций со списком карточек. Получается, что ООП помогает приблизиться к уровню описания техзадания вашего проекта. Если посмотреть на этот код без конкретных деталей реализации — вы начинаете писать его, как будто объясняете кому-то просто на английском языке. Компонент новой задачи, я отрисовываю в начале списка этих задач. Получается, я создаю новую абстракцию, которая уже не оперирует DOM-деревом, и это может быть нам полезно.</p>
      <p>Получается, что ООП позволяет нам говорить на более высоком уровне, позволяет нам обращаться с кодом на уровне понимания того, как работает в целом система. Ровно то, о чем было сказано выше — это объекты и сообщение между ними. Вы разделяете карточку задачи на некоторые объекты, которые есть внутри этой карточки и настраиваете между ними некоторые связи. А ещё, кроме того, что классы позволяют вам начать мыслить более абстрактно, у вас упрощается сопровождение кода. Наверное...</p>
      <p>Почему «наверное»? Вот здесь самая главная оговорка про ООП. Сейчас мы с вами рассматриваем, какие бывают виды компонентов, как их можно между собой стыковать, как они между собой взаимодействуют. Но дело в том, что ООП не работает без определённого рода договорённостей. Это значит, что в ООП нет смысла, если вы используете его только для себя. Если вы используете ООП в команде и используете в качестве этих абстракций (объектов) какие-то сущности, которые другие разработчики не поймут, то есть только плод вашего сознания, то ООП вам не поможет. ООП нужно для того, чтобы договориться всем вместе и начать разговаривать на одном языке.</p>

      <h4>«Недостатки» ООП</h4>
      <p>И самый главный минус — это высокий порог входа. Чтобы начать писать на ООП, вам нужно пройти тот путь, который вы прямо сейчас уже прошли. Сначала нужно понять, что такое программирование в принципе, что такое алгоритмы. Потом вам нужно понять, что такое функции внутри этих алгоритмов. Далее — что такое модули. И только потом, когда вы начнёте понимать эти вещи, вы сможете начать мыслить на более высоком уровне.</p>
      <p>Кроме этого существует мнение, что использование ООП сделает ваши программы лучше. Но само по себе не сделает. ООП — это просто способ написания кода, когда вы всё описываете в виде объектов, и описываете взаимосвязи между объектами. Но когда у вас появляется очень много разных сущностей, программа становится большой и внутри неё становится сложно ориентироваться, вам становится необходима архитектура приложения. То есть вам нужно будет не только выделить сами сущности и компоненты, но и определиться с их ролями, видом и организацией.</p>
      <p>Так же ООП не подходит для решения любой задачи. Очень частая ошибка новичков заключается в том, что, начиная изучать ООП, пишешь классы там, где просто достаточно написать одну маленькую функцию. Объектно-ориентированный подход нужно использовать только тогда, когда он нужен. Иногда бывают ограничения. Например, в языках Java и Kotlin, можно использовать только ООП-подход — потому что это ООП-языки, другие парадигмы в них не работают. Но важно помнить, что не нужно усложнять свой код с ООП, а это очень большой соблазн. Когда вы начинаете углубляться в абстракции — нужно уметь держать себя в руках и в какой-то момент времени останавливать рост абстракций.</p>

      <h4>Принципы ООП</h4>
      <p><span className="hl-7">Первый принцип называется инкапсуляция, второй — наследование, третий — полиморфизм.</span></p>

      <h5>Инкапсуляция</h5>
      <p>С латыни переводится как in capsulo — помещение чего-то в капсулу. И на самом деле, понятие инкапсуляции относится не только к программированию. В программировании инкапсуляция — это сокрытие деталей реализации, это как раз про интерфейсы. Первый принцип ООП — каждый объект должен иметь свой собственный чёткий интерфейс, и детали его реализации должны быть инкапсулированы внутри этого интерфейса.</p>
      <p>У нас есть компьютер, и он умеет очень много разных вещей. Он умеет отображать информацию на экране, умеет эту информацию принимать через клавиатуру, умеет выводить информацию через колонки, принимать через микрофон. Он умеет блокироваться, у него есть способы соединения с сетью, у него есть способы хранить информацию. Но это все разные вещи. Если посмотреть на компьютер как на объект, то его интерфейсом будет, например, экран и клавиатура. Интерфейс — это то, с помощью чего вы взаимодействуете с объектом. Я могу вводить информацию в компьютер, и компьютер мне эту информацию выведет. Мне по большому счёту не важно, как он это реализует. Мне это неинтересно, это интересно компьютеру. Компьютеру то, что пользователь ввёл с клавиатуры, нужно где-то сохранить. Ему нужен жёсткий диск. Когда я сижу за компьютером, мне не интересен жёсткий диск. Я пользуюсь публичным интерфейсом этого компьютера, а все детали его реализации инкапсулированы.</p>
      <p>Первый принцип ООП заключается в том, что у каждого объекта есть чёткий фиксированный интерфейс, но нам не интересны детали его реализации — они инкапсулированы и скрыты внутри объекта.</p>
      <p>Класс должен быть черным ящиком, мы взаимодействуем с классом через его публичный интерфейс. Мы не пытаемся изменить поведение или состояние класса в обход публичного интерфейса. Мы не пытаемся переписать приватные поля класса ради этого. И это очень важно, потому что если мы начинаем вмешиваться в то, как работает этот класс — мы можем сломать наш код или даже чужой код, который так же использует этот класс. Именно про это говорит принцип инкапсуляции.</p>
      <p>Инкапсулирование — это про то, что мы прячем реализацию внутрь, а наружу выставляем только публичные методы. Дело в том, что методы и свойства разделяются на два вида — публичные и приватные. Публичные — это то, чем мы можем пользоваться снаружи. Приватные — это то, как мы храним информацию внутри, к приватными относятся и #приватные свойства, и _защищённые.</p>
      <p>Рассмотрим объект Date. Я пользуюсь этим объектом как настоящей датой, я могу вывести её в консоль, могу потрогать её методы. То есть я пользуюсь этим объектом с помощью публичного интерфейса, но что является инкапсуляцией? Инкапсуляцией является то, что на самом деле где-то внутри себя Date хранит число — количество миллисекунд, прошедших с начала эпохи Unix, то есть с полуночи первого января 1970 года. Мне не нужно это знать, чтобы пользоваться объектом Date:</p>
      <pre>{`const now = new Date();
console.log(now.getMonth() + 1);`}
      </pre>
      <p>Это часть публичного интерфейса, а то, что он внутри хранит у себя число — это приватные данные, и нам это неинтересно.</p>
      <p>Интерфейс — это набор всех свойств и методов объекта, просто часть этих свойств и методов — публичная, а часть — приватная, то есть она инкапсулирована внутри объекта, и я не хочу ей пользоваться. Поэтому, например, нужны геттеры и сеттеры. Если бы я писал объект Date с нуля, я бы создал внутри свойство _value, которое было бы числовым. А потом создал бы методы set month() и get month():</p>
      <pre>{`const myDate = {
  _value: 0,

  getMonth() {
    return this._value / 100;
  },

  setMonth(value) {
    this._value = value;
  },
};`}
      </pre>
      <p>И эта часть интерфейса (защищёное поле _value) у меня приватная. Она нужна только для того, чтобы все работало. А эта часть (setMonth(), getMonth()) — публичная. Я как бы говорю другим программистам — пользуйтесь публичной частью моего объекта, потому что она замечательная, и у меня есть все необходимые методы, чтобы вы могли этим объектом пользоваться.</p>
      <p>В языке Java есть специальное слово private, которое помечает часть интерфейса как приватную, вы ничего не можете с ней сделать снаружи. В JavaScript не так. В нём вы можете получить доступ к приватным методам, поскольку на уровне самого языка нет конструкций, помечающих свойства и методы как приватные. Поэтому программисты просто договорились, что поля, начинающиеся с _ являются приватными, и к ним обращаться снаружи нельзя.</p>
      <p>JavaScript позволяет ограничить доступ снаружи к #приватным полям, но _защищённые доступны всем. Программисты просто договорились, что поля, начинающиеся с _, являются защищёнными, и к ним обращаться снаружи нельзя. Но вам всё равно нужно продумывать, какая часть вашего интерфейса будет публичной, а какая — приватной.</p>
      <p>Подытожим: к #приватным полям не даст обратиться сам JavaScript, к _защищённым сами программисты не будут. Получается, что интерфейс — про то, чтобы воспользоваться объектом, а приватная часть, инкапсуляция — она про то, чтобы не сломать то, за счёт чего этот объект работает.</p>

      <h5>Наследование</h5>
      <p>Опишем класс `Man`. Добавим ему методов. Отнаследуемся. Добавим новые свойства в дочерний класс. Добавим новые методы в дочерний класс. Добавим новые методы, но не будем добавлять свойства в дочерний класс.</p>
      <pre>{`class Man {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  walk() {
    console.log('Walk...');
  }

  jump() {
    console.log('Jump...');
  }
}

const bob = new Man('Bob', 'Gale');

console.log(bob.firstName, bob.lastName);

bob.walk();
bob.jump();

class GuitarPlayer extends Man {
  constructor(firstName, lastName, guitarCount) {
    super(firstName, lastName);

    this.guitarCount = guitarCount;
  }

  getGuitarCount() {
    return this.guitarCount;
  }

  // Переиспользование родительских методов в дочернем классе.
  doubleJump() {
    super.jump();
    super.jump();
  }

  // Полиморфизм методов или перегрузка (override).

  jump() {
    console.log('Mega jump!!!');
  }

  doubleJump() {
    super.jump();
    super.jump();
  }

  // Исправляем ошибки применения полиморфизма методов.
  doubleJump() {
    this.jump();
    this.jump();
  }
}

const richieSambora = new GuitarPlayer('Richie', 'Sambora', 77);

console.log(richieSambora.firstName, richieSambora.lastName, richieSambora.guitarCount);

richieSambora.walk();
richieSambora.jump();
console.log(I have {richieSambora.getGuitarCount()} guitars);`}
      </pre>
      <p>Добавляем абстрактный класс. Наследуем от абстрактного класса.</p>
      <pre>{`class AbstractMan {
  constructor(firstName, lastName) {
    if (new.target === AbstractMan) {
      throw new Error('Can't instantiate Abstract class, only concrete one.');
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  walk() {
    throw new Error(Abstract method not implemented: {this.walk.name});
  }

  jump() {
    throw new Error(Abstract method not implemented: {this.jump.name});
  }
}

class Man extends AbstractMan {
  walk() {
    console.log('Walk...');
  }

  jump() {
    console.log('Jump...');
  }
}

const bob = new Man('Bob', 'Gale');

console.log(bob.firstName, bob.lastName);

bob.walk();
bob.jump();

class GuitarPlayer extends Man {
  jump() {
    console.log('Mega jump!!!');
  }

  doubleJump() {
    this.jump();
    this.jump();
  }
}

const richieSambora = new GuitarPlayer('Richie', 'Sambora');

console.log(richieSambora.firstName, richieSambora.lastName);

richieSambora.jump();
richieSambora.walk();
richieSambora.doubleJump();`}
      </pre>
      <p>Посмотрим на полиморфизм более глобально. Добавим класс Manager. Метод `setJunior` может принимать любой объект, который удовлетворяет интерфейсу `AbsractMan`. Нотация у метода — это просто комментарий, который подсказывает, с какой структурой он работает.</p>
      <pre>{`class Manager {
  #junior = null;

  /**
   * Эта нотация называтся JSDoc https://jsdoc.app/howto-es2015-classes.html
   * @type {AbstractMan} junior
   */


  // Реализуем методы command*.
  commandWalk() {
    this.#junior.walk();
  }

  commandJump() {
    this.#junior.jump();
  }



  setJunior(junior) {
    this.#junior = junior;
  }

  commandWalk() {}

  commandJump() {}
}

const bob = new Man('Bob', 'Gale');
const richieSambora = new GuitarPlayer('Richie', 'Sambora');

console.log(bob.firstName, bob.lastName);

bob.walk();
bob.jump();

console.log(richieSambora.firstName, richieSambora.lastName);

richieSambora.jump();
richieSambora.walk();
richieSambora.doubleJump();`}
      </pre>
      <p>Используем полиморфизм в деле. Передаем менеджеру инстансы разных классов, но имеющие единый интерфейс. Менеджер ничего не знает о реализации этих объектов, но он знает все об их интерфейсе. И это позволяет быть коду гибким и расширяемым. Думай об интерфейсе.</p>
      <pre>{`class AbstractMan {
  constructor(firstName, lastName) {
    if (new.target === AbstractMan) {
      throw new Error('Can't instantiate Abstract class, only concrete one.');
    }

    this.firstName = firstName;
    this.lastName = lastName;
  }

  walk() {
    throw new Error(Abstract method not implemented: {this.walk.name});
  }

  jump() {
    throw new Error(Abstract method not implemented: {this.jump.name});
  }
}

class Man extends AbstractMan {
  walk() {
    console.log('Walk...');
  }

  jump() {
    console.log('Jump...');
  }
}

class GuitarPlayer extends Man {
  jump() {
    console.log('Mega jump!!!');
  }

  doubleJump() {
    this.jump();
    this.jump();
  }
}

class Manager {
  #junior = null;

  /**
   * Эта нотация называтся JSDoc https://jsdoc.app/howto-es2015-classes.html
   * @type {AbstractMan} junior
   */
  setJunior(junior) {
    this.#junior = junior;
    const {firstName, lastName} = junior;
    console.log(Manager controll {firstName} {lastName});
  }

  commandWalk() {
    this.#junior.walk();
  }

  commandJump() {
    this.#junior.jump();
  }
}

const manager = new Manager();
const bob = new Man('Bob', 'Gale');
const richieSambora = new GuitarPlayer('Richie', 'Sambora');

manager.setJunior(bob);
manager.commandWalk();
manager.commandJump();

manager.setJunior(richieSambora);
manager.commandWalk();
manager.commandJump();

console.log('--');
richieSambora.doubleJump();
`}
      </pre>
    </section>
  );
}
export default AboutProgramming;
