import React from 'react';

function Shadows() {

  return (
    <section className="conspect">
      <h1>Тени</h1>
      <h2>Свойство box-shadow</h2>
      <p> Тени создаются с помощью CSS-свойства box-shadow. С помощью этого свойства можно создавать множественные тени. Это достаточно сложное свойство, которое состоит из 6 компонентов.</p>
      <pre>{`box-shadow:
[inset] — внутренняя
5px     — смещение по x
10px    — смещение по y
[2px]   — размытие
[3px]   — растяжение
[red];  — цвет`}
      </pre>
      <p>Ключевое слово inset, растяжение, размытие и цвет не являются обязательными. Порядок следования цифровых значений важен. Если в box-shadow использовать ключевое слово inset, то тень будет отображаться внутри элемента. inset лучше размещать либо в самом начале свойства, либо в самом конце.</p>
      <p>При нулевом (или не указанном) растяжении размер тени такой же, как у элемента. При положительном растяжении размер тени становится больше размера элемента, а при отрицательном — меньше.</p>

      <h3>Размытие + растяжение</h3>
      <p>Внешний вид тени будет зависеть от соотношения величин размытия и растяжения:</p>
      <ul>
        <li>размытие есть, растяжение отрицательное — тень очень светлая;</li>
        <li>размытие есть, растяжения нет — тень обычная;</li>
        <li>размытие больше растяжения — тень темнее обычного;</li>
        <li>размытие меньше растяжения — тень очень темная.</li>
      </ul>

      <h3>Цвет тени</h3>
      <p>Если цвет тени не задан, то он берётся от цвета текста элемента с тенью.</p>

      <h3>Полупрозрачная тень</h3>
      <p>Если у тени ненулевой радиус размытия, то она автоматически становится полупрозрачной. Но иногда нужно сделать полупрозрачной тень без радиуса размытия.</p>

      <h3>Тень только с одной стороны</h3>
      <p>Для этого нужно задать тени отрицательное растяжение и положительное размытие, а затем сместить тень в нужном направлении. Отрицательное растяжение сделает размытую тень меньше элемента, а смещение покажет край тени только с одной стороны.</p>
      <p>Подобный приём позволяет имитировать градиенты с помощью внутренних теней.</p>

      <h3>Множественные тени</h3>
      <p>Свойство box-shadow позволяет задавать одному элементу несколько теней. Для этого нужно перечислить значения теней через запятую, например:</p>
      <pre>{`box-shadow:
  0 0 5px 0 red,
  0 0 10px 0 white;`}
      </pre>
      <p>Тени, которые расположены в списке выше, будут перекрывать тени, которые расположены ниже.</p>

      <h3>Несколько рамок у одного элемента</h3>
      <p>можно имитировать множественные рамки у элемента. Для этого нужно добавить элементу несколько теней с положительным растяжением и с нулевыми смещениями и размытием.</p>
      <p>Но тут есть одна тонкость. Настоящие рамки увеличивают размер элемента, а рамки-тени — нет. Поэтому надо следить, чтобы вокруг элемента было достаточно свободного пространства, иначе он может перекрыть соседние элементы.</p>
    </section>
  );
}
export default Shadows;