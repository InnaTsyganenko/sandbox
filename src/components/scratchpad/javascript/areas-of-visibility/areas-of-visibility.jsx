import React from 'react';

function AreasOfVisibility() {

  return (
    <section className="conspect">
      <h1>Области видимости</h1>
      <p>Область видимости — это набор всех значений, доступных функции. Выделяют 3 области видимости: локальную, блочную и глобальную.</p>
      <h2>Локальная</h2>
      <p>Область видимости функции. В неё входят параметры функции и переменные, объявленные в ней.</p>
      <p>Области видимости создаются только функциями. Поэтому, если переменная была создана в другой конструкции, например, в цикле, она будет доступна для чтения из функции.</p>
      <pre>{`var name = 'Keks';
console.log(name); // 'Keks'

var makeAnimalTypeVariable = function () {
var animalType = 'Cat';
}
makeAnimalTypeVariable();
console.log(animalType); // animalType is not defined`}
      </pre>
      <p>Если вывести в консоль значение переменной name, мы получим значение Keks, так как переменная определена в одной области видимости с вызовом консоли.</p>
      <p>Но при попытке получить значение переменной animalType, получим сообщение о том, что переменная не определена. Это происходит из-за того, что переменная animalType объявлена внутри функции makeAnimalTypeVariable, то есть в её локальной области видимости, а значит не может быть прочитана снаружи функции. Даже не смотря на то, что мы вызвали функцию makeAnimalTypeVariable прежде.</p>
      <h2>Глобальная область видимости</h2>
      <p>Глобальная область видимости — набор значений доступный везде. В неё попадают все переменные, объявленные «прямо в JS-файле», то есть вне функций. Переменные, объявленные в глобальной области видимости, попадают в объект window, который описывает текущую вкладку браузера (исключая вложенные iframe, для каждого из них создаётся свой объект window).</p>
      <p><a href="examples/global-variable-work/index.html">Watch an example</a></p>
      <p>Благодаря глобальной области видимости можно объявить переменную в одном файле, задать ей значение в другом файле, а воспользоваться ей вообще в третьем месте. У этого подхода есть как преимущества, так и недостатки.</p>
      <p>Основное преимущество заключается в том, что с помощью глобальной области видимости можно обмениваться данными между файлами.</p>
      <p>Основной недостаток — это возможность случайно изменить значение глобальной переменной в одном из файлов — затереть исходное значение. И при использовании этой переменной в третьем файле мы получим не то значение, которое ожидали. На первый взгляд может показаться, что такая ситуация — затереть исходную переменную — невозможна в нашем коде. Увы, на самом деле это весьма распространённая ошибка. Рассмотрим пример такой ошибки:</p>
      <pre>{`<!-- Создаём глобальную переменную со значением 'Cat' в index.html-->
<script>
var boss = 'Cat'; // window.boss = 'Cat'
</script>
<script src="./file-1.js"></script>
<script src="./file-2.js"></script>
// Случайно перезаписываем значение переменной 'boss' в file-1.js,
просто потому что захотелось тоже объявить переменную с коротким и понятным названием
var boss = 'Keks'; // window.boss = 'Keks'
// Прочитаем значение переменной 'boss' в file-2.js
console.log(boss); // console.log(window.boss); → получим 'Keks', хотя ожидали 'Cat'`}
      </pre>

      <h2>Блочная область видимости</h2>
      <p>Блочная область видимости — область видимости, обусловленная блоком фигурных скобок {}. Разберём на примере:</p>
      <pre>{`{
  var nickname = 'Keks';
}
// Переменная, объявленная через var успешно читается
console.log(nickname);
{
  let kind = 'The Cat';
  const type = ‘Animal’;
}
// Переменные, объявленные через 'let' и 'const', видны только внутри блока фигурных скобок
console.log(kind); // kind is not defined
console.log(type); // type is not defined
// И недоступны снаружи, где мы пытаемся вывести их в консоль`}
      </pre>
      <p>Блок фигурных скобок может быть самостоятельным или быть частью других конструкций (for, if, ...).</p>
      <p className="hl-3">Обратите внимание, что объект — это не блок фигурных скобок!</p>
      <p>Глобальные области видимости используются довольно редко. Можно использовать там, где вы точно знаете что у вас один файл на проекте, либо один тег script, либо вы хотите организовать модульность, тем не менее во всех остальных случаях, нужно стараться глобальные области видимости не использовать, если в этом нет серьёзной необходимости.</p>
    </section>
  );
}
export default AreasOfVisibility;
