import React from 'react';

function HowToCenterElement() {

  return (
    <section className="conspect">
      <h2>How to center a “position: absolute” element</h2>
      <p></p>

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
    </section>

  );
}
export default HowToCenterElement;
