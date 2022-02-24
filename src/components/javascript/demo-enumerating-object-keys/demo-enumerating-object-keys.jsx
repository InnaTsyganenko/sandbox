import React from 'react';

function DemoEnumeratingObjectKeys() {

  return (
    <section className="conspect">
      <h1>Перечисление ключей объекта</h1>
      <p>Давайте разберемся с перебором всех свойств объекта. Ключей и значений по отдельности и парой. Подготовим для этого новый объект.</p>
      <p>Для большей наглядности добавим два метода: play и playSolo.</p>
      <p>Получить список свойств объекта нам поможет метод entries() глобального объекта Object. Список свойств придёт в виде массива массивов.</p>
      <p>Получить список только значений объекта нам поможет метод values() глобального объекта «Object». Список значений придёт в виде массива.</p>
      <p>Мы посмотрели, как перебирать свойства и отдельно значения. Пора узнать, как получить ключи. Но прежде давайте сформулируем задачу. Цель демонстрации — написать код для вызова всех методов объекта.</p>
      <p>У нас есть список ключей. Давайте перейдем к нашей главной задаче — напишем код, который вызовет методы объекта. Для начала опишем цикл, в котором будем перебирать все полученные свойства объекта.</p>
      <p>Вызвать мы можем только методы, поэтому добавим проверку. Если свойство является функцией, то значит его можно выполнить.</p>
      <p>На самом деле мы могли пойти другим путём и воспользоваться циклом for..in. Но он неудобный, потому что требует дополнительные проверки, и устаревший.</p>
      <p>Цикл for..in совершает обход всех перечисляемых свойств объекта. И если объекту достались перечисляемые свойства от объекта-прототипа, то цикл for..in объединит их со свойствами текущего объекта. Таким образом, чтобы избежать получения лишних свойств объекта, нужно каждый раз проверять принадлежит ли свойство текущему объекту.</p>
      <p>Обратите так же внимание на такую особенность цикла for..in, он проходит по свойствам в произвольном порядке. Поэтому цикл for..in нужно использовать осторожно в тех случаях, когда важна последовательность перебора свойств. Например, при работе с массивами.</p>
      <pre>{`
      const guitarPlayer = {
        firstName: 'Richie',
        lastName: 'Sambora',
        soloSpeed: 10,
        birthDate: '11.07.1959',
        guitarCount: 277,
        isLeftHanded: false,
        play() {
          console.log('Lets's rock!');
        },
        playSolo(speed = 2) {
          console.log('Play solo {speed}x');
        },
      };

      const entries = Object.entries(guitarPlayer);
      console.log(entries);

      const values = Object.values(guitarPlayer);
console.log(values);

const keys = Object.keys(guitarPlayer);
console.log(keys);

const keys = Object.keys(guitarPlayer);

for (const propertyName of keys) {
  if (typeof guitarPlayer[propertyName] === 'function') {
    guitarPlayer[propertyName]();
  }
}

for (const key in guitarPlayer) {
  if (typeof guitarPlayer[key] === 'function') {
    guitarPlayer[key]();
  }
}






Object.prototype.getUpperCaseName = function () {
  if (this.firstName) {
    console.log(this.firstName.toUpperCase());
  } else {
    console.log('No found firstName key');
  }
};

const guitarPlayer = {
  firstName: 'Richie',
  lastName: 'Sambora',
  soloSpeed: 10,
  birthDate: '11.07.1959',
  guitarCount: 277,
  isLeftHanded: false,
  play() {
  	console.log('Lets's rock!');
  },
  playSolo(speed = 2) {
  	console.log('Play solo {speed}x');
  },
}

for (const key in guitarPlayer) {
  if (guitarPlayer.hasOwnProperty(key)) {
    if (typeof guitarPlayer[key] === 'function') {
      console.log('Метод объекта');
      guitarPlayer[key]();
    }
  } else {
    console.log('Метод прототипа');
    guitarPlayer[key]();
  }
}`}
      </pre>
    </section>
  );
}
export default DemoEnumeratingObjectKeys;
