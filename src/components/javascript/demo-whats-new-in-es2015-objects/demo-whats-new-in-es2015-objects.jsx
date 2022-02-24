import React from 'react';

function DemoWhatsNewInEs2015Objects() {

  return (
    <section className="conspect">
      <h1>Новые возможности объектов ES2015</h1>
      <p>Посмотрим, что нового появилось в объектах стандарта ECMAScript 2015.</p>
      <p>Появились сокращения при объявлении свойств объекта. Мы можем указать в качестве ключа переменную, и эта переменная автоматически раскроется в пару ключ-значение, где ключ — имя переменной, а значение — значение переменной, соответственно. Важно помнить, что при переименовании переменной переименуется и её ключ.</p>
      <p>При объявлении метода объекта появилась короткая запись, которая позволяет записать сразу тело функции и имя. Важно помнить, что метод — это не стрелочная функция, а обыкновенная.</p>
      <p>Помимо обычных методов у объектов доступны специальные методы — getter и setter. Эти методы притворяются свойствами или полями объекта, хотя на самом деле являются функциями. Чтобы вызвать getter, надо обратиться к нему без скобок. Соответственно, setter используется, чтобы установить значение. Если определен только setter, то взять значение по этому имени невозможно.</p>
      <p>Спецификация явно запрещает одновременно использовать свойство и get/set с одним названием на троих. Обычно, переименовывают свойство (строка 4), например в _name.</p>
      <p>Будьте внимательны, одноимённые свойство и get/set вызывают ошибку не во всех браузерах, а значит разработчику нужно следить за неймингом самостоятельно.</p>
      <p className="hl-1">getter может быть только функцией без параметров, а setter — функцией с ровно одним параметром.</p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <pre>{`
      const name = 'Кекс';
      const male = true;
      const age = 7;

      const expected = {
        name: name,
        male: male,
        age: age,
      };

      const actual = {name, male, age};

      console.log(actual);




      const name = 'Кекс';

const expected = {
  name: name,
  meow: function () {
    return 'Мяу!';
  },
};

const actual = {
  name,
  meow() {
    return 'Мяу!';
  },
};

console.log(expected);
console.log(actual);


let name = 'Кекс';

const cat = {
  getName() {
    return name;
  },
  setName(newName) {
    name = newName;
  },
};

console.log(cat.getName());

cat.setName('Новое имя');

console.log(cat.getName());

console.log(cat.name);



const name = 'Кекс';

const cat = {
  set name(newName) {
    this.myName = newName;
  },
};

console.log(cat.name); undefined

cat.name = 'Феофан';

console.log(cat.name); undefined
console.log(cat.myName); Феофан




const name = 'Кекс';

const cat = {
  name,
  set name(newName) {
    this.myName = newName;
  },
  get name() {
    return this.myName;
  },
};

console.log(cat.name);

cat.name = 'Феофан';

console.log(cat.name);
console.log(cat.myName);


Также ключи объектов теперь можно вычислять во время создания.

const name = 'Кекс';

const states = ['Жидкий', 'Твёрдый', 'Газообразный'];
const randomState = () => states[Math.floor(Math.random() * states.length)];

const expected = {
  name: name,
};
expected[randomState()] = true;

const actual = {
  name,
  [randomState()]: true,
};

console.log(expected);
console.log(actual);



Благодаря этому можно использовать шаблонную строку в качестве ключа.

const name = 'Keкс';
const owner = 'Александр';

const actual = {
  name,
  ['owner — {owner}']: true,
};

console.log(actual);



Ключи get и set также могут быть вычисляемыми.

const name = 'Keкс';
const owner = 'Александр';

const actual = {
  get ['name']() {
    return name;
  },

  ['owner — {owner}']() {
    return owner;
  },
};

console.log(actual);


Из мелких изменений в объектах — подвешеная запятая и возможность определить одно и
то же поле несколько раз, при этом побеждает самое позднее объявление.

const name = 'Keкс';
const owner = 'Александр';

const actual = {
  name,
  owner,
  owner: 'Пётр',
  ['owner']: 'Леопольд',
  allowsTrailingComma: true,
};

console.log(actual);

`}
      </pre>
    </section>
  );
}
export default DemoWhatsNewInEs2015Objects;
