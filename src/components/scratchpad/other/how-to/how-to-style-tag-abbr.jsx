import React from 'react';

function HowToStyleTagAbbr() {

  return (
    <section className="conspect">
      <h1>Как стилизовать </h1>
      <p>Саму title невозможно стилизовать. Можно присвоить вместо title атрибут data-title(data-title) и стилизовать его.</p>
      <pre>{`abbr {
  position: relative;
  background: rgba(251, 255, 0, 0.719); }

abbr:hover::after {
    position: absolute;
    display: flex;
    color: #fff;
    background: rgb(0, 0, 0);
    content: attr(data-title);
    padding: 0.8em;
    border-radius: 5px;
    z-index: 1000;
    font-size: 16px;
}`}
      </pre>
    </section>

  );
}
export default HowToStyleTagAbbr;
