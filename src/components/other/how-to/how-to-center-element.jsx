import React from 'react';

function HowToCenterElement() {

  return (
    <section className="conspect">
      <h2>How to center a element</h2>
      <ul>
        <li>указать элементу ширину, которая меньше ширины родительского элемента;</li>
        <li>задать элементу автоматические внешние отступы справа и слева.</li>
      </ul>
      <pre>{`width: 500px;
margin: 0 auto;`}
      </pre>
      <p>Это удобный трюк, но работает он с оговорками. Во-первых, таким образом не получится выровнять строчные боксы. Во-вторых, в блочном боксе (в отличие от флекс-контейнера) подобным образом можно выровнять элемент только по горизонтали.</p>

      <h2>How to center a “position: absolute” element</h2>
      <pre>{`position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;

or

position: absolute;
top: 50%;  /* position the top  edge of the element at the middle of the parent */
left: 50%; /* position the left edge of the element at the middle of the parent */

transform: translate(-50%, -50%); /* This is a shorthand of
translateX(-50%) and translateY(-50%) */

or

width: 100%;
text-align: center;
      `}
      </pre>

      <h2>Отцентровать элемент before/after</h2>
      <pre>{`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.button::before {
  position: absolute;
  content: "+";
  color: white;
  font-size: 36px;
}
      `}
      </pre>
    </section>

  );
}
export default HowToCenterElement;
