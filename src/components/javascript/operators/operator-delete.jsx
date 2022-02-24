import React from 'react';

function OperatorDelete() {

  return (
    <section className="conspect">
      <h1>Оператор delete</h1>
      <p>Свойства объектов можно удалять. В любой момент вы можете удалить свойство объекта при помощи оператора delete.</p>
      <pre>{`
        // Объект "Гитарист"
        const guitarPlayer = {
          firstName: 'Richie',
          lastName: 'Sambora',
          play() {
            console.log('Rock!');
          },
        };

        console.log(guitarPlayer.lastName);

        // Свойство может быть удалено
        delete guitarPlayer.lastName;

        console.log(guitarPlayer.lastName);
      `}
      </pre>
      <p>Раз свойства у объектов можно удалять, то вполне возможна ситуация, когда потребуется выполнить проверку на существование определённого свойства. Это можно сделать несколькими способами. Первый: сравнить с undefined. Второй: воспользоваться оператором in.</p>
      <pre>{`
        const makeGuitarPlayer = (firstName, lastName) => {
          return {
            firstName,
            lastName,
          };
        };

        const guitarPlayer = makeGuitarPlayer('Richie', 'Sambora');
        console.log(guitarPlayer);

        // Проверим, существует ли свойство 'firstName'

        // Способ №1. Сравнить с undefined
        console.log(guitarPlayer.firstName !== undefined);

        // Способ №2. Воспользоваться оператором 'in'
        console.log('firstName' in guitarPlayer);
      `}
      </pre>
      <p>Выбирая первый способ, следует быть осторожным. Ничего не мешает присвоить свойству объекта значение undefined. Такая операция не удалит свойство, но может ввести в заблуждение во время выполнения проверки. Поэтому лучше воспользоваться вариантом с оператором in.</p>
      <pre>{`
        const makeGuitarPlayer = (firstName, lastName) => {
          return {
            firstName,
            lastName,
          };
        };

        const guitarPlayer = makeGuitarPlayer('Richie', 'Sambora');

        guitarPlayer.firstName = undefined;
        console.log(guitarPlayer);

        // Проверим, существует ли свойство 'firstName'

        // Способ №1. Сравнить с undefined
        console.log(guitarPlayer.firstName !== undefined);

        // Способ №2. Воспользоваться оператором 'in'
        console.log('firstName' in guitarPlayer);
      `}
      </pre>
    </section>
  );
}
export default OperatorDelete;
